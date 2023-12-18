import UnoCard from './UnoCard';

export class Table {
  cards: &UnoCard[];
  constructor(){
    this.cards = [];
  }
  PushBackToDeck(): &UnoCard[] {
    const copyIdx = this.cards.length - 2;
    const others = this.cards.slice(0, copyIdx);
    this.cards.splice(0,this.cards.length-1);
    return others;
  }
  AddCard(card: &UnoCard) {
    this.cards.push(card);
  }
  FindTopest(): &UnoCard {
    return this.cards[this.cards.length-1];
  }
}