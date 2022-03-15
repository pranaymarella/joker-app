import { GameSetupView } from "./GameSetupView";
import { useState } from "react";

const createOption = (label) => ({
  label,
  value: label,
});

const GameSetupController = () => {
  const [state, setState] = useState({
    inputValue: "",
    value: [],
  });

  const handleChange = (value) => {
    setState({
      ...state,
      value,
    });
  };

  const handleInputChange = (inputValue) => {
    setState({ ...state, inputValue });
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

  return (
    <GameSetupView
      inputValue={state.inputValue}
      value={state.value}
      handleChange={handleChange}
      handleInputChange={handleInputChange}
      handleKeyDown={handleKeyDown}
    />
  );
};

export { GameSetupController };
