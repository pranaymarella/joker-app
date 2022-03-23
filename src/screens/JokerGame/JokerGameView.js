const JokerGameView = ({ num_players, quitGame }) => {
  return (
    <div>
      <h1>Joker Game</h1>
      <p>Players: {num_players}</p>
      <button onClick={quitGame}>Quit Game</button>
    </div>
  );
};

export { JokerGameView };
