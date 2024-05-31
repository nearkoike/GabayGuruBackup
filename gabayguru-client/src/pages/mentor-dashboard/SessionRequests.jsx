import React from "react";
import SidebarMentor from "./SidebarMentor";
import SessionMessage from "../../components/mentor-dashboard/SessionMessage";
import SessionInfo from "../../components/student-dashboard/SessionInfo";
import IncomingSessionMentor from "../../components/mentor-dashboard/IncomingSessionMentor";
import CompletedSessionMentor from "../../components/mentor-dashboard/CompletedSessionMentor";
import SessionRequest from "../../components/mentor-dashboard/SessionRequest";

const SessionRequests = () => {
  return (
    <>
      <div className="p-4 w-1/2">
        <div className="flex flex-col gap-6 justify-between h-full">
          <SessionRequest />
          <SessionInfo />
          <IncomingSessionMentor />
          <CompletedSessionMentor />
        </div>
      </div>
      <div className="p-4 w-1/2 h-full">
        <SessionMessage />
      </div>
    </>
  );
};

export default SessionRequests;
