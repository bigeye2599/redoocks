import Add from "./Add";
import { useDispatch } from "./context";

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <h1>Add to do</h1>
      <Add />
      <ul>
        <h2>To Dos</h2>
        {state.toDos.map((toDo) => (
          <li key={toDo.id}>
            <span>{toDo.text}</span>
            <span onClick={() => dispatch({ type: DEL, payload: toDo.id })}>
              ❌
            </span>
            <span
              onClick={() => dispatch({ type: COMPLETE, payload: toDo.id })}
            >
              ✅
            </span>
          </li>
        ))}
      </ul>
      <ul>
        {state.completed.length !== 0 && (
          <>
            <h2>Completed</h2>
            {state.completed.map((toDo) => (
              <li key={toDo.id}>
                <span>{toDo.text}</span>
                <span
                  role="img"
                  aria-label=""
                  onClick={() => dispatch({ type: DEL, payload: toDo.id })}
                >
                  ❌
                </span>
                <span
                  role="img"
                  aria-label=""
                  onClick={() =>
                    dispatch({ type: UNCOMPLETE, payload: toDo.id })
                  }
                >
                  🙅‍♀️
                </span>
              </li>
            ))}
          </>
        )}
      </ul>
    </>
  );
}

export default App;
