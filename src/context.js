import { createContext } from "react";
import reducer, { initialState } from "./reducer";

const ToDosContext = createContext();

const TodosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ToDosContext.Provider value={{ state, dispatch }}>
      {children}
    </ToDosContext.Provider>
  );
};

export const useDispatch = () => {
  const { dispatch } = useDispatch(TodosProvider);
  return dispatch;
};

export default TodosProvider;
