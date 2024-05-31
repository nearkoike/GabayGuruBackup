import React from "react";

const IncomingSession = () => {
  return (
    <div className="rounded p-4 bg-white shadow-md grow">
        <div className="flex flex-col w-1/8">
          <div className="text-s font-semibold text-black mt-1">
            Total Incoming Sessions:
          </div>
          <div className="text-3xl font-bold text-black mt-0">1</div>

            <div className="flex flex-col ml-auto self-end gap-1 mt-8">
            <button className="btn btn-blue">Add Session</button>
            </div>
        </div>
      </div>

  );
};

export default IncomingSession;
