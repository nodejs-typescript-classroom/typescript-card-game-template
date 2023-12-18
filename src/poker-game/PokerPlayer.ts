import Player from '../card-game-template/Player.template';
import { PokerCard } from './PokerCard';

export default abstract class PokerPlayer extends Player<PokerCard> {
  point: number = 0;
  constructor() {
    super();
    this.point=0;
  }
  public GetPoint(): number {
    return this.point;
  }
  public GainPoint() {
    this.point++;
  }
  sortHands() {
    this.hands.sort((a, b)=> b.Compare(a));
  }
  public HasFinishDraw(): boolean {
    return this.hands.length == 13;
  }
} 