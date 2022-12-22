import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

function Card() {
  return (
    <div className="w-60 h-60 px-7 py-6 flex flex-col justify-between bg-white rounded-xl shadow-md mb-4">
      <h2 className="text-lg font-bold">Title</h2>
      <div className="w-full flex justify-between items-center text-gray-400 text-sm">
        <p>Tanggal</p>
        <button>
          <HiOutlineTrash className="w-5 h-5" viewBox="0 0 24 24" />
        </button>
      </div>
    </div>
  );
}

export default Card;
