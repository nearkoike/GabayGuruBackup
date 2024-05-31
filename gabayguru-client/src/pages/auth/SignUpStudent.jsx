import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";

const SignUpStudent = () => {
  // Handle form events
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();

  const { createUser } = useAuth();
  const { errorMessage, setErrorMessage } = useState("");

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    const userCategory = "student";

    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const userInfo = {
          fname: data.firstName,
          lname: data.lastName,
          email: data.email,
          contactNum: data.contactNum,
          idURL: data.idURL,
          role: userCategory,
        };

        // Post in database
        axiosPublic
          .post("/users", userInfo)
          .then((response) => {
            //console.log(response);
            alert("Sign Up successful!");
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
    <div className="card-body my-5 items-center text-center">
      <h2 className="card-title text-4xl font-bold">Sign Up</h2>
      <p>
        Join our community of learners and mentors by creating your account
        today.
      </p>

      <form
        className="form w-full space-y-5 mt-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered"
            id="firstName"
            name="firstName"
            {...register("firstName")}
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered"
            id="lastName"
            name="lastName"
            {...register("lastName")}
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email Address</span>
          </label>
          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered"
            id="email"
            name="email"
            {...register("email")}
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Contact Number</span>
          </label>
          <input
            type="text"
            placeholder="+63"
            className="input input-bordered"
            id="contactNum"
            name="contactNum"
            {...register("contactNum")}
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered"
            id="password"
            name="password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-start text-red-600 mt-2 text-xs">
              {errors.password.message}
            </p>
          )}
        </div>

         {/* To change to File Upload */}
         <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo of ID URL</span>
            </label>
            <input
              {...register("idURL")}
              type="text"
              id="idURL"
              name="idURL"
              placeholder="Photo of ID URL"
              className="input input-bordered"
              required
            />
          </div>

        <div className="form-control">
          <label className="label cursor-pointer self-start">
            <input type="checkbox" value="checked" className="checkbox" />
            <label className="label self-start">
              <span className="label-text self-start">
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

        {/* Error */}
        {errorMessage ? (
          <p className="text-start text-red-600 mt-2 text-xs">{errorMessage}</p>
        ) : (
          ""
        )}

        <div className="flex align-center justify-center">
          <input className="btn btn-blue mt-10" type="submit" value="Sign Up" />
        </div>
      </form>
    </div>
  );
};

export default SignUpStudent;
