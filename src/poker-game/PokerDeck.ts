import Deck from '../card-game-template/Deck.template';
import { PokerCard, Ranks, Suits } from './PokerCard';

export default class PokerDeck extends Deck<PokerCard> {
  constructor() {
    super();
    this.initData();
  }
  initData() {
    for (let suit of Suits) {
      for (let rank of Ranks) {
        this.cards.push(new PokerCard(suit, rank));
      }
    }
  }
}