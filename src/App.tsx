import Todo from "./components/Todo";
import "carbon-components/css/carbon-components.css";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <Todo />
      </div>
    </div>
  );
};

export default App;
