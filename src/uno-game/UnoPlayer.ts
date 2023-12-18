import Player from '../card-game-template/Player.template';
import UnoCard from './UnoCard';

export abstract class UnoPlayer extends Player<UnoCard>{
  matchedList: Map<number, &UnoCard>;
  constructor() {
    super();
    this.matchedList = new Map<number, &UnoCard>();
  }
  public HasFinishDraw(): boolean {
    return this.hands.length == 5;
  }
  public FindMatchedHand(card: &UnoCard): Map<number,&UnoCard> {
    const matchedCards = new Map<number,&UnoCard>();
    this.hands.forEach((hand, idx) => {
      if (hand.Equal(card)) {
        matchedCards.set(idx, hand);
      }
    });
    this.matchedList = matchedCards;
    return matchedCards;
  }
  public ClearMatchedList() {
    this.matchedList = new Map<number, &UnoCard>();
  }
  public IsHandEmpty(): boolean {
    return this.hands.length == 0;
  }
  public GetDetailMatchedList(matchedList: Map<number, &UnoCard>): string {
    let result = "[";
    for (let [idx, card] of matchedList) {
      result += `${idx}:${card}`;
    }
    result += "]";
    return result;
  }
} 