import React, { useEffect, useState } from "react";
import {
  fetchTasks,
  updateStatus,
  fetchTasksToday,
  fetchTasksByQuery,
} from "../Models/TaskModel";
import TaskCard from "../Views/TaskCard";
const TaskCardController = ({ isChanged }) => {
  const [isloading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [task, setTask] = useState([]);
  const [changed, setChanged] = useState(123);
  console.log(typeof isChanged);
  useEffect(() => {
    const loadTasks = async () => {
      try {
        if (typeof isChanged !== "string") {
          setLoading(true);
          let data;
          data = await fetchTasks();
          console.log(data);
          setTask(data);
          setLoading(false);
        } else if (isChanged === "String") {
          setLoading(true);
          let data;
          data = await fetchTasksToday();
          setTask(data);
          console.log(data);
          setLoading(false);
        } else {
          setLoading(true);
          let data;
          data = await fetchTasksByQuery(isChanged);
          setTask(data);
          console.log(data);
          setLoading(false);
        }
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
  }, [changed, isChanged]);
  if (isloading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error... {error}</p>;
  }
  return <TaskCard tasks={task} setChanged={setChanged} />;
};

export const handleUpdate = (desc) => {
  console.log("controller", desc);
  updateStatus(desc);
};
export const getTaskToday = async () => {
  // isToday = true;
  TaskCardController();
};

export default TaskCardController;
