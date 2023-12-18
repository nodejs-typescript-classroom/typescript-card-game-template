export enum Suit {
  Club,
  Diamond,
  Heart,
  Spade
}
export enum Rank {
  Two = 2,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  J,
  Q,
  K,
  A
}
const suits = [
  "♣",
	"♦",
	"♥",
	"♠",
];
const ranks = [
  "2", "3", "4", "5", "6", "7", "8", "9", "10",
	"J", "Q", "K", "A",
];
export const Suits: Suit[]= [
  Suit.Club,
  Suit.Diamond,
  Suit.Heart,
  Suit.Spade
];
export const Ranks: Rank[] = [
  Rank.Two,
  Rank.Three,
  Rank.Four,
  Rank.Five,
  Rank.Six,
  Rank.Seven,
  Rank.Eight,
  Rank.Nine,
  Rank.Ten,
  Rank.J,
  Rank.Q,
  Rank.K,
  Rank.A
];

export class PokerCard {
  constructor(readonly suit: Suit,readonly rank: Rank) {}
  Compare(card:&PokerCard): number {
    if (this.rank == card.rank && this.suit == card.suit) {
      return 0
    } else if ((this.rank < card.rank) || (this.rank == card.rank && this.suit < card.suit)) {
      return -1;
    } else {
      return 1;
    }
  }
  toString(): string {
    return `[${ranks[this.rank-2]}${suits[this.suit]}]`
  }
}