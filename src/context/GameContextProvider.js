import { createContext, useReducer, useContext } from "react";

const GameContext = createContext();

const gameReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_NUM_PLAYERS": {
      return {
        ...state,
        num_players: payload,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};

const GameContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, {
    num_players: localStorage.getItem("num_players"),
  });

  const value = { state, dispatch };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

const useGameState = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGameState must be used within a GameContextProvider");
  }
  return context;
};

export { GameContext, GameContextProvider, useGameState };
