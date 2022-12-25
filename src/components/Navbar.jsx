import React from "react";

function Navbar() {
  return (
    <div
      data-cy="navbar"
      className="w-screen h-16 md:h-[105px] flex items-center bg-primary shadow-md"
    >
      <h1
        data-cy="title-app"
        className="text-white text-lg md:text-2xl font-semibold ml-4 md:ml-20 lg:ml-40"
      >
        TO DO LIST APP
      </h1>
    </div>
  );
}

export default Navbar;
