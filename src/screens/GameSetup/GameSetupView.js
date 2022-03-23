import CreatableSelect from "react-select/creatable";

const components = {
  DropdownIndicator: null,
};

const GameSetupView = ({
  inputValue,
  value,
  handleChange,
  handleInputChange,
  handleKeyDown,
  handleSubmit,
  error,
}) => {
  return (
    <div className="centerContent">
      <h1>Who's playing?</h1>

      {error && (
        <p className="errorMessage">
          Game can only be played with 4 or 5 people
        </p>
      )}

      <CreatableSelect
        components={components}
        inputValue={inputValue}
        isClearable
        isMulti
        menuIsOpen={false}
        onChange={handleChange}
        onInputChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type players names and press enter"
        value={value}
      />

      <button
        className={error ? "errorButton" : "startButton"}
        onClick={handleSubmit}
      >
        Start
      </button>
    </div>
  );
};

export { GameSetupView };
