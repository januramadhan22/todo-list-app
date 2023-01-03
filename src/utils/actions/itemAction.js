import axios from "axios";

export const GET_ITEM_LIST = "GET_ITEM_LIST";

export const getItemList = (dispatch, id) => {
  //loading
  dispatch({
    type: GET_ITEM_LIST,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  axios({
    method: "GET",
    url: `https://todo.api.devcode.gethired.id/todo-items?activity_group_id=${id}`,
    timeout: 120000,
  })
    .then((response) => {
      dispatch({
        type: GET_ITEM_LIST,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_ITEM_LIST,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};
