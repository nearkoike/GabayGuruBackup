import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const BookingComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [selectedTime, setSelectedTime] = useState("12:00 AM");
  const [mentor, setMentor] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("");
  const [receipt, setReceipt] = useState(null);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [walletBalance, setWalletBalance] = useState(2000.0); // Example balance

  useEffect(() => {
    const fetchMentorData = async () => {
      const response = await fetch("/mentor.json");
      const data = await response.json();
      setMentor(data);
    };
    fetchMentorData();
  }, []);

  const openModal = () => {
    setIsOpen(true);
    setStep(1);
  };
  const closeModal = () => {
    setIsOpen(false);
    setReceipt(null);
  };
  const nextStep = () => {
    if (step === 3) {
      handleConfirmation();
    } else {
      setStep(step + 1);
    }
  };
  const previousStep = () => {
    setStep(step - 1);
  };
  const handleDateChange = (event) => setSelectedDate(event.target.value);
  const handleTimeChange = (event) => setSelectedTime(event.target.value);
  const handlePaymentMethodChange = (event) =>
    setPaymentMethod(event.target.value);
  const handleReceiptChange = (event) => setReceipt(event.target.files[0]);
  const handleConfirmation = () => {
    setConfirmationOpen(true);
  };

  const handleTopUp = () => {
    alert("Top Up functionality is not implemented yet.");
  };

  const closeConfirmationAndMainModal = () => {
    setConfirmationOpen(false);
    setIsOpen(false);
  };

  return (
    <div>
      <button className="btn bg-sky-500" onClick={openModal}>
        Book an Appointment
      </button>
      {isOpen && (
        <div className="modal modal-open">
          <div className="modal-box md:min-w-96 md:min-h-[500px] flex flex-col">
            {step === 1 && (
              <>
                <h3 className="font-bold text-lg">Choose Date and Time</h3>

                <div className="form my-2">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Select Date:</span>
                    </label>
                    <input
                      type="date"
                      className="input input-bordered"
                      value={selectedDate}
                      onChange={handleDateChange}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Select Time:</span>
                    </label>
                    <select
                      className="select select-bordered"
                      value={selectedTime}
                      onChange={handleTimeChange}
                    >
                      <option value="12:00 AM">12:00 AM - 1:00 AM</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                </div>

                <div className="modal-action mt-auto flex justify-between">
                  <button
                    className="btn bg-red-500 hover:bg-red-700"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn bg-sky-500 hover:bg-sky-700"
                    onClick={nextStep}
                  >
                    Next
                  </button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    Message for the Mentor
                  </h3>
                  <p>
                    Write a message describing your mentorship goals and needs.
                    This will be used by the mentor to assess if you’re fit for
                    them.
                  </p>
                </div>

                <div className="form h-64 my-4">
                  <div className="form-control h-full">
                    <textarea
                      id="message"
                      name="message"
                      className="textarea textarea-bordered h-full"
                      placeholder=""
                    ></textarea>
                  </div>
                </div>

                <div className="modal-action mt-auto flex justify-between">
                  <button
                    className="btn bg-red-500 hover:bg-red-700"
                    onClick={previousStep}
                  >
                    Back
                  </button>
                  <button className="btn btn-blue" onClick={nextStep}>
                    Next
                  </button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div className="w-full bg-sky-100 flex flex-col align-center p-4 my-2 outline outline-sky-200 rounded-md">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-lg font-semibold">
                      Your e-wallet contains:
                    </div>
                    <div className="text-2xl font-bold text-black">
                      P{walletBalance.toFixed(2)}
                    </div>
                  </div>
                  <button
                    className="btn bg-sky-500 hover:bg-sky-700 w-full mb-4"
                    onClick={handleTopUp}
                  >
                    Top Up
                  </button>

                  <h3 className="font-bold text-lg">Your Billing:</h3>

                  <div className="w-full bg-white flex flex-col align-center pl-4 my-2 outline outline-sky-200 rounded-md p-2">
                    <div className="flex justify-between">
                      <p className="font-semibold">Item</p>
                      <p className="font-semibold">Price</p>
                    </div>
                    <div className="flex justify-between">
                      <p>1 Hour Mentorship Session</p>
                      <p>P1,000.00</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      Juan Dela Cruz <br />
                      October 10, 2023 <br />
                      1:00pm - 2:00pm
                    </p>
                    <div className="flex justify-between mt-2">
                      <p className="font-semibold">Total:</p>
                      <p className="font-semibold">P1,000.00</p>
                    </div>
                  </div>
                </div>
                <div className="modal-action mt-auto flex justify-between">
                  <button
                    className="btn bg-red-500 hover:bg-red-700"
                    onClick={previousStep}
                  >
                    Previous Step
                  </button>
                  <button
                    className="btn bg-sky-500 hover:bg-sky-700"
                    onClick={nextStep}
                  >
                    Pay Now
                  </button>
                </div>
              </>
            )}

            {confirmationOpen && (
              <div className="modal modal-open">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">
                    Transaction Confirmation
                  </h3>
                  <p>
                    Your booking request has been successfully submitted. Please
                    await a notification confirming the details.
                  </p>
                  <div className="modal-action">
                    <button
                      className="btn bg-sky-500 hover:bg-sky-700"
                      onClick={closeConfirmationAndMainModal}
                    >
                      I Understand
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingComponent;
