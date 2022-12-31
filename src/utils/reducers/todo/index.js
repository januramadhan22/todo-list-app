import { GET_TODO_LIST, ADD_TODO } from "../../actions/todoAction";

const todo = (state, action) => {
  const { type } = action;
  switch (type) {
    case GET_TODO_LIST:
      return {
        ...state,
        getTodoResults: action.payload.data,
        getTodoError: action.payload.errorMessage,
        getTodoLoading: action.payload.loading,
      };

    case ADD_TODO:
      return {
        ...state,
        addTodoResults: action.payload.data,
        addTodoError: action.payload.errorMessage,
        addTodoLoading: action.payload.loading,
      };
    default:
      return state;
  }
};

export default todo;
