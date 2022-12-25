import React, { useState } from "react";
import { HiOutlineTrash, HiOutlinePencil } from "react-icons/hi";
import moment from "moment/moment";

function ListActivity({ title, created, onDelete, onNavigate }) {
  return (
    <div
      data-cy="frame-card"
      className="w-36 h-36 md:w-60 md:h-60 px-4 py-3 md:px-7 md:py-6 flex flex-col justify-between bg-white rounded-xl shadow-md mb-4 "
    >
      <h2
        data-cy="title-button"
        onClick={onNavigate}
        className="text-sm md:text-lg font-bold cursor-pointer"
      >
        {title}
      </h2>
      <div className="w-full flex justify-between items-center text-gray-400 text-sm">
        <p data-cy="date" className="text-2xs md:text-base">
          {moment(created).format("DD MMMM YYYY")}
        </p>
        <button data-cy="delete-button" onClick={onDelete}>
          <HiOutlineTrash
            className="w-3 h-3 md:w-5 md:h-5"
            viewBox="0 0 24 24"
          />
        </button>
      </div>
    </div>
  );
}

function ListTodo({ title, priority, active, onDelete, changeStatus }) {
  return (
    <div
      data-cy="frame-card"
      className="w-full h-20 px-7 flex items-center justify-between bg-white rounded-lg shadow-md box-border my-3"
    >
      <div className="w-full flex items-center gap-5">
        <input
          data-cy="status-button"
          type="checkbox"
          /*onChange={changeStatus}*/
          className="w-5 h-5"
        />
        <div
          data-cy="priority-field"
          className="w-full flex items-center gap-3"
        >
          <span
            className={`w-2 h-2 rounded-full 
            ${priority === "very-high" ? "bg-indicator-very-high" : "bg-black"}
            ${priority === "high" ? "bg-indicator-high" : "bg-black"}
            ${priority === "normal" ? "bg-indicator-medium" : "bg-black"}
            ${priority === "low" ? "bg-indicator-low" : "bg-black"}
            ${priority === "very-low" ? "bg-indicator-very-low" : "bg-black"}
            `}
          ></span>
          <p
            data-cy="title-list"
            className={`text-lg font-medium ${
              active === 0 ? "line-through" : ""
            }`}
          >
            {title}
          </p>
          <label
            data-cy="edit-button"
            htmlFor="my-modal-3"
            className="cursor-pointer"
          >
            <HiOutlinePencil
              className="w-3 h-3 stroke-gray-400"
              viewBox="0 0 24 24"
            />
          </label>
        </div>
      </div>
      <button data-cy="delete-button" onClick={onDelete}>
        <HiOutlineTrash
          className="w-3 h-3 md:w-6 md:h-6 stroke-gray-400"
          viewBox="0 0 24 24"
        />
      </button>
    </div>
  );
}

export { ListActivity, ListTodo };
