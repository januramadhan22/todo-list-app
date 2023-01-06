import {
  ADD_ITEM,
  GET_ITEM_LIST,
  DELETE_ITEM_LIST,
  UPDATE_ITEM,
} from "../../actions/itemAction";

const item = (state, action) => {
  const { type } = action;
  switch (type) {
    case GET_ITEM_LIST:
      return {
        ...state,
        getItemResults: action.payload.data,
        getItemLoading: action.payload.loading,
        getItemError: action.payload.errorMessage,
      };

    case ADD_ITEM:
      return {
        ...state,
        addItemResults: action.payload.data,
        addItemLoading: action.payload.loading,
        addItemError: action.payload.errorMessage,
      };

    case DELETE_ITEM_LIST:
      return {
        ...state,
        deleteItemResults: action.payload.data,
        deleteItemLoading: action.payload.loading,
        deleteItemError: action.payload.errorMessage,
      };

    case UPDATE_ITEM:
      return {
        ...state,
        updateItemResults: action.payload.data,
        updateItemLoading: action.payload.loading,
        updateItemError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default item;
