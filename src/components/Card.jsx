import React, { useState, useEffect } from "react";
import { HiOutlineTrash, HiOutlinePencil } from "react-icons/hi";
import moment from "moment/moment";
import {
  DeleteModalActivity,
  EditModal,
  DeleteModalItem,
  InformationModal,
} from "./Modal";

import { useAppState } from "../utils/contexts/appState";
import { getItemList, updateItem } from "../utils/actions/itemAction";

function ListActivity({ title, created, onDelete, onNavigate }) {
  const [deleteModal, setDeleteModal] = useState(false);

  if (deleteModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <div
        data-cy="activity-item"
        className="w-36 h-36 md:w-60 md:h-60 px-4 py-3 md:px-7 md:py-6 flex flex-col justify-between bg-white rounded-xl shadow-md mb-4 "
      >
        <span
          onClick={onNavigate}
          className="w-full h-full flex flex-col justify-between cursor-pointer"
        >
          <h2
            data-cy={"activity-item-title" || "activity-title"}
            className="text-sm md:text-lg font-bold cursor-pointer"
          >
            {title}
          </h2>
        </span>
        <div className="w-full flex justify-between items-center text-gray-400 text-sm">
          <p data-cy="activity-item-date" className="text-2xs md:text-base">
            {moment(created).format("DD MMMM YYYY")}
          </p>
          <button
            data-cy="modal-delete"
            type="submit"
            onClick={() => setDeleteModal(!deleteModal)}
            className="cursor-pointer"
          >
            <HiOutlineTrash
              className="w-3 h-3 md:w-5 md:h-5"
              viewBox="0 0 24 24"
            />
          </button>
        </div>
      </div>
      {deleteModal && (
        <div className="w-screen h-screen fixed top-0 left-0">
          <div
            onClick={() => setDeleteModal(!deleteModal)}
            className="overlay"
          ></div>
          <div className="modal-content">
            <DeleteModalActivity
              onModal={() => setDeleteModal(!deleteModal)}
              title={title}
              delTodo={onDelete}
            />
          </div>
        </div>
      )}
    </>
  );
}

function ListTodo({ title, priority, activityId, itemId }) {
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [active, setActive] = useState(true);
  const [state, dispatch] = useAppState();
  const { updateItemResults } = state;

  useEffect(() => {
    if (updateItemResults) {
      getItemList(dispatch, activityId);
    }
  }, [updateItemResults, dispatch]);

  const handleCheckbox = (e) => {
    e.preventDefault();

    updateItem(dispatch, {
      id: itemId,
      is_active: false,
    });
  };

  if (deleteModal || editModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div
        data-cy="frame-card"
        className="w-full h-20 px-7 flex items-center justify-between bg-white rounded-lg shadow-md box-border my-3"
      >
        <div className="w-full flex items-center gap-5">
          <input
            data-cy="status-button"
            type="checkbox"
            // onChange={(e) => handleCheckbox(e, setActive(e.target.checked))}
            // checked={!active}
            className="w-5 h-5"
          />
          <div
            data-cy="priority-field"
            className="w-full flex items-center gap-3"
          >
            <span
              className={`w-2 h-2 rounded-full 
            ${priority === "very-high" && "bg-indicator-very-high"}
            ${priority === "high" && "bg-orange-400"}
            ${priority === "normal" && "bg-indicator-medium"}
            ${priority === "low" && "bg-indicator-low"}
            ${priority === "very-low" && "bg-indicator-very-low"}
            `}
            ></span>
            <p data-cy="title-list" className={`text-lg font-medium `}>
              {title}
            </p>
            <button
              data-cy="edit-button"
              className="cursor-pointer"
              type="submit"
              onClick={() => setEditModal(!editModal)}
            >
              <HiOutlinePencil
                className="w-3 h-3 stroke-gray-400"
                viewBox="0 0 24 24"
              />
            </button>
          </div>
        </div>
        <button
          onClick={() => setDeleteModal(!deleteModal)}
          type="submit"
          data-cy="todo-item-delete-button"
          className="cursor-pointer"
        >
          <HiOutlineTrash
            className="w-5 h-5 md:w-6 md:h-6 stroke-gray-400 hover:scale-125 active:brightness-75"
            viewBox="0 0 24 24"
          />
        </button>
      </div>
      {deleteModal && (
        <div className="w-screen h-screen fixed top-0 left-0">
          <div
            onClick={() => setDeleteModal(!deleteModal)}
            className="overlay"
          ></div>
          <div className="modal-content h-[288px] w-[360px] md:w-[400] ">
            <DeleteModalItem
              onModal={() => setDeleteModal(!deleteModal)}
              id={itemId}
              title={title}
            />
          </div>
        </div>
      )}

      {editModal && (
        <div className="w-screen h-screen fixed top-0 left-0">
          <div
            onClick={() => setEditModal(!editModal)}
            className="overlay"
          ></div>
          <div className="modal-edit h-[403px] w-[340px] md:w-[670px] lg:w-[830px]">
            <EditModal
              onModal={() => setEditModal(!editModal)}
              id={itemId}
              title={title}
              valPriority={priority}
            />
          </div>
        </div>
      )}
    </>
  );
}

export { ListActivity, ListTodo };
