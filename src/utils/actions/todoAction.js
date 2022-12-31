import axios from "axios";

export const GET_TODO_LIST = "GET_TODO_LIST";
export const ADD_TODO = "ADD_TODO";

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
    timeout: 120000,
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
    timeout: 120000,
    data: data,
  })
    .then((response) => {
      dispatch({
        type: ADD_TODO,
        payload: {
          loading: true,
          data: response.data.data,
          errorMessage: false,
        },
      });
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
