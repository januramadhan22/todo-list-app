import {
  GET_TODO_LIST,
  ADD_TODO,
  DELETE_TODO_LIST,
  GET_DETAIL_TODO,
  UPDATE_TODO,
} from "../../actions/todoAction";

const todo = (state, action) => {
  const { type } = action;
  switch (type) {
    case GET_TODO_LIST:
      return {
        ...state,
        getTodoResults: action.payload.data,
        getTodoLoading: action.payload.loading,
        getTodoError: action.payload.errorMessage,
      };

    case ADD_TODO:
      return {
        ...state,
        addTodoResults: action.payload.data,
        addTodoLoading: action.payload.loading,
        addTodoError: action.payload.errorMessage,
      };

    case DELETE_TODO_LIST:
      return {
        ...state,
        deleteTodoResults: action.payload.data,
        deleteTodoLoading: action.payload.loading,
        deleteTodoError: action.payload.errorMessage,
      };

    case GET_DETAIL_TODO:
      return {
        ...state,
        detailTodoResults: action.payload.data,
        detailTodoLoading: action.payload.loading,
        detailTodoError: action.payload.errorMessage,
      };

    case UPDATE_TODO:
      return {
        ...state,
        updateTodoResults: action.payload.data,
        updateTodoLoading: action.payload.loading,
        updateTodoError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default todo;
