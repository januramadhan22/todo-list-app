import "../styles/index.css";
import { useAppState } from "../utils/contexts/appState";
import { addTodo, deleteTodo, getTodoList } from "../utils/actions/todoAction";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import { ListActivity } from "../components/Card";
import { WithRouter } from "../utils/Navigation";

import { HiOutlinePlus } from "react-icons/hi";
import EmptyAct from "../assets/activity-empty-state.svg";
import { InformationModal } from "../components/Modal";

function Home() {
  const [state, dispatch] = useAppState();
  const {
    getTodoResults,
    getTodoLoading,
    getTodoError,
    addTodoResults,
    deleteTodoResults,
  } = state;
  const navigate = useNavigate();
  const [infoModal, setInfoModal] = useState(false);

  useEffect(() => {
    getTodoList(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (addTodoResults) {
      getTodoList(dispatch);
    }
  }, [addTodoResults, dispatch]);

  useEffect(() => {
    if (deleteTodoResults) {
      getTodoList(dispatch);
    }
  }, [dispatch, deleteTodoResults]);

  const handleCreate = (e) => {
    e.preventDefault();

    addTodo(dispatch, {
      title: "New Activity",
      email: "abbyjunior600@gmail.com",
    });
  };

  // if (infoModal) {
  //   return (
  //     <>
  //       <InformationModal />
  //     </>
  //   );
  // }

  return (
    <div data-cy="home-page" className="w-screen min-h-screen bg-background">
      <Navbar />
      <header className="w-full mt-8 md:mt-12 flex items-center justify-between">
        <h1
          data-cy="header-title"
          className="text-black text-base md:text-4xl font-bold ml-5 md:ml-20 lg:ml-40"
        >
          Activity
        </h1>
        <button
          data-cy="activity-add-button"
          type="submit"
          onClick={(e) => handleCreate(e)}
          className="w-[100px] h-[37px] md:w-[159px] md:h-[54px] flex justify-center items-center gap-1 box-border rounded-full bg-primary text-white mr-5 md:mr-20 lg:mr-40"
        >
          <HiOutlinePlus
            className="w-3 h-3 md:w-5 md:h-5"
            viewBox="0 0 24 24"
          />
          <p className="text-xs md:text-lg font-semibold">Tambah</p>
        </button>
      </header>
      <div
        data-cy="list-activity"
        className={
          getTodoResults
            ? "grid grid-cols-2 lg:grid-cols-4 items-center justify-center place-items-center mx-5 md:mx-20 lg:mx-40 mt-9 md:mt-12 gap-5"
            : "w-full flex justify-center mt-12"
        }
      >
        {getTodoResults ? (
          getTodoResults.map((todo) => {
            return (
              <ListActivity
                key={todo.id}
                id={todo.id}
                title={todo.title}
                created={todo.created_at}
                onDelete={() => deleteTodo(dispatch, todo.id)}
                onNavigate={() => navigate(`/activity-groups/${todo.id}`)}
              />
            );
          })
        ) : getTodoLoading ? (
          <p>Loading...</p>
        ) : getTodoError ? (
          getTodoError
        ) : (
          <button
            todo-cy="create-button"
            type="submit"
            onClick={(e) => handleCreate(e)}
          >
            <img src={EmptyAct} alt="Empty Activity" className="w-[500px]" />
          </button>
        )}
      </div>
    </div>
  );
}

export default WithRouter(Home);
