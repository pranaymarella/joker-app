import { GameContextProvider } from "./context";
import JokerGame from "./screens/JokerGame";

function App() {
  return (
    <div className="app">
      <GameContextProvider>
        <JokerGame />
      </GameContextProvider>
    </div>
  );
}

export default App;
