import React from "react";
import { MdOutlineCheck } from "react-icons/md";

const CompletedSessionMentor = () => {
  return (
    <div className="rounded p-4 bg-white shadow-md grow">
      <div className="flex gap-3">
        <div>
          <div className="bg-green rounded-full p-4">
            <div>
              <MdOutlineCheck size={30} className="text-white" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/2">
            <div className="text-black mt-1">
            Total Completed Sessions: <br></br>
            <span className="text-2xl font-bold"> 1 Completed Session</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedSessionMentor;
