import UnoCard from "./UnoCard";
import { UnoPlayer } from "./UnoPlayer";
import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'process';
export default class HumanUnoPlayer extends UnoPlayer {
  async ChooseHand(): Promise<UnoCard> {
    console.log(`human player:${this.GetName()}\ntotal ${this.hands.length} cards in hand, total hands: ${this.hands}\ntotal ${this.matchedList.size} cards could use, usable cards:${this.GetDetailMatchedList(this.matchedList)}`);
    const io = readline.createInterface({ input: stdin, output: stdout});
    let idx: number = 0;
    let isInputNotCorrect = false;
    do {
      const answer = await io.question(`${this.GetName()}, please choose cards to show:`);
      idx = Number(answer);
      isInputNotCorrect = Number.isNaN(idx)||!this.matchedList.has(idx);
    } while(isInputNotCorrect);
    io.close();
    return this.extractCard(idx);
  }
  async NameSelf(): Promise<void> {
    const io = readline.createInterface({ input: stdin, output: stdout});
    const name = await io.question('please enter your name:');
    this.SetName(name);
    io.close();
  }
  
} 