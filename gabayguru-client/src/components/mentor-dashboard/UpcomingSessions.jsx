import React from "react";
import { FaCalendarDay } from "react-icons/fa";

const UpcomingSessions = () => {
  return (
    <div className="rounded p-4 bg-white shadow-md">
      <div className="flex gap-3">
        <div>
          <div className="bg-blue rounded-full p-4">
            <div>
              <FaCalendarDay size={30} className="text-white" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <div className="text-xl font-semibold text-black mt-1">
            Time until next session:
          </div>
          <div className="text-3xl font-bold text-black mt-0">3 days</div>
          <div className="text-md font-medium text-gray-600 mt-3">
            October 10, 2023
          </div>
          <div className="text-md  font-medium text-gray-600 ">
            1:00pm - 2:00pm
          </div>
        </div>
        <div className="flex flex-col ml-auto self-end gap-1 mt-14">
          <button className="btn btn-blue">Attend Session</button>
          <button className="btn bg-gray-600">Cancel Session</button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSessions;
