import React, { useEffect, useState } from "react";
import { AiOutlineMan } from "react-icons/ai";
import { dummyData } from "../../data";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import {
  getTodo,
  resetTodo,
  createTodo,
  deleteTodo,
} from "../../features/todo/todoSlice";
import moment from "moment";
import Spinner from "../../components/Spinner";

const Notes = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");

  const { user } = useSelector((state) => state.auth);

  const { todos, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.todo
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const handleClear = () => {
    setTitle("");
    setDescription("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      toast.error("All details needed", { theme: "dark" });
      return;
    }

    try {
      const todoData = { title, description };
      dispatch(createTodo(todoData));
    } catch (error) {
      toast.error(error, { theme: "dark" });
    }
    handleClear();
    location.reload();
  };

  const handleDelete = (todoId) => {
    // console.log(todoId);
    try {
      dispatch(deleteTodo(todoId));
      handleClear();

      toast.success("Deleted todo", { theme: "dark" });
    } catch (error) {
      toast.error("Could not delete", { theme: "dark" });
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, []);

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  return (
    <div className="pt-[20px]">
      <div className="w-[90%] m-auto">
        {/* header */}
        <div className=" flex justify-between items-center">
          {/* logo */}
          <div>
            <h1 className="text-black font-bold text-2xl">
              V-NO
              <span className="bg-green-400 pt-[5px] pb-[5px] pr-[5px] rounded-tr-lg rounded-bl-lg">
                TED
              </span>
            </h1>
          </div>
          {/* user details */}
          <div className="flex items-center gap-8">
            <div>
              <p>Hello {user?.name}</p>
            </div>
            <div>
              {user?.profile ? (
                <img
                  src={user.profile}
                  className="w-[50px] h-[50px] rounded-full object-cover"
                  alt=""
                />
              ) : (
                <p className="w-9 h-9 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-lg ">
                  {user?.name[0]}
                </p>
              )}
            </div>

            <div
              className="text-3xl text-zinc-500 cursor-pointer"
              onClick={handleLogout}
            >
              <AiOutlineMan title="log out" />
            </div>
          </div>
        </div>

        {/* main section */}
        <div className=" flex flex-col-reverse md:flex-row justify-between mt-[2em]">
          <div className="flex-[0.6] mt-[1em] md:mt-0">
            {/* your notes */}
            {isLoading ? (
              <Spinner message="Fetching your todos ..." />
            ) : (
              <>
                <h1 className="underline">Here are all your todos and notes</h1>
                {todos ? (
                  <div className="">
                    {todos?.map((item) => (
                      <div
                        key={item._id}
                        className=" mt-6 p-[15px] rounded-md"
                        style={{ border: "1px solid #ccc" }}
                      >
                        <h2
                          className="mb-[1em] text-xl"
                          style={{ fontWeight: "600" }}
                        >
                          {item.title}
                        </h2>
                        <p className="mb-[1em]">{item.description}</p>
                        <div className="flex gap-[1em] md:gap-[3em] flex-wrap mb-[1em]">
                          <div>
                            <p
                              className="mb-[1em]"
                              style={{ fontWeight: "600" }}
                            >
                              {item.status}
                            </p>
                          </div>
                          <div>
                            <select
                              className="p-[5px]"
                              value={status}
                              onChange={(e) => setStatus(e.target.value)}
                            >
                              <option value="todo">Todo</option>
                              <option value="progress">In Progress</option>
                              <option value="completed">Completed</option>
                            </select>
                          </div>
                          <div>
                            <span className="bg-green-500 text-white p-[8px] rounded-md cursor-pointer">
                              Update
                            </span>
                          </div>
                          <div onClick={() => handleDelete(item._id)}>
                            <span className="bg-red-500 text-white p-[8px] rounded-md cursor-pointer">
                              Delete
                            </span>
                          </div>
                        </div>

                        <p>Created {moment(item.createdAt).fromNow()}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-[4em] text-4xl text-gray-700">
                    <p>Hello {user.name} create your first todo</p>
                  </div>
                )}
              </>
            )}
          </div>
          {/* create new note */}
          <div className=" flex-[0.3] top-0 sticky z-50 bg-white">
            <h1 className="mb-[1em] underline">Create new todo</h1>
            <div>
              <form
                className="flex gap-[20px] flex-col w-full flex-1"
                onSubmit={handleSubmit}
              >
                <input
                  className="w-full flex-1 p-[10px] bg-transparent rounded-lg"
                  style={{ border: "1px solid black" }}
                  type="text"
                  placeholder="Title of the todo"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  className="w-full flex-1 p-[10px] bg-transparent rounded-lg"
                  style={{ border: "1px solid black" }}
                  type="text"
                  placeholder="Decription"
                  required
                  minLength={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-green-500 text-white p-[12px] text-lg rounded-lg"
                  onClick={handleSubmit}
                >
                  Create Todo
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
