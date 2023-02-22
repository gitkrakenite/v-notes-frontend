import React, { useState } from "react";
import Login from "../../components/login/Login";
import Register from "../../components/register/Register";
import { Link } from "react-router-dom";

const Auth = () => {
  const [change, setChange] = useState(false);

  const handleChange = () => {
    setChange(!change);
  };
  return (
    <div>
      {/* logo */}
      <Link to="/">
        <div className="pt-[15px] pl-[15px]">
          <h1 className="text-black font-bold text-2xl">
            V-NO
            <span className="bg-green-400 pt-[5px] pb-[5px] pr-[5px] rounded-tr-lg rounded-bl-lg">
              TED
            </span>
          </h1>
        </div>
      </Link>

      <div>{change ? <Login /> : <Register />}</div>
      {/*  */}
      <div>
        {change ? (
          <div
            className="px-[8em]  pt-[3em] cursor-pointer underline"
            onClick={handleChange}
          >
            <p>Are you new here ?</p>
          </div>
        ) : (
          <div
            className="px-[8em]  pt-[3em] cursor-pointer underline"
            onClick={handleChange}
          >
            <p>Not new here ?</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
