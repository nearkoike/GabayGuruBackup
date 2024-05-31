import React from "react";
import SessionHistory from "../../components/mentor-dashboard/SessionHistory";
import SessionInfo from "../../components/student-dashboard/SessionInfo";
import IncomingSession from "../../components/student-dashboard/IncomingSession";
import CompletedSession from "../../components/student-dashboard/CompletedSession";

const SessionsMentor = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex justify-between px-6 pt-6 gap-8">
        <SessionInfo />
        <IncomingSession />
        <CompletedSession />
      </div>
      <div className="p-6 sm:min-h-[600px]">
        <SessionHistory />
      </div>
    </div>
  );
};

export default SessionsMentor;
