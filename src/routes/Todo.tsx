import { useState } from "preact/hooks";
import { h } from "preact";
import {
  TextInput,
  Button,
  UnorderedList,
  ListItem,
  Content
} from "carbon-components-react";

const Todo = () => {
  const [wrong, setWrong] = useState(false);
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const addText = (e) => {
    setText(e.target.value);
  };
  const addTodo = () => {
    if (text !== "") {
      setTodo([...todo, text]);
      setWrong(false);
    } else {
      setWrong(true);
    }
    setText("");
  };
  return (
    <div>
      <div style={{ margin: "auto" }}>
        <TextInput
          style={{ margin: "auto" }}
          placeholder="Some text"
          value={text}
          required
          invalid={wrong}
          invalidText="This field can't be empty"
          onInput={addText}
        />
        <Button
          style={{
            marginTop: "10px",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex"
          }}
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
