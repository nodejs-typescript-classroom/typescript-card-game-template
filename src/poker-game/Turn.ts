import { PokerCard } from "./PokerCard";
import PokerPlayer from "./PokerPlayer"

export default class Turn {
  winner: &PokerPlayer;
  playerCards: Map<number, &PokerCard>;
  playerData: Map<number, &PokerPlayer>;
  constructor() {
    this.playerCards = new Map<number, &PokerCard>();
    this.playerData = new Map<number, &PokerPlayer>();
  }
  AddShow(card: &PokerCard, player: &PokerPlayer) {
    this.playerCards.set(player.GetId(), card);
    this.playerData.set(player.GetId(), player);
  }
  IsTurnEnd(): boolean {
    return this.playerData.size === 4;
  }
  toString():string {
    let result = "";
    this.playerCards.forEach((card, id) => {
      result += `player:${this.playerData.get(id)?.GetName()}, card: ${card}\n`;
    });
    result += `winner:${this.winner.GetName()} point:${this.winner.GetPoint()}\n`;
    return result;
  }
  FindWinner(): &PokerPlayer {
    let winnerId: number = 0;
    let maxCard: &PokerCard;
    this.playerCards.forEach((card, id)=> {
      if (!maxCard) {
        maxCard = card;
        winnerId = id;
      } else {
        if (maxCard.Compare(card) == -1) {
          maxCard = card;
          winnerId = id;
        }
      }
    });
    const winner = this.playerData.get(winnerId);
    if (winner) {
      this.winner = winner;
    }
    return this.winner;
  }
}