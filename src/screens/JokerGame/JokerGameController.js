import { JokerGameView } from "./JokerGameView";
import { useGameState } from "../../context";
import { GameSetup } from "../GameSetup";

const JokerGameController = () => {
  const {
    state: { num_players },
    dispatch,
  } = useGameState();

  const handleQuitGame = () => {
    localStorage.removeItem("players_info");
    localStorage.removeItem("num_players");
    localStorage.removeItem("game_board");

    dispatch({
      type: "SET_NUM_PLAYERS",
      payload: null,
    });
  };

  // if there are no players, setup game
  if (!num_players) {
    return <GameSetup />;
  }

  return <JokerGameView numPlayers={num_players} quitGame={handleQuitGame} />;
};

export { JokerGameController };
