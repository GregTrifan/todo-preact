import { useState } from "preact/hooks";
const Todo = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const addText = (e) => {
    setText(e.target.value);
  };
  const addTodo = () => {
    if (text !== "") {
      setTodo([...todo, text]);
    }
    setText("");
  };
  return (
    <div>
      <input value={text} onInput={addText} />
      <button onClick={() => addTodo()}>Add</button>
      <ul>
        {todo.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
};
export default Todo;
