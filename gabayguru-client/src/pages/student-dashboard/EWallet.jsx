import React from "react";
import AccountInfo from "../../components/student-dashboard/AccountInfo";
import EWalletInfo from "../../components/student-dashboard/EWalletInfo";
import TransactionHistory from "../../components/student-dashboard/TransactionHistory";

const EWallet = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex justify-between px-6 pt-6 gap-8">
        <EWalletInfo />
        <AccountInfo />
      </div>
      <div className="p-6 md:min-h-[600px]">
        <TransactionHistory />
      </div>
    </div>
  );
};

export default EWallet;
