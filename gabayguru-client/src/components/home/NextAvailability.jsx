import React, { useState, useEffect } from "react";
import { BsCalendarEvent } from "react-icons/bs";
import { MdAccessTime } from "react-icons/md";

const NextAvailability = () => {
  const [availability, setAvailability] = useState({
    daysUntil: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    fetch("/availability.json") // Adjust URL based on your public folder structure
      .then((response) => response.json())
      .then((data) => setAvailability(data))
      .catch((error) =>
        console.error("Error loading availability data:", error)
      );
  }, []);

  return (
    <div className="bg-white outline outline-gray-200 rounded-lg p-4 w-full">
      <div className="flex flex-col items-center text-gray-600">
        <div className="flex flex-col items-center gap-1">
          <p className="text-sm font-semibold">Next Available in:</p>
          <div className="badge badge-neutral text-whitefont-semibold text-lg  p-4 ">
            6 Days
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-2 text-sm">
            <BsCalendarEvent />
            <p>{availability.date}</p>
          </div>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <MdAccessTime />
            <p>{availability.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextAvailability;
