import "../styles/index.css";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import { ListActivity } from "../components/Card";
import { WithRouter } from "../utils/Navigation";

import { HiOutlinePlus } from "react-icons/hi";
import EmptyAct from "../assets/activity-empty-state.svg";
import Swal from "sweetalert2";
import Loading from "../components/Loading";
import { InformationModal } from "../components/Modal";

function Home() {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [skeleton] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(
        `https://todo.api.devcode.gethired.id/activity-groups?email=abbyjunior600@gmail.com`
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

  const handleCreateActivity = async () => {
    setLoading(true);
    const body = { title: "New Activity", email: `abbyjunior600@gmail.com` };
    axios
      .post(`https://todo.api.devcode.gethired.id/activity-groups`, body)
      .then((res) => {
        alert("Success Create User");
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        fetchData();
        setLoading(false);
      });
  };

  const handleDelete = async (id) => {
    axios
      .delete(`https://todo.api.devcode.gethired.id/activity-groups/${id}`)
      .then((res) => res)
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        fetchData();
        setLoading(false);
        setInfoModal(false);
      });
  };

  if (loading) {
    return (
      <>
        {skeleton.map((item) => (
          <div
            data-cy="loading"
            className="flex items-center justify-center place-items-center"
          >
            <Loading key={item} />
          </div>
        ))}
      </>
    );
  }

  if (infoModal) {
    return (
      <>
        <InformationModal />
      </>
    );
  }

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
          onClick={() => handleCreateActivity()}
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
          datas.length !== 0
            ? "grid grid-cols-2 lg:grid-cols-4 items-center justify-center place-items-center mx-5 md:mx-20 lg:mx-40 my-9 md:my-12 gap-5"
            : "w-full flex justify-center my-12"
        }
      >
        <>
          {datas.length !== 0 ? (
            datas.map((data) => (
              <ListActivity
                key={data.id}
                id={data.id}
                title={data.title}
                created={data.created_at}
                onDelete={() => handleDelete(data?.id)}
                onNavigate={() => navigate(`/activity-groups/${data.id}`)}
              />
            ))
          ) : (
            <button
              data-cy="create-button"
              type="submit"
              onClick={() => handleCreateActivity()}
            >
              <img src={EmptyAct} alt="Empty Activity" className="w-[500px]" />
            </button>
          )}
        </>
      </div>
    </div>
  );
}

export default WithRouter(Home);
