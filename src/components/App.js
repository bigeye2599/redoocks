import Add from "./Add";
import { useState } from "../context";
import List from "./List";
import ToDo from "./ToDo";

function App() {
  const { toDos, completed } = useState();
  return (
    <>
      <h1>Add to do</h1>
      <Add />
      <List name={"To Dos"}>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} id={toDo.id} text={toDo.text} />
        ))}
      </List>
      <List name={completed.length !== 0 ? "Completed" : ""}>
        {completed.map((toDo) => (
          <ToDo
            key={toDo.id}
            id={toDo.id}
            text={toDo.text}
            isCompleted={true}
          />
        ))}
      </List>
    </>
  );
}

export default App;
