import React, { useState } from "react";
import "./FrontPage.css";
import SidebarController from "../Controllers/SidebarController";
import ContentController from "../Controllers/ContentController";

const FrontPage = () => {
  const [isChanged, setChanged] = useState(1);
  console.log(isChanged);
  return (
    <div className="container">
      <SidebarController setChanged={setChanged} />
      <ContentController isChanged={isChanged} setChanged={setChanged} />
    </div>
  );
};

export default FrontPage;
