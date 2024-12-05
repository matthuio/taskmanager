import React, { useEffect, useState } from "react";
import "./FrontPage.css";
import SidebarController from "../Controllers/SidebarController";
import ContentController from "../Controllers/ContentController";
import { useNavigate } from "react-router-dom";

const FrontPage = () => {
  const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
    const [key, value] = cookie.split("=");
    acc[key] = value;
    return acc;
  }, {});

  const redirect = useNavigate();

  useEffect(() => {
    if (!cookies.token) {
      redirect("/login");
    }
  }, [cookies.token, redirect]);
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
