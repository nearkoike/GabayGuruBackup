import React from "react";
import { FaWallet } from "react-icons/fa";

const EWalletInfo = () => {
  return (
    <div className="rounded p-4 bg-white shadow-md grow">
      <div className="flex gap-3">
        <div>
          <div className="bg-blue rounded-full p-4">
            <div>
              <FaWallet size={30} className="text-white" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <div className="text-xl font-semibold text-black mt-1">
            Your E-Wallet Contains:
          </div>
          <div className="text-3xl font-bold text-black mt-0">₱10,000.00</div>
        </div>
        <div className="flex flex-col ml-auto self-end gap-1 mt-5">
          <button className="btn btn-blue">Top Up</button>
          <button className="btn bg-darkblue">Cash Out</button>
        </div>
      </div>
    </div>
  );
};

export default EWalletInfo;
