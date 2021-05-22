import { v4 as uuidv4 } from "uuid";
import { ADD, COMPLETE, DEL, UNCOMPLETE } from "./actions";

export const initialState = {
  toDos: [],
  completed: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { text: action.payload, id: uuidv4() }],
      };
    case DEL:
      return {
        ...state,
        toDos: state.toDos.filter((todo) => todo.id !== action.payload),
      };
    case COMPLETE:
      const target = state.toDos.find((todo) => todo.id === action.payload);
      return {
        ...state,
        toDos: state.toDos.filter((todo) => todo.id !== action.payload),
        completed: [...state.completed, { ...target }],
      };
    case UNCOMPLETE:
      const aTarget = state.completed.find(
        (todo) => todo.id === action.payload
      );
      return {
        ...state,
        completed: state.completed.filter((todo) => todo.id !== action.payload),
        toDos: [...state.toDos, { ...aTarget }],
      };
    default:
      return;
  }
};

export default reducer;
