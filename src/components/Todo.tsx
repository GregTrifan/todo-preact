import { useState } from "preact/hooks";
import {
  TextInput,
  Button,
  UnorderedList,
  ListItem,
  Content
} from "carbon-components-react";

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
      <div style={{ margin: "auto" }}>
        <TextInput
          style={{ width: "80%", margin: "auto" }}
          placeholder="Some text"
          value={text}
          required
          onInput={addText}
        />
        <br />
        <Button
          style={{ marginTop: "10px", margin: "auto", display: "flex" }}
          onClick={() => addTodo()}
        >
          Add
        </Button>
      </div>
      <Content>
        <h3>Stored Todos</h3>
        <UnorderedList>
          {todo.map((todo) => {
            return <ListItem>{todo}</ListItem>;
          })}
        </UnorderedList>
      </Content>
    </div>
  );
};
export default Todo;
