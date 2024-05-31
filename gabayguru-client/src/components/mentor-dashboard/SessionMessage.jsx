import React from "react";

const SessionMessage = () => {
  return (
    <div className="rounded p-4 bg-white shadow-md h-full">
      <div className="text-3xl font-bold text-black mb-4">
        Session Requests
      </div>
      <div className="rounded-md p-4 bg-light-blue-bg outline outline-cyan-200">
        <div className="mb-4">
          <span className="font-bold text-xl">Maria Clara</span>
        <div className="flex">
            <span>October 10, 2023</span>
        </div> 
        <div className="flex">
            <span >1:00pm - 2:00pm</span>
        </div> 
        </div>
        <p className="mb-4">
          Hi! I am writing this message in hopes of getting a mentorship session with you. I need to learn about variables in Java.
          Hi! I am writing this message in hopes of getting a mentorship session with you. I need to learn about variables in Java.
          Hi! I am writing this message in hopes of getting a mentorship session with you. I need to learn about variables in Java.
        </p>
       
        <div className="flex flex-col">
          <div className="flex ml-auto self-end gap-1 mt-14">
            <button className="btn btn-blue">Accept</button>
            <button className="btn btn-neutral">Decline</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionMessage;