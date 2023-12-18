import Player from "./Player.template";

export default abstract class Deck<C> {
  cards: &C[];
  constructor() {
    this.cards = [];
  }
  public shuffle() {
    const MaxIdx = this.cards.length -1;
    for (let i = MaxIdx; i > 0; i--) {
      const j = Math.floor(Math.random() * i+1);
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]
    }
  }
  public drawCards(players: Player<C>[]) {
    for (let player of players) {
      const card = this.drawCard();
      player.addHand(card);
    }
  }
  public drawCard():&C {
    const idx = Math.floor(Math.random()*(this.cards.length))
    const temp = this.cards[idx];
    this.cards.splice(idx, 1);
    return temp;
  }
}