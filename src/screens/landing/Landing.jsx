import React from "react";
import heroImg from "../../assets/heroImg.jpg";
import { AiOutlineBulb, AiOutlineCoffee } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const { user } = useSelector((state) => state.auth);

const Landing = () => {
  return (
    <div className="pt-[20px]">
      <div className="w-[90%] m-auto">
        {/* header */}
        <div className="flex justify-between items-center">
          <div className="flex justify-between gap-[15em] items-center">
            {/* logo */}
            <div className="cursor-pointer">
              {" "}
              <h1 className="text-black font-bold text-2xl">
                V-NO
                <span className="bg-green-400 pt-[5px] pb-[5px] pr-[5px] rounded-tr-lg rounded-bl-lg">
                  TED
                </span>
              </h1>
            </div>
            {/* NAV */}
            <div>
              <ul className="flex gap-[14px]">
                <li className="cursor-pointer text-green-600 ">Home</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Why Us</li>
                <li className="cursor-pointer">Pricing</li>
                <li className="cursor-pointer">Careers</li>
              </ul>
            </div>
          </div>
          <div className="cursor-pointer">
            <span
              className=" rounded-md"
              style={{
                border: "1px solid gray",
                padding: "10px 15px",
                fontWeight: "600",
              }}
            >
              Download Apps
            </span>
          </div>
        </div>
        {/* hero section */}
        <div className="mt-[1em] flex items-center">
          {/* text side */}
          <div
            className="flex-[0.4] flex flex-col "
            style={{ lineHeight: "1.8em" }}
          >
            <div className="mb-[2em]">
              <h1 className="text-7xl" style={{ fontWeight: "700" }}>
                Paperless
              </h1>
              <h1 className="text-7xl " style={{ fontWeight: "700" }}>
                Easy
              </h1>
            </div>

            <div className="text-zinc-500 mb-[3em]">
              <p>This is the absolute way to make your todos</p>
              <p>easier and save the earth as well.</p>
              <p>Anything will be better</p>
            </div>

            {user ? (
              <Link to="/notes">
                <div className="cursor-pointer mb-[2em]">
                  <span
                    className="rounded-md bg-green-500 text-zinc-50"
                    style={{
                      padding: "15px 45px",
                      fontWeight: "600",
                    }}
                  >
                    Continue
                  </span>
                </div>
              </Link>
            ) : (
              <Link to="/auth">
                <div className="cursor-pointer mb-[2em]">
                  <span
                    className="rounded-md bg-green-500 text-zinc-50"
                    style={{
                      padding: "15px 45px",
                      fontWeight: "600",
                    }}
                  >
                    Get Started
                  </span>
                </div>
              </Link>
            )}

            <div>
              <p className="text-zinc-700">Trusted by</p>
              <div
                className="flex gap-[1em] text-black items-center text-2xl"
                style={{ fontWeight: "600" }}
              >
                <h2>Forbes</h2>
                <h2>Entrepreneur</h2>
                <h2>business</h2>
              </div>
            </div>
          </div>
          {/* img side */}
          <div className="flex-[0.6]">
            <img style={{ flex: 1, objectFit: "cover" }} src={heroImg} alt="" />
          </div>
        </div>
        {/* tags */}
        <div className="mt-[3em] mb-[3em] flex justify-between flex-wrap items-center">
          <div
            className="flex flex-col justify-center text-center p-[25px] rounded-md"
            style={{ border: "1px solid #dddada" }}
          >
            <span className="flex items-center justify-center mb-[1em] bg-green-400 p-[10px] text-4xl text-white w-[20%] m-auto rounded-full">
              <AiOutlineCoffee />
            </span>
            <h2
              className="text-black text-xl mb-[1em]"
              style={{ fontWeight: "700" }}
            >
              Work from Anywhere
            </h2>
            <p>Keep importantly info handy-your notes</p>
            <p>sync automatically across all</p>
            <p>your devices</p>
          </div>

          <div className="rounded-md bg-green-600 text-zinc-50 flex flex-col justify-center text-center p-[45px]">
            <span className="flex items-center justify-center mb-[1em] bg-green-400 p-[10px] text-4xl text-white w-[20%] m-auto rounded-full">
              <AiOutlineBulb />
            </span>
            <h2 className=" text-xl mb-[1em]" style={{ fontWeight: "700" }}>
              Remember Everything
            </h2>
            <p>Make notes more useful by adding text,</p>
            <p>images, audio, scans, PDFs,</p>
            <p>and documents</p>
          </div>

          <div
            className="flex flex-col justify-center text-center p-[25px] rounded-md"
            style={{ border: "1px solid #dddada" }}
          >
            <span className="flex items-center justify-center mb-[1em] bg-green-400 p-[10px] text-4xl text-white w-[20%] m-auto rounded-full">
              <BsSearch />
            </span>
            <h2
              className="text-black text-xl mb-[1em]"
              style={{ fontWeight: "700" }}
            >
              Remember Everything
            </h2>
            <p>Make notes more useful by adding text,</p>
            <p>images, audio, scans, PDFs,</p>
            <p>and documents</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
