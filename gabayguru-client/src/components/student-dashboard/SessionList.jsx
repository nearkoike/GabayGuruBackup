import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SessionList = () => {
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
  const dates = ["1", "2", "3", "4", "5", "6", "7"];

  return (
    <div className="rounded p-4 bg-white shadow-md h-full">
      <div className="flex flex-col gap-4">
        <div className="h-1/4">
          {/* Month Name */}
          <div className="flex justify-between">
            <div className="text-3xl font-bold text-black mt-0">
              October 2023
            </div>
            <div className="flex gap-4 self-center">
            <IoIosArrowBack className="w-18"/>
            <IoIosArrowForward className="w-18"/>
            </div>
          </div>
          {/* Weekly View */}
          <div className="flex justify-between px-8 py-4">
            {daysOfWeek.map((number, index) => (
              <div key={index}>
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600">{number}</div>
                  <div className="font-semibold">{dates[index]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="h-3/4 space-y-4">
          {/* Title */}
          <div className="text-3xl font-bold text-black mt-0">
            Incoming Sessions:
          </div>
          {/* List of Sessions */}
          <div>
            <div className="w-full bg-light-blue-bg flex align-center items-center gap-3 outline outline-cyan-200 rounded-md p-2">
              <div className="avatar">
                <div className="w-20 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-lg">Juan Dela Cruz</div>
                <div className="text-sm font-medium text-gray-600">
                  October 5, 2023
                </div>
                <div className="text-sm font-medium text-gray-600">
                  1:00pm - 2:00pm
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionList;
