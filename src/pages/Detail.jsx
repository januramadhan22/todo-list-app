import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { IoIosArrowBack } from "react-icons/io";
import { HiOutlinePlus, HiOutlinePencil } from "react-icons/hi";
import EmptyTodo from "../assets/todo-empty-state.svg";
import { WithRouter } from "../utils/Navigation";
import { Link } from "react-router-dom";
import { ListTodo } from "../components/Card";
import { CreateModal, EditModal } from "../components/Modal";
import Swal from "sweetalert2";

function Detail(props) {
  const { id } = props.params;
  const [createModal, setCreateModal] = useState(false);
  const [datas, setDatas] = useState([]);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [active, setActive] = useState(true);
  const [loading, setLoading] = useState(true);
  const [skeleton] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  useEffect(() => {
    getListTodo();
  }, []);

  const getListTodo = () => {
    axios
      .get(
        `https://todo.api.devcode.gethired.id/todo-items?activity_group_id=${id}`
      )
      .then((res) => {
        const results = res.data.data;
        setDatas(results);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCreateTodo = async () => {
    const body = {
      activity_group_id: id,
      priority: priority,
      title: title,
    };
    axios
      .post(`https://todo.api.devcode.gethired.id/todo-items`, body, {
        "content-type": "application/json; charset=utf-8",
      })
      .then((res) => {
        alert("Success Create Todo");
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        getListTodo();
        setLoading(true);
      });
  };

  const handleUdpate = async () => {
    // const idList = datas.map((data) => data);
    const { id } = datas[2];
    console.log(id);
    // const body = {
    //   is_active: active,
    //   priority: priority,
    //   title: title,
    // };
    // axios
    //   .patch(`https://todo.api.devcode.gethired.id/todo-items/${id}`, body, {
    //     "content-type": "application/json; charset=utf-8",
    //   })
    //   .then((res) => {
    //     alert("Success Change List Item");
    //   })
    //   .catch((err) => {
    //     alert(err);
    //   })
    //   .finally(() => {
    //     getListTodo();
    //     setLoading(true);
    //   });
  };

  const handleDelete = async (id) => {
    axios
      .delete(`https://todo.api.devcode.gethired.id/todo-items/${id}`)
      .then((res) => res)
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        getListTodo();
        setLoading(false);
      });
  };

  if (loading) {
    return <div className="w-full flex justify-center">Loading...</div>;
  }

  return (
    <div
      force={true}
      data-cy="detail-page-activity"
      className="w-screen min-h-screen bg-background"
    >
      <Navbar />
      <header className="w-full mt-12 flex items-center justify-between">
        <div className="ml-40 flex items-baseline gap-4 text-black">
          <Link to="/">
            <button data-cy="back-button">
              <IoIosArrowBack className="w-8 h-8 p-0 fill-black stroke-black stroke-2" />
            </button>
          </Link>
          <h1 className="text-black text-4xl font-bold">New Activity</h1>
          <button data-cy="edit-button">
            <HiOutlinePencil
              className="w-5 h-5 stroke-gray-400"
              viewBox="0 0 24 24"
            />
          </button>
        </div>
        <label
          data-cy="=todo-add-button"
          htmlFor="my-modal"
          className="w-[159px] h-[54px] flex justify-center items-center gap-1 box-border rounded-full bg-primary text-white mr-40 cursor-pointer"
        >
          <HiOutlinePlus className="w-5 h-5" viewBox="0 0 24 24" />
          <p className="text-lg font-semibold">Tambah</p>
        </label>
      </header>
      <div
        data-cy="list-item"
        className={
          datas.length !== 0
            ? "w-full h-full px-40 my-14 flex flex-col justify-center items-start "
            : "w-full h-full my-14 flex justify-center items-start"
        }
      >
        {datas.length !== 0 ? (
          datas.map((list) => (
            <ListTodo
              key={list.id}
              title={list.title}
              priority={list.priority}
              active={list.is_active}
              // changeStatus={(e) => {
              //   setActive(e.target.list.is_active.value);
              //   e.target.list.is_active.value = 0;
              // }}
              onDelete={() => handleDelete(list.id)}
            />
          ))
        ) : (
          <img src={EmptyTodo} alt="Empty Todo" className="w-[500px]" />
        )}
      </div>
      <CreateModal
        create={() => handleCreateTodo()}
        title={title}
        changeTitle={(e) => setTitle(e.target.value)}
        changePriority={(e) => setPriority(e.target.value)}
        priority={priority}
      />
      <EditModal
        update={(id) => handleUdpate(id)}
        changeTitle={(e) => setTitle(e.target.value)}
        changePriority={(e) => setPriority(e.target.value)}
        priority={priority}
        changeStatus={(e) => setActive(e.target.value)}
        status={active}
      />
    </div>
  );
}

export default WithRouter(Detail);
