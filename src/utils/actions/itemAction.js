import axios from "axios";

export const GET_ITEM_LIST = "GET_ITEM_LIST";
export const DELETE_ITEM_LIST = "DELETE_ITEM_LIST";
export const ADD_ITEM = "ADD_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";

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
          data: response.data.data,
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

export const addItem = (dispatch, data) => {
  //loading
  dispatch({
    type: ADD_ITEM,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  axios({
    method: "POST",
    url: "https://todo.api.devcode.gethired.id/todo-items",
    data: data,
  })
    .then((response) => {
      dispatch({
        type: ADD_ITEM,
        payload: {
          loading: false,
          data: response.data.data,
          errorMessage: false,
        },
      });
      alert("Berhasil menambah item");
    })
    .catch((error) => {
      dispatch({
        type: ADD_ITEM,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    })
    .finally(() => {
      dispatch({
        type: ADD_ITEM,
        payload: {
          loading: false,
          data: data,
          errorMessage: false,
        },
      });
    });
};

export const deleteItem = (dispatch, id, data) => {
  //loading
  dispatch({
    type: DELETE_ITEM_LIST,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  axios({
    method: "DELETE",
    url: `https://todo.api.devcode.gethired.id/todo-items/${id}`,
    data: data,
  })
    .then((response) => {
      dispatch({
        type: DELETE_ITEM_LIST,
        payload: {
          loading: false,
          data: response.data.data,
          errorMessage: false,
        },
      });
      alert("Berhasil menghapus");
    })
    .catch((error) => {
      dispatch({
        type: DELETE_ITEM_LIST,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    })
    .finally(() => {
      dispatch({
        type: ADD_ITEM,
        payload: {
          loading: false,
          data: data,
          errorMessage: false,
        },
      });
    });
};

export const updateItem = (dispatch, data) => {
  //loading
  dispatch({
    type: UPDATE_ITEM,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  axios({
    method: "PATCH",
    url: `https://todo.api.devcode.gethired.id/todo-items/${data.id}`,
    data: data,
  })
    .then((response) => {
      dispatch({
        type: UPDATE_ITEM,
        payload: {
          loading: false,
          data: response.data.data,
          errorMessage: false,
        },
      });
      alert("Berhasil mengupdate item");
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_ITEM,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
  // .finally(() => {
  //   dispatch({
  //     type: UPDATE_ITEM,
  //     payload: {
  //       loading: false,
  //       data: data,
  //       errorMessage: false,
  //     },
  //   });
  // });
};
