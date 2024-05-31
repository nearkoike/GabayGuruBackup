import React from "react";
import { FaExclamation } from "react-icons/fa6";

const SessionRequest = () => {
  return (
    <div className="rounded p-4 bg-white shadow-md">
      <div className="flex gap-3">
        <div>
          <div className="bg-blue rounded-full p-4">
            <div>
              <FaExclamation size={30} className="text-white" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <div className="text-xl font-semibold text-black mt-1">
            You have:
          </div>
          <div className="text-3xl font-bold text-black mt-0">2 Session Request</div>
        </div>
        <div className="flex flex-col ml-auto self-end gap-1 mt-20">
          <button className="btn btn-blue">View All</button>
        </div>
      </div>
    </div>
  );
};

export default SessionRequest;
