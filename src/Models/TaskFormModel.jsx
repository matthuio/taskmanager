import axios from "axios";
const url = "http://127.0.0.1:8000/api/make_task/";
export const makeTask = async (name, desc, date) => {
  const response = await axios.post(url, {
    name: name,
    description: desc,
    date: date,
    email: "email@email.com",
  });
  const data = response.data;
  console.log(data);
};
