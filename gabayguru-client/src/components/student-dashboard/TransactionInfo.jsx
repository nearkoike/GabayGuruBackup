import React from "react";

const TransactionInfo = () => {
  return (
    <>
      {/* transaction */}
      <div className="rounded p-4 bg-white shadow-md ">
        <div className="text-xl font-semibold text-black ">
          Transaction History:
        </div>
        <div className="mt-2">
          <table className="w-full text-left">
            {/* Row */}
            <thead>
              <tr className="text-black">
                <th className="px-6 py-3 text-left text-text-xl font-bold uppercase tracking-wider">
                  Activity
                </th>
                <th className="px-6 py-3 text-left text-xl font-bold uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            {/* left side */}
            <tbody>
              <tr className="hover:bg-gray-200">
                <td className="border-b px-6 py-4 text-left text-s font-medium">
                  Paid P1,000.00 for session with Juan Dela Cruz
                </td>
                <td className="border-b px-6 py-4 text-left text-s font-medium">
                  <div style={{ marginBottom: "2px" }}>October 5, 2023</div>
                </td>
              </tr>
              {/* right side */}
              <tr className="hover:bg-gray-200">
                <td className="border-b px-6 py-4 text-left text-s font-medium">
                  Top Up P2,000.00 in E-Wallet
                </td>
                <td className="border-b px-6 py-4 text-left text-s font-medium">
                  <div style={{ marginBottom: "2px" }}>October 3, 2023</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-16">
          <button className="btn btn-blue">View All</button>
        </div>
      </div>
    </>
  );
};

export default TransactionInfo;
