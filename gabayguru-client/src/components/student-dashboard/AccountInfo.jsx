import React from "react";
import { IoCashOutline } from "react-icons/io5"

const AccountInfo = () => {
  return (
    <div className="rounded p-3 bg-white shadow-md grow">
      <div className="flex gap-3">
        <div>
        
          <div className="bg-blue rounded-full p-4">
            <div>
              <IoCashOutline size={40} className="text-white" />
            </div>
          </div>
        </div>
            <div className="flex flex-col w-1/2">
          <div className="font-bold text-black mt-0">Account Name: <span className="font-normal"> Juan Dela Cruz </span></div>
          <div className="font-bold text-black mt-0">Account Number:<span className="font-normal"> 09123456789 </span></div>
          <div className="font-bold text-black mt-0">Account Type:<span className="font-normal"> GCash </span></div>
         
            </div>
        <div className="flex flex-col ml-auto self-end gap-1 mt-20">
          <button className="btn btn-blue">Update Information</button>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;