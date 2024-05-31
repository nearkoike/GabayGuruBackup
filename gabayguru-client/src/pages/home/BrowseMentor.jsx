import React, { useState, useEffect } from "react";
import MentorCard from "../../components/home/MentorCard";

const categoryColors = {
  "Technology and IT": "bg-sky-500 text-white",
  "Business and Entrepreneurship": "bg-red-500 text-white",
  "Creative Arts and Design": "bg-orange-500 text-white",
};

const subcategoryColors = {
  "Technology and IT":
    "hover:bg-sky-500 hover:text-white border-sky-500 text-sky-500",
  "Business and Entrepreneurship":
    "hover:bg-red-500 hover:text-white border-red-500 text-red-500",
  "Creative Arts and Design":
    "hover:bg-orange-500 hover:text-white border-orange-500 text-orange-500",
};

const BrowseMentor = () => {
  const [mentors, setMentors] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedSorting, setSelectedSorting] = useState("ratingDesc");
  const [currentPage, setCurrentPage] = useState(1);
  const mentorsPerPage = 5;

  useEffect(() => {
    fetch("/mentors.json")
      .then((response) => response.json())
      .then((data) => setMentors(data))
      .catch((error) => console.error("Error fetching mentors:", error));
  }, []);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleSortingSelect = (sortingOption) =>
    setSelectedSorting(sortingOption);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category === "All" ? null : category);
    setSelectedSubcategory(null);
  };

  const handleSubcategorySelect = (subcategory) =>
    setSelectedSubcategory(subcategory);

  const filterMentorsByCategory = (mentor) =>
    (!selectedCategory || mentor.category === selectedCategory) &&
    (!selectedSubcategory || mentor.subcategory === selectedSubcategory);

  const sortedMentors = () => {
    let sorted = [...mentors];
    switch (selectedSorting) {
      case "ratingDesc":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "ratingAsc":
        sorted.sort((a, b) => a.rating - b.rating);
        break;
      case "alphabetical":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "alphabeticalDesc":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "priceLowToHigh":
        sorted.sort((a, b) => a.rate - b.rate);
        break;
      case "priceHighToLow":
        sorted.sort((a, b) => b.rate - a.rate);
        break;
      default:
        break;
    }
    return sorted.filter(
      (mentor) =>
        mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        filterMentorsByCategory(mentor)
    );
  };

  const categories = [
    { name: "All", subcategories: [] },
    {
      name: "Technology and IT",
      subcategories: [
        "Programming Fundamentals",
        "Web Development",
        "Data Science and Machine Learning",
        "Cybersecurity",
        "Mobile App Development",
        "Cloud Computing (e.g., AWS, Azure)",
        "Database Management (SQL)",
        "IT Project Management",
      ],
    },
    {
      name: "Business and Entrepreneurship",
      subcategories: [
        "Business Planning and Strategy",
        "Marketing and Digital Marketing",
        "Financial Management",
        "Start-up Fundamentals",
        "E-commerce and Online Retail",
        "Business Ethics and Sustainability",
        "Leadership and Management",
      ],
    },
    {
      name: "Creative Arts and Design",
      subcategories: [
        "Graphic Design (Adobe Photoshop, Illustrator)",
        "Video Editing and Production",
        "Photography",
        "Creative Writing",
        "Music Composition and Production",
        "3D Modeling and Animation",
        "UI/UX Design",
      ],
    },
  ];

  const totalPages = Math.ceil(sortedMentors().length / mentorsPerPage);
  const indexOfLastMentor = currentPage * mentorsPerPage;
  const indexOfFirstMentor = indexOfLastMentor - mentorsPerPage;
  const currentMentors = sortedMentors().slice(
    indexOfFirstMentor,
    indexOfLastMentor
  );

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  return (
    <div className="section-container mx-auto min-h-screen my-8 bg-light-bg">
      <div className="flex justify-between mb-4 items-center">
        {/* Search Box */}
        <input
          type="text"
          placeholder="Search mentor..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="border border-gray-400 rounded-md px-4 py-2 md:w-96"
        />
        {/* Sorting */}
        <div>
          <label htmlFor="sorting" className="mr-2 font-semibold">
            Sort by:
          </label>
          <select
            id="sorting"
            value={selectedSorting}
            onChange={(e) => handleSortingSelect(e.target.value)}
            className="border border-gray-400 rounded-md px-2 py-1"
          >
            <option value="ratingDesc">Rating: Highest to Lowest</option>
            <option value="ratingAsc">Rating: Lowest to Highest</option>
            <option value="alphabetical">A-Z</option>
            <option value="alphabeticalDesc">Z-A</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Categories */}
      <div className="flex my-8 space-x-3">
        {categories.map((category, index) => (
          <div key={index}>
            <button
              className={`font-bold py-2 px-4 rounded-full border border-gray-500 ${
                selectedCategory === category.name
                  ? categoryColors[category.name] || "bg-gray-300 text-white"
                  : "bg-white"
              }`}
              onClick={() => handleCategorySelect(category.name)}
            >
              {category.name}
            </button>
            {selectedCategory === category.name && (
              <div className="flex flex-wrap mt-4">
                {category.subcategories.map((subcategory, subIndex) => (
                  <button
                    key={subIndex}
                    className={`font-bold py-2 px-4 rounded-full mr-2 mb-2 border ${
                      selectedSubcategory === subcategory
                        ? categoryColors[category.name] ||
                          "bg-gray-300 text-white"
                        : subcategoryColors[category.name] || "bg-white"
                    }`}
                    onClick={() => handleSubcategorySelect(subcategory)}
                  >
                    {subcategory}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mentor Cards */}
      <div className="space-y-6">
        {currentMentors.map((item, i) => (
          <MentorCard key={i} mentor={item}/>
        ))}
      </div>
        
        {/* Pagination */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className={`mx-2 py-2 px-4 rounded ${
            currentPage === 1
              ? "bg-gray-200 text-gray-800 cursor-not-allowed"
              : "bg-sky-500 text-white"
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <button
            key={pageNumber + 1}
            onClick={() => handlePageChange(pageNumber + 1)}
            className={`mx-2 py-2 px-4 rounded ${
              currentPage === pageNumber + 1
                ? "bg-sky-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {pageNumber + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={`mx-2 py-2 px-4 rounded ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-800 cursor-not-allowed"
              : "bg-blue text-white"
          }`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

// Export the BrowseMentor component
export default BrowseMentor;
