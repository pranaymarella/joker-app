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
}) => {
  return (
    <div className="centerContent">
      <h1>Who's playing?</h1>

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

      <button className="startButton" onPress={handleSubmit}>
        Start
      </button>
    </div>
  );
};

export { GameSetupView };
