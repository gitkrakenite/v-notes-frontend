import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="flex px-[1em] 2xl:px-[8em]  pt-[3em] ">
        {/* form side */}
        <div className="flex-1 mt-[6em] xl:flex-[0.5] xl:mt-0 bg-zinc-200 rounded-tl-md rounded-bl-md">
          <form className="flex flex-col gap-[15px] pl-[10px] pr-[5px] pt-[30px]">
            <input
              className="p-[10px] outline-none bg-transparent"
              style={{ borderBottom: "1px solid green" }}
              type="text"
              placeholder="What's your name ?"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="p-[10px] outline-none bg-transparent"
              style={{ borderBottom: "1px solid green" }}
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="bg-green-600 p-[10px] rounded-md text-zinc-50 text-lg"
            >
              Login Now
            </button>
          </form>
          {/* terms */}
          <div className="pt-[1em] pl-[1em]">
            <p>
              Please note that by signing in to our app you are consenting to
              our{" "}
              <span className="text-green-600 cursor-pointer">
                terms and policy
              </span>
              . Failure to which your account will be terminated from our
              services.
            </p>
          </div>
        </div>
        {/* image side */}
        <div className="hidden xl:flex flex-[0.5] relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.5)]" />
          <div>
            <img
              src="https://images.pexels.com/photos/3228761/pexels-photo-3228761.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-[100%] flex-1 object-cover rounded-tr-md rounded-br-md"
            />
          </div>
          {/* content */}
          <div
            className="absolute w-full h-full top-0 flex flex-col justify-center  text-white z-50 pl-[2em] text-lg"
            style={{ lineHeight: "1.8em" }}
          >
            <p>We are the best note keeping company</p>
            <p>With over 10 years of experience</p>
            <p>We are glad that you still choose us</p>
            <span className="changerSpan">Referred ?</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
