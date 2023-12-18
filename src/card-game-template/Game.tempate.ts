import Deck from './Deck.template';
import Player from './Player.template';

export default abstract class Game<T> {
  players: Player<&T>[]=[];
  constructor(players: Player<&T>[],readonly deck: Deck<&T>) {
    this.players = players;
  }
  async start() {
    for (let player of this.players) {
      await player.NameSelf()
    }
    this.deck.shuffle();
  }
  drawCards() {
    while (!this.players[0].HasFinishDraw()) {
      this.deck.drawCards(this.players);
    }
  }
  async gameFlow() {
    await this.start();
    this.drawCards();
    this.PrepareGameStep();
    await this.runGame();
    this.DisplayWinner();
  }
  async runGame() {
    while (!this.IsGameFinished()) {
      await this.TakeTurn();
    }
  }
  abstract TakeTurn(): Promise<void>
  abstract DisplayWinner(): void
  abstract PrepareGameStep(): void
  abstract IsGameFinished():boolean
}