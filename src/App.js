import "./App.css";
import Header from "./Components/Header";
import IslandForm from "./Components/IslandForm";
import IslandList from "./Components/IslandList";
import islands from "./data/islands";
import { useState } from "react";

function App() {
  const [island, setIsland] = useState(islands[6]);

  return (
    <div>
      <Header />

      <div className="homePage">
        <IslandList setIsland={setIsland} />
        <IslandForm island={island} />
        <island />
      </div>
    </div>
  );
}

export default App;
