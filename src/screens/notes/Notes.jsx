import React from "react";
import { AiOutlineMan } from "react-icons/ai";
import { dummyData } from "../../data";

const Notes = () => {
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
              <p>Hello John Clarke</p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/7438545/pexels-photo-7438545.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                className="w-[50px] h-[50px] rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="text-3xl text-zinc-500 cursor-pointer">
              <AiOutlineMan title="log out" />
            </div>
          </div>
        </div>

        {/* main section */}
        <div>
          {/* your notes */}
          <h1 className="mt-[1em]">Here are all your todos and notes</h1>
          <div className="">
            {dummyData?.map((item) => (
              <div
                key={item.id}
                className="m-[20px] p-[15px] rounded-md"
                style={{ border: "1px solid #ccc" }}
              >
                <h2 className="mb-[1em] text-xl" style={{ fontWeight: "600" }}>
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
          {/* create new note */}
        </div>
      </div>
    </div>
  );
};

export default Notes;
