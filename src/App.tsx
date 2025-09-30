import { PathfindingProvider } from "./context/PathfindingContext";

function App() {
  return (
    <PathfindingProvider>
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
    </PathfindingProvider>
  );
}

export default App;
