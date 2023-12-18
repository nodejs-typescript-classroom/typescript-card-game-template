import AIPokerPlayer from './poker-game/AIPokerPlayer';
import HumanPokerPlayer from './poker-game/HumanPokerPlayer';
import PokerDeck from './poker-game/PokerDeck';
import { PokerGame } from './poker-game/PokerGame';
import AIUnoPlayer from './uno-game/AIUnoPlayer';
import HumanUnoPlayer from './uno-game/HumanUnoPlayer';
import UnoDeck from './uno-game/UnoDeck';
import { UnoGame } from './uno-game/UnoGame';

// const pokerGame = new PokerGame(
//   new PokerDeck(),
//   [
//     new HumanPokerPlayer(),
//     new AIPokerPlayer(),
//     new AIPokerPlayer(),
//     new AIPokerPlayer(),
//   ]
// );
// pokerGame.gameFlow();
const unoGame = new UnoGame(
  new UnoDeck(),
  [
    new HumanUnoPlayer(),
    new AIUnoPlayer(),
    new AIUnoPlayer(),
    new AIUnoPlayer()
  ]
);
unoGame.gameFlow();