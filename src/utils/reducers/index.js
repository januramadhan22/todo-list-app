import todoReducer from "./todo";
import itemReducer from "./item";

const initialState = {
  getTodoResults: false,
  getTodoError: false,
  getTodoLoading: false,

  addTodoResults: false,
  addTodoError: false,
  addTodoLoading: false,

  deleteTodoResults: false,
  deleteTodoError: false,
  deleteTodoLoading: false,

  updateTodoResults: false,
  updateTodoError: false,
  updateTodoLoading: false,

  getItemResults: false,
  getItemError: false,
  getItemLoading: false,
};

const combineReducers = (reducers) => {
  return (state, action) => {
    return Object.keys(reducers).reduce((acc, prop) => {
      return {
        ...acc,
        ...reducers[prop]({ [prop]: acc[prop] }, action),
      };
    }, state);
  };
};

const appReducers = combineReducers({
  todoReducer,
  itemReducer,
});

export { initialState, combineReducers, appReducers };
