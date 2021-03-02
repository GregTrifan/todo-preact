import Todo from "./routes/Todo";
import "carbon-components/css/carbon-components.css";
import Navbar from "./components/Navbar";
import { Router } from "preact-router";
import Graph from "./routes/Graph";
const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ margin: "80px" }}>
        <Router>
          <Todo path="/" />
          <Graph path="/stats/:Coin" />
        </Router>
      </div>
    </div>
  );
};

export default App;
