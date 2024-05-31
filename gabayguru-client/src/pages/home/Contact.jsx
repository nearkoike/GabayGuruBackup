import React from "react";

const ContactUs = () => {
  return (
    <div class="bg-slate-100 dark:bg-gray-900">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-bold text-center text-black dark:text-white">
          Contact Us
        </h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-600 dark:text-gray-400 md:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <div class="bg-white shadow-xl  p-8 rounded-lg">
          {/* Forms */}
          <form action="#" className="bg-blue-400 space-y-8 ">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                className="input input-bordered"
                required
              />
            </div>


            <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Message</span>
            </label>
            <textarea
              id="bio"
              name="bio"
              className="textarea textarea-bordered"
            ></textarea>
          </div>
            
            <button
              type="submit"
              className="btn btn-info py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;