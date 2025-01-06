import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <header className="header">Education Portal</header>
      <div className="content">
        <aside className="sidebar">
          <nav>
            <ul>
              <li><Link to="/">Welcome</Link></li>
              <li><Link to="/departments">Departments & Employees</Link></li>
              <li><Link to="/courses">Courses & Students</Link></li>
            </ul>
          </nav>
        </aside>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
