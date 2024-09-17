import axios from "axios";
import { AUTH_SERVICE_LOGIN_URL, AUTH_SERVICE_SIGNUP_URL } from "../service/API_URL";

export const signUp = (email, password) => {
  try{
    const response = axios.post(AUTH_SERVICE_SIGNUP_URL, {
      email,
      password,
    })
    console.log('signup response ',response)
    return response;
  }catch(e){
    return e;
  }
};

export const login = async(username, password) => {

  try{
  const response = await axios
  .post(AUTH_SERVICE_LOGIN_URL, {
    username,
    password,
  })
  console.log('login response ',response)
  return response;
}catch(e){
  return e;
}  
};