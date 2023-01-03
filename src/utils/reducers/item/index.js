import { GET_ITEM_LIST } from "../../actions/itemAction";

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

    default:
      return state;
  }
};

export default item;
