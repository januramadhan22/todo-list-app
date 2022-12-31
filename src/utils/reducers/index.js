import todoReducer from "./todo";

const initialState = {
  getTodoResults: false,
  getTodoError: false,
  getTodoLoading: false,

  addTodoResults: false,
  addTodoError: false,
  addTodoLoading: false,
};

const combineReducers = (reducers) => {
  return (state, action) => {
    return Object.keys(reducers).reduce((acc, prop) => {
      return {
        ...acc,
        ...reducers[prop](
          {
            [prop]: acc[prop],
          },
          action
        ),
      };
    }, state);
  };
};

const appReducers = combineReducers({
  todoReducer,
});

export { initialState, combineReducers, appReducers };
