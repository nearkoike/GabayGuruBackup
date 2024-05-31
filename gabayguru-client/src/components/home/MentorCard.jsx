import React from "react";
import { FaStar } from "react-icons/fa";
import { MdChatBubbleOutline, MdOutlineAccessTime, MdOutlineWorkOutline } from "react-icons/md";
import BookingComponent from "../shared/Booking";
import { Link } from "react-router-dom";
import NextAvailability from "./NextAvailability";

const MentorCard = ({ mentor }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-300">
      {/* Mentor Card Body */}
      <div className="flex">
        {/* Photo */}
        <div>
          <div className="overflow-hidden mr-6 bg-gray-200 md:h-60 rounded-md">
            <img
              src={mentor.avatar}
              alt={mentor.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <div>
            <h2 className="text-2xl font-bold mb-2">{mentor.name}</h2>
            <div className="badge bg-yellow text-md p-3 text-white gap-1">
              <FaStar /> 4.25
            </div>
            <div className="text-gray-500 flex flex-col">
              <div className="flex gap-2">
                <MdOutlineWorkOutline className="lg:min-w-4 lg:min-h-4 mt-1" />
                <p>Mentor Title Here</p>
              </div>
              <div className="flex gap-2">
                <MdOutlineAccessTime className="lg:min-w-4 lg:min-h-4 mt-1" />
                <p>{mentor.experience} Years of Experience</p>
              </div>
              <div className="flex gap-2">
                <MdChatBubbleOutline className="lg:min-w-4 lg:min-h-4 mt-1" />
                <p>5 Reviews | 16 Sessions</p>
              </div>
              <div className="my-3">
                <div className="badge badge-ghost p-3 text-gray-600 font-semibold">
                  {mentor.subcategory}
                </div>
              </div>
              <p className="mb-6">{mentor.description}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-auto">
            <BookingComponent />
            <button className="btn bg-orange-500 hover:bg-orange-700 text-white font-bold">
              <Link to="/profile" className="no-underline text-white">
                View Profile
              </Link>
            </button>
          </div>
        </div>

        {/* Availability */}
        <div className="flex flex-col gap-3 ml-auto">
          <div className="flex items-center">
            <p className="text-gray-600 text-2xl font-bold mr-2">
              ₱{mentor.rate}
            </p>
            <p>/ session</p>
          </div>

          <NextAvailability />
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
