import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { links, social } from "./data";
import { useAppContext } from "./context";

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useAppContext();
  return (
    <div
      className={
        isSidebarOpen
          ? "sidebar-container show-sidebar-container"
          : "sidebar-container"
      }
    >
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>

      <ul className="links">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>
                {link.icon}
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="social">
        {social.map((ele) => {
          return (
            <li key={ele.id}>
              <a href={ele.url}>{ele.icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
