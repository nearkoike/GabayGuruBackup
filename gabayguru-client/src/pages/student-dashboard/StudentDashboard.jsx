import React from "react";
import SessionInfo from "../../components/student-dashboard/SessionInfo";
import EWalletInfo from "../../components/student-dashboard/EWalletInfo";
import TransactionInfo from "../../components/student-dashboard/TransactionInfo";
import DayView from "../../components/student-dashboard/SessionList";

const StudentDashboard = () => {
  return (
    <>
      <div className="p-4 w-1/2">
          <div className="flex flex-col justify-between h-full gap-6">
            <SessionInfo />
            <EWalletInfo />
            <TransactionInfo />
          </div>
      </div>
      <div className="p-4 w-1/2 h-full">
        <DayView />
      </div>
    </>
  );
};

export default StudentDashboard;
