import { GameSetupView } from "./GameSetupView";
import { useState } from "react";
import { useGameState } from "../../context";
import {
  fourPersonBoard,
  fivePersonBoard,
} from "../../boardsAndScoringTemplate";

const createOption = (label) => ({
  label,
  value: label,
});

const ALLOWED_NUM_PLAYERS = [4, 5];

const GameSetupController = () => {
  const { dispatch } = useGameState();

  const [state, setState] = useState({
    inputValue: "",
    value: [],
  });
  const [error, setError] = useState(false);

  const handleChange = (value) => {
    setState({
      ...state,
      value,
    });
  };

  const handleInputChange = (inputValue) => {
    setState({ ...state, inputValue });
    setError(false);
  };

  const handleKeyDown = (event) => {
    if (!state.inputValue) return;

    switch (event.key) {
      case "Enter":
      case "Tab":
        setState({
          inputValue: "",
          value: [...state.value, createOption(state.inputValue)],
        });
        return event.preventDefault();
      default:
        return;
    }
  };

  const handleCreateGameBoard = (players) => {
    const board = players.length === 4 ? fourPersonBoard : fivePersonBoard;

    return JSON.stringify(
      Object.fromEntries(
        players.map((player) => {
          return [player, board];
        })
      )
    );
  };

  const handleSubmit = () => {
    const { value } = state;

    const players = value.map((info) => {
      return info.value;
    });

    if (!ALLOWED_NUM_PLAYERS.includes(players.length)) {
      setError(true);
      return;
    }

    localStorage.setItem("num_players", value.length);
    localStorage.setItem("players_info", players);
    localStorage.setItem("game_board", handleCreateGameBoard(players));

    dispatch({
      type: "SET_NUM_PLAYERS",
      payload: players.length,
    });
  };

  return (
    <GameSetupView
      inputValue={state.inputValue}
      value={state.value}
      handleChange={handleChange}
      handleInputChange={handleInputChange}
      handleKeyDown={handleKeyDown}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
};

export { GameSetupController };
