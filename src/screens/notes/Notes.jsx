import React, { useEffect } from "react";
import { AiOutlineMan } from "react-icons/ai";
import { dummyData } from "../../data";
import { Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";

const Notes = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, []);

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
        <div className="flex justify-between mt-[2em]">
          <div className="flex-[0.6]">
            {/* your notes */}
            <h1>Here are all your todos and notes</h1>
            <div className="">
              {dummyData?.map((item) => (
                <div
                  key={item.id}
                  className="m-[20px] p-[15px] rounded-md"
                  style={{ border: "1px solid #ccc" }}
                >
                  <h2
                    className="mb-[1em] text-xl"
                    style={{ fontWeight: "600" }}
                  >
                    {item.title}
                  </h2>
                  <p className="mb-[1em]" style={{}}>
                    {item.description}
                  </p>
                  <div className="flex gap-[3em]">
                    <div>
                      <p className="mb-[1em]" style={{ fontWeight: "600" }}>
                        {item.status}
                      </p>
                    </div>
                    <div>
                      <select>
                        <option value="pending">Pending</option>
                        <option value="done">Done</option>
                      </select>
                    </div>
                    <div>
                      <span className="bg-green-500 text-white p-[8px] rounded-md cursor-pointer">
                        Update
                      </span>
                    </div>
                    <div>
                      <span className="bg-red-500 text-white p-[8px] rounded-md cursor-pointer">
                        Delete
                      </span>
                    </div>
                  </div>

                  <p>{item.createdAt}</p>
                </div>
              ))}
            </div>
          </div>
          {/* create new note */}
          <div className=" flex-[0.3]">
            <h1 className="mb-[1em]">Create new todo</h1>
            <div>
              <form className="flex gap-[20px] flex-col w-full flex-1">
                <input
                  className="w-full flex-1 p-[10px] bg-transparent rounded-lg"
                  style={{ border: "1px solid black" }}
                  type="text"
                  placeholder="Title of the todo"
                  required
                />
                <input
                  className="w-full flex-1 p-[10px] bg-transparent rounded-lg"
                  style={{ border: "1px solid black" }}
                  type="text"
                  placeholder="Decription"
                  required
                  minLength={3}
                />
                <button
                  type="submit"
                  className="bg-green-500 text-white p-[12px] text-lg rounded-lg"
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
