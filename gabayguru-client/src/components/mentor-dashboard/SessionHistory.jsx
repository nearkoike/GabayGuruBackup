import React from "react";
import "./session.css";

const SessionHistory = () => {
  return (
    <div className="rounded p-4 bg-white shadow-md w-full h-full">
      <div className="custom-table text-center w-full">
        <h2 className="text font-bold">Session History</h2>
        <table className="mt-4">
          <thead>
            <tr>
              <th>Session ID</th>
              <th className="py-2">Student</th>
              <th className="py-2">Date</th>
              <th className="py-2">Time</th>
              <th className="py-2">Rate</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">001</td>
              <td className="py-2">Juan Dela Cruz</td>
              <td className="py-2">October 10, 2023</td>
              <td className="py-2">1:00pm - 2:00 pm</td>
              <td className="py-2">₱1,000.00</td>
              <td className="py-2">
                <span className="status-incoming">Incoming</span>
              </td>
            </tr>
            <tr>
              <td className="py-2">002</td>
              <td className="py-2">Juan Dela Cruz</td>
              <td className="py-2">October 10, 2023</td>
              <td className="py-2">1:00pm - 2:00 pm</td>
              <td className="py-2">₱1,000.00</td>
              <td className="py-2">
                <span className="status-completed">Completed</span>
              </td>
            </tr>
            <tr>
              <td className="py-2">003</td>
              <td className="py-2">Juan Dela Cruz</td>
              <td className="py-2">October 10, 2023</td>
              <td className="py-2">1:00pm - 2:00 pm</td>
              <td className="py-2">₱1,000.00</td>
              <td className="py-2">
                <span className="status-cancelled">Cancelled</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SessionHistory;
