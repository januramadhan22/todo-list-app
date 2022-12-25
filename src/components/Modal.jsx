import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { BsFillCircleFill } from "react-icons/bs";
import { FiAlertCircle } from "react-icons/fi";

function CreateModal({ create, title, changeTitle, changePriority, priority }) {
  return (
    <>
      <input
        data-cy="check-button"
        type="checkbox"
        id="my-modal"
        className="modal-toggle"
      />
      <div data-cy="create-modal" className="modal">
        <div className="w-[830px] h-[403px] bg-white rounded-2xl py-6">
          <div className="flex justify-between px-7 pb-6 border-b">
            <h3 className="font-semibold text-lg">Tambah List Item</h3>
            <label
              data-cy="close-button"
              htmlFor="my-modal"
              className="cursor-pointer"
            >
              <IoClose className="w-6 h-6 fill-gray-400" />
            </label>
          </div>
          <form data-cy="name-list-form" className="w-full space-y-3 px-7 my-5">
            <label className="text-sm font-semibold">Nama List Item</label>
            <input
              data-cy="modal-add-name-input"
              onChange={changeTitle}
              type="text"
              placeholder="Tambahkan nama list item"
              className="w-full px-4 py-3 border rounded-lg"
            />
          </form>
          <form
            data-cy="modal-add-priority-dropdown"
            className="w-full flex flex-col space-y-3 px-7 my-5"
          >
            <label className="text-sm font-semibold">Priority</label>
            <select
              data-cy="priority-list"
              onChange={changePriority}
              value={priority}
              className="w-52 px-4 py-3 flex items-center justify-between border rounded-lg cursor-pointer"
            >
              <option value="very-high">Very High</option>
              <option value="high">High</option>
              <option value="normal">Medium</option>
              <option value="low">Low</option>
              <option value="very-low">Very Low</option>
            </select>
          </form>
          <div className="flex justify-end px-7 pt-4 border-t">
            <button
              data-cy="modal-add-save-button"
              type="submit"
              onClick={create}
              className={`w-36 h-14 px-4 py-3 bg-primary rounded-full text-lg font-semibold text-white ${
                title == "" && priority == "" ? "disabled bg-black" : "active"
              }`}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function EditModal({ update, changeTitle, changePriority, priority }) {
  return (
    <>
      <input
        data-cy="check-button"
        type="checkbox"
        id="my-modal-3"
        className="modal-toggle"
      />
      <div data-cy="edit-modal" className="modal">
        <div className="w-[830px] h-[403px] bg-white rounded-2xl py-6">
          <div className="flex justify-between px-7 pb-6 border-b">
            <h3 className="font-semibold text-lg">Edit Item</h3>
            <label
              data-cy="close-button"
              htmlFor="my-modal-3"
              className="cursor-pointer"
            >
              <IoClose className="w-6 h-6 fill-gray-400" />
            </label>
          </div>
          <form data-cy="name-list-form" className="w-full space-y-3 px-7 my-5">
            <label className="text-sm font-semibold">Nama List Item</label>
            <input
              data-cy="name-list"
              onChange={changeTitle}
              type="text"
              placeholder="Tambahkan nama list item"
              className="w-full px-4 py-3 border rounded-lg"
            />
          </form>
          <form
            data-cy="priority-list-form"
            className="w-full flex flex-col space-y-3 px-7 my-5"
          >
            <label className="text-sm font-semibold">Priority</label>
            <select
              data-cy="priority-list"
              onChange={changePriority}
              value={priority}
              className="w-52 px-4 py-3 flex items-center justify-between border rounded-lg cursor-pointer"
            >
              <option value="very-high">Very High</option>
              <option value="high">High</option>
              <option value="normal">Medium</option>
              <option value="low">Low</option>
              <option value="very-low">Very Low</option>
            </select>
          </form>
          <div className="flex justify-end px-7 pt-4 border-t">
            <button
              data-cy="submit-button"
              type="submit"
              onClick={update}
              className="w-36 h-14 px-4 py-3 bg-primary rounded-full text-lg font-semibold text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function InformationModal() {
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal ">
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

export { CreateModal, EditModal, InformationModal };
