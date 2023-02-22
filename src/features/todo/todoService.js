import axios from "../../axios";

// this file is strictly for the http requests, sending the data back

// create todo
const createTodo = async (todoData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post("/todo/create", todoData, config);
  return response.data;
};

// get my todo
const getTodo = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get("/todo/fetch", config);

  return response.data;
};

// update todo
const updateTodo = async (todoId, todoData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(`/todo/update/${todoId}`, todoData, config);
  return response.data;
};

// delete my todo
const deleteTodo = async (todoId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(`/todo/delete/${todoId}`, config);

  return response.data;
};

const todoService = {
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
};

export default todoService;
