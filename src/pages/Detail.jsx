import React from "react";
import Navbar from "../components/Navbar";
import { IoIosArrowBack } from "react-icons/io";
import { HiOutlinePlus, HiOutlinePencil } from "react-icons/hi";
import EmptyTodo from "../assets/todo-empty-state.svg";

function Detail() {
  return (
    <div className="w-screen min-h-screen bg-background">
      <Navbar />
      <header className="w-full mt-12 flex items-center justify-between">
        <div className="ml-[220px] flex items-baseline gap-4 text-black">
          <button>
            <IoIosArrowBack className="w-8 h-8 p-0 fill-black stroke-black stroke-2" />
          </button>
          <h1 className="text-black text-4xl font-bold">New Activity</h1>
          <button>
            <HiOutlinePencil
              className="w-5 h-5 stroke-gray-400"
              viewBox="0 0 24 24"
            />
          </button>
        </div>
        <button className="w-[159px] h-[54px] flex justify-center items-center gap-1 box-border rounded-full bg-primary text-white mr-[220px]">
          <HiOutlinePlus className="w-5 h-5" viewBox="0 0 24 24" />
          <p className="text-lg font-semibold">Tambah</p>
        </button>
      </header>
      <section className="w-full h-full my-14 flex justify-center items-start ">
        <img src={EmptyTodo} alt="Empty Todo" className="w-[500px]" />
      </section>
    </div>
  );
}

export default Detail;
