import UnoCard from "./UnoCard";
import { UnoPlayer } from "./UnoPlayer";
const usedAIName: Map<string, boolean> = new Map<string, boolean>(); 
export default class AIUnoPlayer extends UnoPlayer{
  async ChooseHand(): Promise<UnoCard> {
    console.log(`ai player:${this.GetName()}\ntotal ${this.hands.length} cards in hand, total hands: ${this.hands}\ntotal ${this.matchedList.size} card could use, usable cards: ${this.GetDetailMatchedList(this.matchedList)}`)
    let resultIdx = 0;
    for (let [idx, card] of this.matchedList) {
      resultIdx = idx;
      break;
    } 
    return this.extractCard(resultIdx);
  }
  async NameSelf(): Promise<void> {
    let nameExist = false;
    let name = "";
    do {
      const timeString = Date.now().toString();
      name = `AI-Number${timeString}`;
      nameExist = usedAIName.has(name);
      if (!nameExist) {
        usedAIName.set(name, true);
        console.log(`AI-player: ${name}`);
      }
    } while(nameExist);
    this.SetName(name);
  }
  
}