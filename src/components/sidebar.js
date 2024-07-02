// Sidebar.js

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { logout } from "../store/slice/ticketSlice";
import "../resources/sidebar.css";

const Sidebar = () => {
  const [activePage, setActivePage] = useState("/dashboard");
  const [sideBar , setSideBar] = useState(true)
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const location = useLocation();
  let path = location.pathname;

  useEffect(() => {
    if (path.startsWith("/dashboard")) {
      setActivePage("/dashboard");
    } else if (path.startsWith("/tickets")) {
      setActivePage("/tickets");
    }
  }, [location.pathname]);

  const showPage = (value) => {
    setActivePage(value);
    navigate(value);
  };

  return sideBar ? (
    <>
        <div className="w-100 p-3">
          <div
            className={`sidebar-item ${activePage === "/dashboard" ? "active" : ""}`}
            onClick={() => showPage("/dashboard")}
          >
            Dashboard
          </div>
          <div
            className={`sidebar-item ${activePage === "/bills" ? "active" : ""}`}
            onClick={() => showPage("/bills")}
          >
            Bills
          </div>
          <div
            className={`sidebar-item ${activePage === "/customers" ? "active" : ""}`}
            onClick={() => showPage("/customers")}
          >
            Customers
          </div>
        </div>
    </>
  ) : null;
};

export default Sidebar;