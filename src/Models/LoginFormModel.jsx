import axios from "axios";
const url = "http://127.0.0.1:8000/api/login/";
const registerUrl = "http://127.0.0.1:8000/api/register/";
export const signin = async (email, name, password) => {
  console.log("model", email, name, password);
  try {
    const response = await axios.post(url, {
      email: email,
      username: name,
      password: password,
    });

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const sendRegister = async (email, name, password) => {
  try {
    const response = await axios.post(registerUrl, {
      email: email,
      username: name,
      password: password,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
