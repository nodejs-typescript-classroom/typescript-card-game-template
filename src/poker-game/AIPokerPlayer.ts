import { PokerCard } from "./PokerCard";
import PokerPlayer from "./PokerPlayer";
export const AIPlayerNameMap = new Map<string, boolean>();
export default class AIPokerPlayer extends PokerPlayer{
  async ChooseHand(): Promise<PokerCard> {
    this.sortHands();
    const lenHands = this.hands.length - 1;
    let idx = 0;
    if (lenHands > 4) {
      const randList = [0,1,2,3, lenHands];
      const randIx = Math.floor(Math.random()*randList.length);
      idx = randList[randIx];
    } else {
      idx = Math.floor(Math.random() * lenHands);
    }
    return this.extractCard(idx);
  }
  async NameSelf() {
    let nameExist = false;
    let name = "";
    do {
      let timeString = Date.now().toString();
      name = `AI-Number${timeString}`;
      nameExist = AIPlayerNameMap.has(name);
      if (!nameExist) {
        AIPlayerNameMap.set(name, true);
        console.log(`AI-player: ${name}`);
      }
    } while(nameExist);
    this.SetName(name);
  }

}