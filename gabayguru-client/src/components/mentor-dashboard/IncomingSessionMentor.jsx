import React from "react";
import { 
    FaExclamation,
} from "react-icons/fa6";

const IncomingSessionMentor = () => {
  return (
    <div className="rounded p-4 bg-white shadow-md grow">
      <div className="flex gap-3">
        <div>
          <div className="bg-yellow rounded-full p-4">
            <div>
              <FaExclamation size={30} className="text-white" />
            </div>
          </div>
        </div>
            <div className="flex flex-col w-1/2">
            <div className="text-black mt-1">
            Total Incoming Sessions: <br></br>
            <span className="text-2xl font-bold"> 1 Incoming Session</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default IncomingSessionMentor;