import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import moment from "moment/moment";

function Card({ title, created, onDelete }) {
  return (
    <div className="w-36 h-36 md:w-60 md:h-60 px-4 py-3 md:px-7 md:py-6 flex flex-col justify-between bg-white rounded-xl shadow-md mb-4">
      <h2 className="text-sm md:text-lg font-bold">{title}</h2>
      <div className="w-full flex justify-between items-center text-gray-400 text-sm">
        <p className="text-2xs md:text-base">
          {moment(created).format("DD MMMM YYYY")}
        </p>
        <button onClick={onDelete}>
          <HiOutlineTrash
            className="w-3 h-3 md:w-5 md:h-5"
            viewBox="0 0 24 24"
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
