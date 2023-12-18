import Game from '../card-game-template/Game.tempate';
import { Table } from './Table';
import UnoCard from "./UnoCard";
import UnoDeck from './UnoDeck';
import { UnoPlayer } from './UnoPlayer';

export class UnoGame extends Game<UnoCard> {
  table: &Table;
  turns: number = 0;
  constructor(readonly deck: UnoDeck, readonly players: UnoPlayer[]) {
    super(players, deck);
    this.table = new Table();
    this.turns = 0;
  }
  async TakeTurn(): Promise<void> {
    const currentUser = this.GetCurrrentUser();
    const topTableCard = this.table.FindTopest();
    const matchedList = currentUser.FindMatchedHand(topTableCard);
    if (matchedList.size == 0) {
      this.handleNoMatched(currentUser);
      this.NextTurn();
      return;
    }
    console.log(`=======\n${this.turns+1}turn start`);
    this.deck.showDeck();
    console.log(`table top: ${this.table.FindTopest()}`);
    const card = await currentUser.ChooseHand();
    console.log(`player: ${currentUser.GetName()}, show: ${card}`);
    this.table.AddCard(card);
    currentUser.ClearMatchedList();
    console.log(`${this.turns + 1} turn end`);
    if (!this.IsGameFinished()) {
      this.NextTurn();
    }
  }
  handleNoMatched(player: &UnoPlayer) {
    console.log(`player: ${player.GetName()} handle not matched`);
    if (this.deck.IsDeckEmpty()) {
      const cards = this.table.PushBackToDeck();
      this.deck.AddCards(cards);
      return;
    }
    this.handleDeckAddHand(player);
  }
  handleDeckAddHand(player: &UnoPlayer) {
    const card = this.deck.drawCard();
    player.addHand(card);
  }
  DisplayWinner(): void {
    console.log(`winner is ${this.GetCurrrentUser().GetName()}`);
  }
  PrepareGameStep(): void {
    const card = this.deck.drawCard();
    this.table.AddCard(card);
  }
  IsGameFinished(): boolean {
    return this.GetCurrrentUser().IsHandEmpty();
  }
  GetTurn(): number {
    return this.turns;
  }
  NextTurn() {
    this.turns++;
  }
  GetCurrrentUser(): &UnoPlayer {
    return this.players[this.GetTurn()%this.players.length];
  }
} 