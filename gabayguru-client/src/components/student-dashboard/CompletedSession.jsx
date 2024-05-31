import React from "react";
import { MdOutlineCheck } from "react-icons/md";

const CompletedSession = () => {
  return (
    <div className="rounded p-4 bg-white shadow-md grow">
      <div className="flex gap-3">
        <div className="flex flex-col w-1/8">
          <div className="text-s font-semibold text-black mt-1">
            Total Completed Sessions:
          </div>
          <div className="text-3xl font-bold text-black mt-0">1</div>
        </div>
        <div className="flex-grow flex justify-end">
          <div className="flex flex-col ml-auto self-end mt-20">
            <div className="bg-[#16A435] rounded-full p-4">
              <div className="flex items-center justify-center h-7 w-7 rounded-full">
                <MdOutlineCheck size={30} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedSession;
