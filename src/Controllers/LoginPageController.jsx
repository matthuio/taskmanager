import { sendRegister, signin } from "../Models/LoginFormModel";

export const login = async (email, username, password) => {
  console.log("controller", email, username, password);
  await signin(email, username, password);
};

export const register = (email, username, password) => {
  sendRegister(email, username, password);
};
