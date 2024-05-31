import { useStateMachine } from "little-state-machine";
import React from "react";
import { useForm } from "react-hook-form";
import updateAction from "../state-actions/updateAction";
import { useNavigate } from "react-router-dom";
import Stepper from "../../../components/auth/Stepper";

const MentorInformation = (props) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    navigate("/auth/signup/mentor/2");
  };

  return (
    <div className="w-full">
      {/* Progress Bar */}
      <Stepper page={0}/>

      {/* Form */}
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="form space-y-3">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              {...register("firstName")}
              defaultValue={state.firstName}
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              {...register("lastName")}
              defaultValue={state.lastName}
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              {...register("email")}
              defaultValue={state.email}
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Contact Number</span>
            </label>
            <input
              {...register("contactNum")}
              defaultValue={state.contactNum}
              type="text"
              id="contactNum"
              name="contactNum"
              placeholder="+63"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password")}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
          </div>

          {/* To change to File Upload */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">URL of ID Photo</span>
            </label>
            <input
              {...register("idURL")}
              defaultValue={state.idURL}
              type="text"
              id="idURL"
              name="idURL"
              placeholder="Photo of ID URL"
              className="input input-bordered"
              required
            />
          </div>

          <div className="flex align-center justify-center">
            <input className="btn btn-blue mt-10" type="submit" value="Next" />
          </div>
          
        </div>
      </form>
    </div>
  );
};

export default MentorInformation;
