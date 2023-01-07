import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { FiAlertCircle } from "react-icons/fi";
import { FiAlertTriangle } from "react-icons/fi";

import { useAppState } from "../utils/contexts/appState";
import {
  getItemList,
  addItem,
  deleteItem,
  updateItem,
} from "../utils/actions/itemAction";

function CreateModal({ onModal, activityId }) {
  const [itemTitle, setItemTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [state, dispatch] = useAppState();
  const { addItemResults } = state;

  useEffect(() => {
    if (addItemResults) {
      getItemList(dispatch, activityId);
    }
  }, [addItemResults, dispatch]);

  const handleCreate = (e) => {
    e.preventDefault();

    addItem(dispatch, {
      activity_group_id: activityId,
      title: itemTitle,
      priority: priority || "very-high",
    });
  };
  return (
    <>
      <div data-cy="edit-modal">
        <div className="flex justify-between px-7 pb-6 border-b">
          <h3 className="font-semibold text-lg">Edit Item</h3>
          <button
            data-cy="close-button"
            type="submit"
            onClick={onModal}
            className="cursor-pointer"
          >
            <IoClose className="w-6 h-6 fill-gray-400" />
          </button>
        </div>
        <form
          type="submit"
          data-cy="name-list-form"
          className="w-full space-y-3 px-7 my-5"
        >
          <label className="text-sm font-semibold">Nama List Item</label>
          <input
            data-cy="name-list"
            onChange={(e) => setItemTitle(e.target.value)}
            value={itemTitle}
            type="text"
            placeholder="Tambahkan nama list item"
            className="w-full px-4 py-3 border rounded-lg"
          />
        </form>
        <form
          type="submit"
          data-cy="priority-list-form"
          className="w-full flex flex-col space-y-3 px-7 my-5"
        >
          <label className="text-sm font-semibold">Priority</label>
          <select
            data-cy="priority-list"
            onChange={(e) => setPriority(e.target.value)}
            value={priority}
            className="w-full md:w-52 px-4 py-3 flex items-center justify-between border rounded-lg cursor-pointer"
          >
            <option value="very-high">Very High</option>
            <option value="high">High</option>
            <option value="normal">Medium</option>
            <option value="low">Low</option>
            <option value="very-low">Very Low</option>
          </select>
        </form>
        <div className="flex justify-center md:justify-end px-7 pt-4 border-t">
          <button
            onClick={(e) => handleCreate(e)}
            data-cy="submit-button"
            type="submit"
            className="px-8 py-3 bg-primary rounded-lg text-lg font-semibold border-2 border-primary text-white hover:bg-white hover:text-primary active:scale-90"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

function EditModal({ onModal, title, id, activityId, valPriority }) {
  const [itemTitle, setItemTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [state, dispatch] = useAppState();
  const { updateItemResults } = state;

  useEffect(() => {
    if (updateItemResults) {
      getItemList(dispatch, activityId);
      setItemTitle(itemTitle);
      setPriority(priority);
    }
  }, [updateItemResults, dispatch]);

  const handleUpdate = (e) => {
    e.preventDefault();

    updateItem(dispatch, {
      id: id,
      title: itemTitle || title,
      priority: priority || valPriority,
    });
  };

  return (
    <>
      <div data-cy="edit-modal">
        <div className="flex justify-between px-7 pb-6 border-b">
          <h3 className="font-semibold text-lg">Edit Item</h3>
          <button
            data-cy="close-button"
            type="submit"
            onClick={onModal}
            className="cursor-pointer"
          >
            <IoClose className="w-6 h-6 fill-gray-400" />
          </button>
        </div>
        <form
          type="submit"
          data-cy="name-list-form"
          className="w-full space-y-3 px-7 my-5"
        >
          <label className="text-sm font-semibold">Nama List Item</label>
          <input
            data-cy="name-list"
            onChange={(e) => setItemTitle(e.target.value)}
            value={itemTitle}
            type="text"
            placeholder={title ? title : "Ganti nama item"}
            className="w-full px-4 py-3 border rounded-lg"
          />
        </form>
        <form
          type="submit"
          data-cy="priority-list-form"
          className="w-full flex flex-col space-y-3 px-7 my-5"
        >
          <label className="text-sm font-semibold">Priority</label>
          <select
            data-cy="priority-list"
            onChange={(e) => setPriority(e.target.value)}
            value={priority}
            className="w-full md:w-52 px-4 py-3 flex items-center justify-between border rounded-lg cursor-pointer"
          >
            <option value="very-high">Very High</option>
            <option value="high">High</option>
            <option value="normal">Medium</option>
            <option value="low">Low</option>
            <option value="very-low">Very Low</option>
          </select>
        </form>
        <div className="flex justify-center md:justify-end px-7 pt-4 border-t">
          <button
            data-cy="submit-button"
            type="submit"
            onClick={(e) => handleUpdate(e)}
            className="px-8 py-3 bg-primary rounded-lg text-lg font-semibold border-2 border-primary text-white hover:bg-white hover:text-primary active:scale-90"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

function DeleteModalActivity({ onModal, title, delTodo }) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-7">
      <FiAlertTriangle className="w-16 h-16 stroke-indicator-very-high" />
      <h3 className="text-lg text-center font-medium">
        Apakah anda ingin menghapus activity <br />
        <strong>"{title}"</strong>
      </h3>
      <div className="w-full flex justify-center gap-5">
        <button
          data-cy="modal-delete-cancel-button"
          onClick={onModal}
          className="px-8 py-2 bg-background text-gray-600 font-bold rounded-full hover:brightness-95 cursor-pointer"
        >
          Batal
        </button>
        <button
          data-cy="modal-delete-confirm-button"
          type="submit"
          onClick={delTodo}
          className="px-8 py-2 bg-indicator-very-high text-white font-bold rounded-full hover:brightness-95 cursor-pointer"
        >
          Hapus
        </button>
      </div>
    </div>
  );
}

function DeleteModalItem({ onModal, title, id }) {
  const [state, dispatch] = useAppState();
  const { deleteItemResults } = state;

  useEffect(() => {
    if (deleteItemResults) {
      getItemList(dispatch);
    }
  }, [dispatch, deleteItemResults]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-7">
      <FiAlertTriangle className="w-16 h-16 stroke-indicator-very-high" />
      <h3 className="text-lg text-center font-medium">
        Apakah anda ingin menghapus item <br />
        <strong>"{title}"</strong>
      </h3>
      <div className="w-full flex justify-center gap-5">
        <button
          data-cy="modal-delete-cancel-button"
          onClick={onModal}
          className="px-8 py-2 bg-background text-gray-600 font-bold rounded-full hover:brightness-95 cursor-pointer"
        >
          Batal
        </button>
        <button
          data-cy="modal-delete-confirm-button"
          type="submit"
          onClick={() => deleteItem(dispatch, id)}
          className="px-8 py-2 bg-indicator-very-high text-white font-bold rounded-full hover:brightness-95 cursor-pointer"
        >
          Hapus
        </button>
      </div>
    </div>
  );
}

function InformationModal() {
  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <label data-cy="modal-information" htmlFor="my-modal-5" className="modal">
        <label
          className="modal-box relative flex items-center gap-5"
          htmlFor=""
        >
          <FiAlertCircle className="w-6 h-6 stroke-indicator-medium" />
          <h3 className="text-lg text-center font-bold">
            Activity berhasil dihapus
          </h3>
        </label>
      </label>
    </>
  );
}

export {
  CreateModal,
  EditModal,
  InformationModal,
  DeleteModalActivity,
  DeleteModalItem,
};
