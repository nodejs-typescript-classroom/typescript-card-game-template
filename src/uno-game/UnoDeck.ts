import Deck from '../card-game-template/Deck.template';
import UnoCard, { Colors, Numbers } from "./UnoCard";

export default class UnoDeck extends Deck<UnoCard> {
  constructor() {
    super();
    this.initData();
  }
  initData() {
    for (let color of Colors) {
      for (let unoNum of Numbers) {
        this.cards.push(new UnoCard(unoNum, color));
      }  
    }
  }
  showDeck() {
    let result = "deck:";
    for (let card of this.cards) {
      result += `${card}`;
    }
    console.log(result);
  }
  IsDeckEmpty(): boolean {
    return this.cards.length == 0;
  }
  AddCards(cards: &UnoCard[]) {
    this.cards.push(...cards);
  }
}