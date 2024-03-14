import React from "react";
import { useAppContext } from "./context";
import { FaBars } from "react-icons/fa";
function Home() {
  const { openSidebar, openModal } = useAppContext();
  return (
    <main>
      <button onClick={openSidebar} className="sidebar-open">
        <FaBars />
      </button>
      <button onClick={openModal} className="btn">
        Open Modal
      </button>
    </main>
  );
}

export default Home;
