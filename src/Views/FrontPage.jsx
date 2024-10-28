import React, { useState } from "react";
import "./FrontPage.css";
import SidebarController from "../Controllers/SidebarController";
import ContentController from "../Controllers/ContentController";

const FrontPage = () => {
  const [changed, setChanged] = useState(1);
  console.log(changed);
  return (
    <div className="container">
      <SidebarController setChanged={setChanged} />
      <ContentController />
    </div>
  );
};

export default FrontPage;
