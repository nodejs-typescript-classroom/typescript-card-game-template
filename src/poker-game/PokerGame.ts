import Game from '../card-game-template/Game.tempate';
import { PokerCard } from './PokerCard';
import PokerDeck from './PokerDeck';
import PokerPlayer from './PokerPlayer';
import Turn from './Turn';

export class PokerGame extends Game<PokerCard> {
  constructor(readonly deck: PokerDeck, readonly players: PokerPlayer[]) {
    super(players, deck);
  }
  turns: number = 0;
  async TakeTurn() {
    const turn: &Turn = new Turn();
    // const playersMap = new Map<number, &PokerPlayer>();
    for (let player of this.players) {
      const card = await player.ChooseHand();
      turn.AddShow(card, player);
      // playersMap.set(player.GetId(), player);
    }
    const winner = turn.FindWinner();
    winner.GainPoint();
    // playersMap.get(winner.GetId())?.GainPoint();
    this.displayTurn(turn); 
    this.nextTurn();
  }
  DisplayWinner() {
    let winners: &PokerPlayer[] = [];
    for (let player of this.players) {
      if (winners.length == 0) {
        winners.push(player);
        continue;
      }
      if (winners[0].GetPoint() < player.GetPoint()) {
        winners = [player];
      } else if (winners[0].GetPoint() == player.GetPoint()) {
        winners.push(player);
      }
    }
    let winnerResults = "winners are ";
    let count = 0;
    for (let winner of winners) {
      winnerResults += `${winner.GetName()}`
      if (count != winners.length -1) {
        winnerResults += ",";
      } else {
        winnerResults += `, points ${winner.GetPoint()}`;
      }
      count++;
    }
    console.log(`=======\n${winnerResults}`);
  }
  PrepareGameStep() {}
  IsGameFinished(): boolean {
    return this.turns == 13;
  }
  nextTurn() {
    this.turns++;
  }
  displayTurn(turn: &Turn) {
    console.log(`=======\n${this.turns+1}th\n${turn}`);
  }
}