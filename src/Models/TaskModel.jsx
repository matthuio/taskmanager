import axios from "axios";
const today = new Date().toLocaleDateString();
const email = localStorage.getItem("email")
  ? localStorage.getItem("email")
  : "";

const url = "http://127.0.0.1:8000/api/get_task/";
export const fetchTasks = async () => {
  try {
    const response = await axios.post(url, { email: email });
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const fetchTasksToday = async () => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/get_task_today/",
      { email: email }
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateStatus = async (desc) => {
  console.log("model");
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/update_status/",
      { email: email, desc }
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTasksByQuery = async (query) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/get_task_query/",
      { email: email, query }
    );
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
