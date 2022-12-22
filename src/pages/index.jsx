import Navbar from "../components/Navbar";
import "../styles/index.css";
import { HiOutlinePlus } from "react-icons/hi";
import EmptyAct from "../assets/activity-empty-state.svg";
import Card from "../components/Card";

function App() {
  return (
    <div className="w-screen min-h-screen bg-background">
      <Navbar />
      <header className="w-full mt-12 flex items-center justify-between">
        <h1 className="text-black text-4xl font-bold ml-[220px]">Activity</h1>
        <button className="w-[159px] h-[54px] flex justify-center items-center gap-1 box-border rounded-full bg-primary text-white mr-[220px]">
          <HiOutlinePlus className="w-5 h-5" viewBox="0 0 24 24" />
          <p className="text-lg font-semibold">Tambah</p>
        </button>
      </header>
      <section className="w-full h-full my-14 flex justify-center items-start ">
        <img src={EmptyAct} alt="Empty Activity" className="w-[700px]" />
      </section>
      <section>
        <Card />
      </section>
    </div>
  );
}

export default App;
