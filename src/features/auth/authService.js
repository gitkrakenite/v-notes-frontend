import axios from "../../axios";

// this file is strictly for the http requests, sending the data back and storing in localstorage

// register user
const register = async (userData) => {
  const response = await axios.post("/user/register", userData);

  if (response.data) {
    // This will make our data persist even when we refresh
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// logout user
const logout = () => {
  localStorage.removeItem("user");
};

// login user
const login = async (userData) => {
  const response = await axios.post("/user/login", userData);

  if (response.data) {
    // This will make our data persist even when we refresh
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
