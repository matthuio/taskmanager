import axios from "axios";

const today = new Date().toLocaleDateString();
const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
  const [key, value] = cookie.split("=");
  acc[key] = value;
  return acc;
}, {});
// console.log(cookies.token);
export const fetchUserData = async () => {
  if (cookies.token) {
    try {
      const token = cookies.token;
      console.log(token);
      const response = await axios.get(
        "http://127.0.0.1:8000/api/get_user?token=" + token
      );
      const userData = response.data;
      return userData.email;
    } catch (error) {
      console.log(error);
    }
  }
};
