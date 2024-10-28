import React, { useEffect, useState } from "react";
import { fetchTasks, updateStatus } from "../Models/TaskModel";
import TaskCard from "../Views/TaskCard";
import SidebarTask from "../Views/SidebarTask";

const SidebarTaskController = () => {
  const [isloading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [task, setTask] = useState([]);
  const [changed, setChanged] = useState(123);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        setLoading(true);
        let data;
        data = await fetchTasks();
        setTask(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    const timeoutId = setTimeout(() => {
      loadTasks();
    }, 500); // adjust the delay time as needed

    return () => {
      clearTimeout(timeoutId);
    };
  }, [changed]);
  if (isloading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error... {error}</p>;
  }
  return <SidebarTask tasks={task} setChanged={setChanged} />;
};

export const handleUpdate = (desc) => {
  console.log("controller", desc);
  updateStatus(desc);
};

export default SidebarTaskController;
