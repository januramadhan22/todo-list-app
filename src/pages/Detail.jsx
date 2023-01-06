import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { IoIosArrowBack } from "react-icons/io";
import { HiOutlinePlus, HiOutlinePencil } from "react-icons/hi";
import EmptyTodo from "../assets/todo-empty-state.svg";
import { WithRouter } from "../utils/Navigation";
import { Link } from "react-router-dom";
import { ListTodo } from "../components/Card";
import { CreateModal, EditModal, InformationModal } from "../components/Modal";

import { useAppState } from "../utils/contexts/appState";
import { updateTodo } from "../utils/actions/todoAction";
import { getItemList, addItem, deleteItem } from "../utils/actions/itemAction";

function Detail(props) {
  const { id } = props.params;
  const [createModal, setCreateModal] = useState(false);
  const [activity, setActivity] = useState({});
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);

  const [state, dispatch] = useAppState();
  const {
    updateTodoResults,
    getItemResults,
    getItemLoading,
    getItemError,
    deleteItemResults,
  } = state;

  useEffect(() => {
    getActivity();
    getItemList(dispatch, id);
  }, [dispatch]);

  useEffect(() => {
    if (updateTodoResults) {
      getActivity();
      getItemList(dispatch, id);
      setTitle(title);
    }
  }, [updateTodoResults, dispatch]);

  const handleUpdate = (e) => {
    e.preventDefault();

    updateTodo(dispatch, { id: id, title: title });
  };

  const getActivity = () => {
    axios
      .get(`https://todo.api.devcode.gethired.id/activity-groups/${id}`)
      .then((res) => {
        const results = res.data;
        setActivity(results);
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // const handleUdpate = async (id) => {
  //   const body = {
  //     is_active: active,
  //     priority: priority,
  //     title: title,
  //   };
  //   axios
  //     .patch(`https://todo.api.devcode.gethired.id/todo-items/${id}`, body, {
  //       "content-type": "application/json; charset=utf-8",
  //     })
  //     .then((res) => {
  //       alert("Success Change List Item");
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     })
  //     .finally(() => {
  //       getListTodo();
  //       setLoading(true);
  //     });
  // };

  if (loading) {
    return <div className="w-full flex justify-center">Loading...</div>;
  }

  return (
    <>
      <div
        data-cy="detail-page-activity"
        className="w-full min-h-screen bg-background"
      >
        <Navbar />
        <header className="w-full mt-12 flex items-center justify-between">
          <div className="w-full ml-40 flex items-baseline gap-4 text-black">
            <Link to="/">
              <button data-cy="back-button">
                <IoIosArrowBack className="w-8 h-8 p-0 fill-black stroke-black stroke-2" />
              </button>
            </Link>
            <form
              type="submit"
              className="w-full flex items-baseline"
              onSubmit={(e) => handleUpdate(e)}
            >
              <input
                type="text"
                data-cy="activity-item-title"
                className="w-56 min-h-16 bg-transparent text-black placeholder:text-black py-1 text-4xl font-bold  focus:outline-none focus:border-b focus:border-b-gray-300 focus:w-10/12 ease duration-300 "
                placeholder={activity.title}
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                prefix={
                  <HiOutlinePencil
                    className="w-5 h-5 stroke-gray-400"
                    viewBox="0 0 24 24"
                  />
                }
              />
              <HiOutlinePencil
                className="w-5 h-5 stroke-gray-400"
                viewBox="0 0 24 24"
              />
            </form>
          </div>
          <button
            onClick={() => setCreateModal(!createModal)}
            type="submit"
            data-cy="=todo-add-button"
            className="w-[159px] h-[54px] flex justify-center items-center gap-1 box-border rounded-full bg-primary text-white mr-40 cursor-pointer"
          >
            <HiOutlinePlus className="w-5 h-5" viewBox="0 0 24 24" />
            <p className="text-lg font-semibold">Tambah</p>
          </button>
        </header>
        <div
          data-cy="list-item"
          className={
            getItemResults
              ? "w-full h-full px-40 py-14 flex flex-col justify-center items-start"
              : "w-full h-full my-14 flex justify-center items-start"
          }
        >
          {getItemResults ? (
            getItemResults.map((item) => {
              return (
                <ListTodo
                  activityId={id}
                  key={item.id}
                  itemId={item.id}
                  title={item.title}
                  priority={item.priority}
                  active={item.is_active}
                />
              );
            })
          ) : getItemLoading ? (
            <p>Loading Sek Lurrr . . .</p>
          ) : getItemError ? (
            getItemError
          ) : (
            <label
              data-cy="=todo-add-button"
              htmlFor="my-modal"
              className="cursor-pointer"
            >
              <img src={EmptyTodo} alt="Empty Todo" className="w-[500px]" />
            </label>
          )}
        </div>
      </div>
      {createModal && (
        <div className="w-screen h-screen fixed top-0 left-0">
          <div
            onClick={() => setCreateModal(!createModal)}
            className="overlay"
          ></div>
          <div className="modal-edit">
            <CreateModal
              onModal={() => setCreateModal(!createModal)}
              activityId={id}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default WithRouter(Detail);
