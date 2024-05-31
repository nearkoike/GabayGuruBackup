import { useStateMachine } from "little-state-machine";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import updateAction from "../state-actions/updateAction";
import clearAction from "../state-actions/clearAction";
import Stepper from "../../../components/auth/Stepper";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";

const MentorProfile = (props) => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  // Handle form events
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //console.log(watch("linkedinURL"));

  const { actions, state} = useStateMachine({ clearAction });

  const { createUser } = useAuth();
  const { errorMessage, setErrorMessage } = useState("");

  const onSubmit = (data) => {
    //actions.updateAction(data);
    const email = state.email;
    const password = state.password;
    const userCategory = "mentor";

    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const userInfo = {
          fname: state.firstName,
          lname: state.lastName,
          email: state.email,
          contactNum: state.contactNum,
          idURL: state.idURL,
          techSpecialization: state.techSpecialization,
          businessSpecialization: state.businessSpecialization,
          artsSpecialization: state.artsSpecialization,
          yearsExp: state.yearsExp,
          bio: state.bio,
          rate: state.rate,
          linkedInURL: data.linkedinURL,
          githubURL: data.githubURL,
          resumeURL: data.resumeURL,
          portfolioURL: data.portfolioURL,
          role: userCategory,
        };

        // Post in database
        axiosPublic
          .post("/users/mentor", userInfo)
          .then((response) => {
            //console.log(response);
            actions.clearAction(data);
            alert(
              "Sign Up successful! Kindly wait 1-3 working days for us to verify your account. Once done, we will be sending you a verification email."
            );
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="w-full">
      {/* Progress Bar */}
      <Stepper page={2} />

      {/* Form */}
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="form space-y-3">

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">LinkedIn URL</span>
            </label>
            <input
              {...register("linkedinURL")}
              defaultValue={state.linkedinURL}
              type="text"
              id="linkedinURL"
              name="linkedinURL"
              placeholder="LinkedIn URL"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Github Profile URL<span className="italic">- Optional</span>
              </span>
            </label>
            <input
              {...register("githubURL")}
              defaultValue={state.githubURL}
              id="githubURL"
              name="githubURL"
              type="text"
              placeholder="Github Profile URL"
              className="input input-bordered"
            />
          </div>

          {/* To change to File Upload */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Upload Resume</span>
            </label>
            <input
              {...register("resumeURL")}
              defaultValue={state.resumeURL}
              type="text"
              id="resumeURL"
              name="resumeURL"
              placeholder="Upload Resume"
              className="input input-bordered"
              required
            />
          </div>

          {/* To change to File Upload */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Upload Portfolio <span className="italic">- Optional</span>
              </span>
            </label>
            <input
              {...register("portfolioURL")}
              defaultValue={state.portfolioURL}
              id="portfolioURL"
              name="portfolioURL"
              type="text"
              placeholder="Upload Portfolio"
              className="input input-bordered"
            />
          </div>
        </div>

        <div className="form-control items-start">
          <label className="label cursor-pointer">
            <input
              type="checkbox"
              value="checked"
              className="checkbox"
              required
            />
            <label className="label">
              <span className="label-text">
                I have read and accepted the{" "}
                <Link to="/">
                  <span className="text-blue underline font-semibold">
                    Terms and Conditions
                  </span>
                </Link>
              </span>
            </label>
          </label>
        </div>

        <div className="flex align-center justify-center gap-3">
          <button
            className="btn mt-10 btn-neutral"
            onClick={() => navigate("/auth/signup/mentor/2")}
          >
            Previous
          </button>
          <input className="btn btn-blue mt-10" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default MentorProfile;
