import React from 'react';

const TransactionHistory = () => {
  return (
    <div className="rounded p-4 bg-white shadow-md h-full">
      <div className="custom-table text-center">
        <h2 className="text font-bold">Transaction History</h2>
        <table className="mt-4">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th className="py-2">Activity</th>
              <th className="py-2">Date Completed</th>
              <th className="py-2">Time Completed</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">000000003</td>
              <td className="py-2">Paid P1,000.00 for session with Juan Dela Cruz</td>
              <td className="py-2">October 5, 2023</td>
              <td className="py-2">3:00 pm</td>
              <td className="py-2">
                <span className="status-incoming">Verifying</span>
              </td>
            </tr>
            <tr>
              <td className="py-2">000000002</td>
              <td className="py-2">Top Up P2,000 in E-Wallet</td>
              <td className="py-2">October 3, 2023</td>
              <td className="py-2">12:00 pm</td>
              <td className="py-2">
                <span className="status-completed">Approved</span>
              </td>
            </tr>
            <tr>
              <td className="py-2">000000001</td>
              <td className="py-2">Cash Out P2,000 in E-Wallet</td>
              <td className="py-2">October 1, 2023</td>
              <td className="py-2">12:00 pm</td>
              <td className="py-2">
                <span className="status-cancelled">Rejected</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;