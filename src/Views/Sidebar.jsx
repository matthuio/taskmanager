import React from "react";
import DisplayTaskForm from "../Controllers/TaskFormController";

const Sidebar = ({ setChanged }) => {
  return (
    <div className="sidebar">
      <div className="sidebar_user">
        <img src="logo.png" alt="Logo" />
        <p>Name</p>
      </div>
      <div className="sidebar_menu">
        <ul>
          <DisplayTaskForm setChanged={setChanged} />
        </ul>
        <ul>Search</ul>
        <ul>Today</ul>
        <ul>Upcoming</ul>
      </div>
      <div className="sidebar_projects">
        <h2> My Projects</h2>
        <ul>List Item</ul>
        <ul>List Item</ul>
        <ul>List Item</ul>
        <ul>List Item</ul>
      </div>
    </div>
  );
};

export default Sidebar;
