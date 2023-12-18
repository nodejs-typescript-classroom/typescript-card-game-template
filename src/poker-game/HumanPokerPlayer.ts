import { PokerCard } from './PokerCard';
import  PokerPlayer  from './PokerPlayer';
import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'process';

export default class HumanPokerPlayer extends PokerPlayer{
  async ChooseHand(): Promise<&PokerCard> {
    this.sortHands();
    console.log(`${this.GetName()}, point: ${this.GetPoint()}\nTotal ${this.hands.length} cards, hands:${this.hands}`);
    const io = readline.createInterface({ input: stdin, output: stdout});
    let idx: number = 0;
    let isInputNotCorrect = false;
    do {
      const answer = await io.question(`${this.GetName()}, please choose idx of hands:(0, ${this.hands.length-1}):`);
      idx = Number(answer);
      isInputNotCorrect = idx < 0 || idx >= this.hands.length || Number.isNaN(idx);
    } while(isInputNotCorrect);
    io.close();
    return this.extractCard(idx);
  }
  async NameSelf() {
    const io = readline.createInterface({ input: stdin, output: stdout});
    const name = await io.question('please enter your name:');
    this.SetName(name);
    io.close();
  }
}