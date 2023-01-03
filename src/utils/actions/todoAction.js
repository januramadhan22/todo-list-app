import axios from "axios";

export const GET_TODO_LIST = "GET_TODO_LIST";
export const DELETE_TODO_LIST = "DELETE_TODO_LIST";
export const ADD_TODO = "ADD_TODO";
export const GET_DETAIL_TODO = "DETAIL_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const getTodoList = (dispatch) => {
  //loading
  dispatch({
    type: GET_TODO_LIST,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  axios({
    method: "GET",
    url: "https://todo.api.devcode.gethired.id/activity-groups?email=abbyjunior600@gmail.com",
  })
    .then((response) => {
      dispatch({
        type: GET_TODO_LIST,
        payload: {
          loading: false,
          data: response.data.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_TODO_LIST,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};

export const addTodo = (dispatch, data) => {
  //loading
  dispatch({
    type: ADD_TODO,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  axios({
    method: "POST",
    url: "https://todo.api.devcode.gethired.id/activity-groups",
    data: data,
  })
    .then((response) => {
      dispatch({
        type: ADD_TODO,
        payload: {
          loading: false,
          data: response.data.data,
          errorMessage: false,
        },
      });
      alert("Berhasil membuath todo");
    })
    .catch((error) => {
      dispatch({
        type: ADD_TODO,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};

export const deleteTodo = (dispatch, id) => {
  //loading
  dispatch({
    type: DELETE_TODO_LIST,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  axios({
    method: "DELETE",
    url: `https://todo.api.devcode.gethired.id/activity-groups/${id}`,
  })
    .then((response) => {
      dispatch({
        type: DELETE_TODO_LIST,
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
        type: DELETE_TODO_LIST,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};

export const getDetailTodo = (dispatch, id) => {
  dispatch({
    type: GET_DETAIL_TODO,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  axios({
    method: "GET",
    url: `https://todo.api.devcode.gethired.id/activity-groups/${id}`,
  })
    .then((response) => {
      dispatch({
        type: GET_DETAIL_TODO,
        payload: {
          loading: false,
          data: response.data.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_DETAIL_TODO,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};

export const updateTodo = (dispatch, data) => {
  //loading
  dispatch({
    type: UPDATE_TODO,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  axios({
    method: "PATCH",
    url: `https://todo.api.devcode.gethired.id/activity-groups/${data.id}`,
    data: data,
  })
    .then((response) => {
      dispatch({
        type: UPDATE_TODO,
        payload: {
          loading: false,
          data: response.data.data,
          errorMessage: false,
        },
      });
      alert("Berhasil mengganti title");
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_TODO,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};
