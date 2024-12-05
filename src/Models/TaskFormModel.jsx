import axios from "axios";
import { fetchUserData } from "./UserModel";
const url = "http://127.0.0.1:8000/api/make_task/";
const email = await fetchUserData();
export const makeTask = async (name, desc, date) => {
  const response = await axios.post(url, {
    name: name,
    description: desc,
    date: date,
    email: email,
  });
};
