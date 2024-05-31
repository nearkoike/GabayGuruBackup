import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";

const SignInUser = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { login } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const axiosPublic = useAxiosPublic();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    login(email, password)
      .then((userCredential) => {
        // Signed in
        const userInfo = {
          fname: data.firstName,
          lname: data.lastName,
          email: data.email,
          contactNum: data.contactNum,
        };
        
        // Post to database
        axiosPublic.get(`/users/${email}`)
        .then((response) => {
          // User already exists, navigate to the desired page
          navigate(from, {replace: true});
        })
        .catch((error) => {
          // User does not exist, redirect to the sign-up page
          alert("Account does not exist. Please register first.")
          navigate('/auth/signup', {replace: true});
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage("Incorrect credentials");
      });
  };

  return (
    <div className="card-body my-5 items-center text-center">
      <h2 className="card-title text-4xl font-bold">Sign In</h2>

      <form className="form w-full space-y-5" onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered"
            {...register("email")}
            required
          />
        </div>

        {/* Password */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered"
            {...register("password")}
            required
          />
        </div>

        <input
          type="submit"
          value="Sign In"
          className="btn btn-blue mt-8 w-full"
        />
      </form>

      {/* Error */}
      {errorMessage ? (
        <p className="text-start text-red-600 mt-2 text-s">{errorMessage}</p>
      ) : (
        ""
      )}

      <div className="card-actions items-center my-10 w-full flex-col">
        <p>
          Don't have an account yet?{" "}
          <span className="text-blue font-bold">
            <Link to="/auth/signup">Sign Up</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignInUser;
