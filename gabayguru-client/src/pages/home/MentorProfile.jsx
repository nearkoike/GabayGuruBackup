import React, { useState, useEffect } from "react";
import BookingComponent from "../../components/shared/Booking";
import {
  MdOutlineWorkOutline,
  MdOutlineAccessTime,
  MdLightbulbOutline,
  MdChatBubbleOutline,
} from "react-icons/md";
import NextAvailability from "../../components/home/NextAvailability";
import LoadingSpinner from "../../components/shared/LoadingSpinner";
import { FaDownload, FaGithub, FaLinkedin, FaStar } from "react-icons/fa";
function Profile() {
  const [profile, setProfile] = useState(null);
  const [ratings, setRatings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ratingsPerPage] = useState(5);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch profile data
    fetch("/profileData.json")
      .then((response) => response.json())
      .then((data) => setProfile(data))
      .catch((err) => setError("Failed to fetch profile data"));

    // Fetch ratings
    fetch("/ratingsData.json")
      .then((response) => response.json())
      .then((data) => setRatings(data.ratings))
      .catch((err) => setError("Failed to fetch ratings"));
  }, []);

  const averageRating =
    ratings.length > 0
      ? (
          ratings.reduce((acc, item) => acc + item.rating, 0) / ratings.length
        ).toFixed(1)
      : "No ratings yet";

  const totalReviews = ratings.length;

  const lastRatingIndex = currentPage * ratingsPerPage;
  const firstRatingIndex = lastRatingIndex - ratingsPerPage;
  const currentRatings = ratings.slice(firstRatingIndex, lastRatingIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prev) =>
      prev < Math.ceil(ratings.length / ratingsPerPage) ? prev + 1 : prev
    );
  const prevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1));

  const renderStars = (rating) => {
    if (rating < 0 || rating > 5 || isNaN(rating)) {
      console.error("Invalid rating:", rating);
      return <div>Error: Invalid rating</div>;  // Display error or fallback UI
  }
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = Math.max(0, 5 - fullStars - (halfStar ? 1 : 0));

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <svg
            key={i}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="#FFD700"
          >
            <path d="M12 .587l3.515 7.113 7.485.688-5.5 5.364 1.301 7.48L12 17.75l-6.801 3.482 1.301-7.48-5.5-5.364 7.485-.688L12 .587z" />
          </svg>
        ))}
        {halfStar && (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFD700">
            <path d="M12 .587l3.515 7.113 7.485.688-5.5 5.364 1.301 7.48L12 17.75l-6.801 3.482 1.301-7.48-5.5-5.364 7.485-.688L12 .587z" />
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg
            key={i}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="#E0E0E0"
          >
            <path d="M12 .587l3.515 7.113 7.485.688-5.5 5.364 1.301 7.48L12 17.75l-6.801 3.482 1.301-7.48-5.5-5.364 7.485-.688L12 .587z" />
          </svg>
        ))}
      </div>
    );
};

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mx-auto min-h-screen relative">
      {/* Blue Cover */}
      {/* <div className="bg-darkblue w-full absolute md:h-44 z-0 top-0" /> */}
      {profile ? (
        <div className="z-10">
          <div className="section-container bg-light-bg pt-8">
            <div className="flex justify-between items-center">
              {/* Left Side */}
              <div>
                <div className="flex space-x-4">
                  {/* Mentor Image */}
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="h-64 w-64 rounded-full object-cover"
                  />
                  {/* Mentor Info */}
                  <div className="mt-auto bg-light-bg flex flex-col">
                    <h2 className="text-3xl font-bold py-4">Juan Dela Cruz</h2>
                    <div className="text-gray-500 flex flex-col">
                      <div className="flex gap-2">
                        <MdOutlineWorkOutline className="lg:min-w-4 lg:min-h-4 mt-1" />
                        <p>Mentor Title Here</p>
                      </div>
                      <div className="flex gap-2">
                        <MdOutlineAccessTime className="lg:min-w-4 lg:min-h-4 mt-1" />
                        <p>6 Years of Experience</p>
                      </div>
                      <div className="flex gap-2">
                        <MdChatBubbleOutline className="lg:min-w-4 lg:min-h-4 mt-1" />
                        <p>5 Reviews | 16 Sessions</p>
                      </div>
                      <div className="my-3">
                        <div className="badge badge-ghost p-3 text-gray-600 font-semibold">
                          Web Programming
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  {/* Bio */}
                  <div>
                    <h2 className="text-xl font-semibold">About</h2>
                    <p className="text-gray-700">{profile.bio}</p>
                  </div>

                  {/* Links */}
                  <div>
                    <h2 className="text-xl font-semibold">Links</h2>
                    <div className="flex gap-2">
                      <button className="btn btn-blue">
                        <FaLinkedin />
                        LinkedIn
                      </button>
                      <button className="btn btn-blue">
                        <FaGithub />
                        Github
                      </button>
                      <button className="btn btn-blue">
                        <FaDownload />
                        Download Portfolio
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="bg-light-bg p-8 shadow-sm rounded-md outline outline-gray-100 h-fit">
                <div className="flex flex-col gap-5 items-center">
                  <div className="flex items-center">
                    <p className="text-3xl font-bold mr-2">₱2800</p>
                    <p>/ session</p>
                  </div>
                  <BookingComponent />
                  <NextAvailability />
                </div>
              </div>
            </div>

            <div class="divider py-4" />

            {/* Student Ratings */}
            <div className="mt-4">
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold">Ratings and Reviews</h2>
                <div className="flex items-center">
                  <span className="flex items-center gap-2">
                    <p className="font-bold text-xl">{averageRating}</p>
                    {renderStars(parseFloat(averageRating))}
                    <p>({totalReviews} reviews)</p>
                  </span>
                </div>
              </div>

              <div className="space-y-4 mt-8">
                {currentRatings.map((rating, index) => (
                  <div key={index} className="border-b border-gray-20 pb-4">
                    <div className="flex flex-col">
                      <div className="mb-4">
                        <p className="text-lg font-bold">{rating.nickname}</p>
                        <p className="text-sm mb-2">{rating.date}</p>
                        <div className="flex">{renderStars(rating.rating)}</div>
                      </div>
                      <p>{rating.review}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <button
                  onClick={prevPage}
                  className={`mx-1 px-3 py-1 rounded ${
                    currentPage === 1
                      ? "bg-gray-200 cursor-not-allowed"
                      : "bg-sky-500 hover:bg-sky-700 text-white"
                  }`}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                {[
                  ...Array(Math.ceil(ratings.length / ratingsPerPage)).keys(),
                ].map((number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number + 1)}
                    className={`mx-1 px-3 py-1 rounded ${
                      currentPage === number + 1
                        ? "bg-sky-700 text-white"
                        : "bg-sky-500 hover:bg-sky-700 text-white"
                    }`}
                  >
                    {number + 1}
                  </button>
                ))}
                <button
                  onClick={nextPage}
                  className={`mx-1 px-3 py-1 rounded ${
                    currentPage === Math.ceil(ratings.length / ratingsPerPage)
                      ? "bg-gray-200 cursor-not-allowed"
                      : "bg-sky-500 hover:bg-sky-700 text-white"
                  }`}
                  disabled={
                    currentPage === Math.ceil(ratings.length / ratingsPerPage)
                  }
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
}

export default Profile;
