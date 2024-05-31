import React from "react";
import SessionRequest from "../../components/mentor-dashboard/SessionRequest";
import DayView from "../../components/student-dashboard/SessionList";
import EWalletInfo from "../../components/student-dashboard/EWalletInfo";
import SessionInfo from "../../components/student-dashboard/SessionInfo";
import TransactionInfo from "../../components/student-dashboard/TransactionInfo";

const MentorDashboard = () => {
  return (
    <>
      <div className="p-4 w-1/2">
        <div className="bg-light-blue-bg rounded-t-lg rounded-b-lg">
          <div className="flex flex-col gap-6">
            <SessionInfo/>
            <EWalletInfo />
            <SessionRequest />
            <TransactionInfo/>
          </div>
        </div>
      </div>
      <div className="p-4 w-1/2 h-full">
        <DayView />
      </div>
    </>
  );
};

export default MentorDashboard;
