import { JokerGameView } from "./JokerGameView";
import { useGameState } from "../../context";
import { GameSetup } from "../GameSetup";

const JokerGameController = () => {
  const {
    state: { num_players },
  } = useGameState();

  if (!num_players) {
    return <GameSetup />;
  }

  return <JokerGameView numPlayers={num_players} />;
};

export { JokerGameController };
