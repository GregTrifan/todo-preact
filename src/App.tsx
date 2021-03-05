import { h } from "preact";
import Todo from "./routes/Todo";
import "carbon-components/css/carbon-components.css";
import Navbar from "./components/Navbar";
import { Router } from "preact-router";
import Graph from "./routes/Graph";
const App = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{ marginTop: "80px", marginLeft: "20px", marginRight: "20px" }}
      >
        <Router>
          <Todo path="/" />
          <Graph path="/stats/:Coin" />
        </Router>
      </div>
    </div>
  );
};

export default App;
