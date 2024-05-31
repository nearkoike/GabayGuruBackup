import React, { useState } from "react";
import updateAction from "../state-actions/updateAction";
import { Controller, useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import { useNavigate } from "react-router-dom";
import Stepper from "../../../components/auth/Stepper";
import Select from "react-select";

const MentorSkills = () => {
  const navigate = useNavigate();
  const { register, control, handleSubmit } = useForm();
  const { state, actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    navigate("/auth/signup/mentor/3");
  };

  // For handling multiselect data
  const [selectedExpertise, setSelectedExpertise] = useState([]);

  const expertiseOptions = [
    { value: "tech", label: "Technology and IT" },
    { value: "business", label: "Business and Entrepreneurship" },
    { value: "arts", label: "Creative Arts and Design" },
  ];

  const techOptions = [
    { value: "programming", label: "Programming Fundamentals" },
    { value: "web", label: "Web Development" },
    { value: "data-science", label: "Data Science" },
    { value: "cybersecurity", label: "Cybersecurity" },
    { value: "mobile", label: "Mobile App Development" },
    { value: "cloud", label: "Cloud Computing" },
    { value: "database", label: "Database Management" },
    { value: "project-management", label: "IT Project Management" },
  ];

  const businessOptions = [
    { value: "planning", label: "Business Planning and Strategy" },
    { value: "marketing", label: "Marketing and Digital Marketing" },
    { value: "finance", label: "Financial Management" },
    { value: "startup-fundamentals", label: "Start-up Fundamentals" },
    { value: "e-commerce", label: "E-commerce and Online Retail" },
    { value: "business-ethics", label: "Business Ethics and Sustainability" },
    { value: "leadership", label: "Leadership and Management" },
  ];

  const artsOptions = [
    { value: "graphic-design", label: "Graphic Design" },
    { value: "video-editing", label: "Video Editing and Production" },
    { value: "photography", label: "Photography" },
    { value: "writing", label: "Creative Writing" },
    { value: "music", label: "Music Composition and Production" },
    { value: "3d-modeling", label: "3D Modeling and Animation" },
    { value: "ui-ux", label: "UI/UX Design" },
  ];

  return (
    <div>
      {/* Progress Bar */}
      <Stepper page={1} />

      {/* Form */}
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="form space-y-3">
          {/* Field/s of Expertise */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Field/s of Expertise</span>
            </label>
            <Controller
              control={control}
              defaultValue={expertiseOptions.map((c) => c.value)}
              name="expertise"
              render={({ field: { onChange, value, name, ref } }) => (
                <Select
                  inputRef={ref}
                  className="basic-multi-select text-left"
                  classNamePrefix="select"
                  options={expertiseOptions}
                  value={expertiseOptions.find((c) => c.value === value)}
                  onChange={(e) => {
                    onChange(e.map((c) => c.value));
                    setSelectedExpertise(
                      Array.isArray(e) ? e.map((c) => c.value) : []
                    );
                  }}
                  isMulti
                />
              )}
            />
          </div>

          {/* Tech Multiselect */}
          {selectedExpertise.includes("tech") && (
            <>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">
                    Select specializations under IT & Technology
                  </span>
                </label>
                <Controller
                  control={control}
                  defaultValue={techOptions.map((c) => c.value)}
                  name="techSpecialization"
                  render={({ field: { onChange, value, name, ref } }) => (
                    <Select
                      inputRef={ref}
                      className="basic-multi-select text-left"
                      classNamePrefix="select"
                      options={techOptions}
                      value={
                        selectedExpertise.includes("tech")
                          ? techOptions.find((c) => c.value === value)
                          : []
                      }
                      onChange={(e) => {
                        onChange(e.map((c) => c.value));
                      }}
                      isMulti
                    />
                  )}
                />
              </div>
            </>
          )}

          {!selectedExpertise.includes("tech") && (
            <>
              {/* Set techSpecialization to empty array or null here */}
              <input
                type="hidden"
                {...register("techSpecialization", { value: [], onChange: (e) => e.target.value = [], })}
              />
            </>
          )}

          {/* Business Multiselect */}
          {selectedExpertise.includes("business") && (
            <>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">
                    Select specializations under Business and Entrepreneurship
                  </span>
                </label>
                <Controller
                  control={control}
                  defaultValue={techOptions.map((c) => c.value)}
                  name="businessSpecialization"
                  render={({ field: { onChange, value, name, ref } }) => (
                    <Select
                      inputRef={ref}
                      className="basic-multi-select text-left"
                      classNamePrefix="select"
                      options={businessOptions}
                      value={
                        selectedExpertise.includes("business")
                          ? businessOptions.find((c) => c.value === value)
                          : []
                      }
                      onChange={(e) => {
                        onChange(e.map((c) => c.value));
                      }}
                      isMulti
                    />
                  )}
                />
              </div>
            </>
          )}

          {!selectedExpertise.includes("business") && (
            <>
              {/* Set techSpecialization to empty array or null here */}
              <input
                type="hidden"
                {...register("businessSpecialization", { value: [], onChange: (e) => e.target.value = [], })}
              />
            </>
          )}

          {/* Arts Multiselect */}
          {selectedExpertise.includes("arts") && (
            <>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">
                    Select specializations under Creative Arts & Design
                  </span>
                </label>
                <Controller
                  control={control}
                  defaultValue={techOptions.map((c) => c.value)}
                  name="artsSpecialization"
                  render={({ field: { onChange, value, name, ref } }) => (
                    <Select
                      inputRef={ref}
                      className="basic-multi-select text-left"
                      classNamePrefix="select"
                      options={artsOptions}
                      value={
                        selectedExpertise.includes("arts")
                          ? artsOptions.find((c) => c.value === value)
                          : []
                      }
                      onChange={(e) => {
                        onChange(e.map((c) => c.value));
                      }}
                      isMulti
                    />
                  )}
                />
              </div>
            </>
          )}

          {!selectedExpertise.includes("arts") && (
            <>
              {/* Set techSpecialization to empty array or null here */}
              <input
                type="hidden"
                {...register("artsSpecialization", { value: [], onChange: (e) => e.target.value = [],})}
              />
            </>
          )}

          {/* Years of Experience */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Years of Experience{" "}
                <span className="italic">- Minimum of 3</span>
              </span>
            </label>
            <input
              {...register("yearsExp")}
              defaultValue={state.yearsExp}
              type="number"
              id="yearsExp"
              name="yearsExp"
              placeholder="Years of Experience"
              className="input input-bordered"
              required
            />
          </div>

          {/* Professional Bio */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Professional Bio</span>
            </label>
            <textarea
              {...register("bio")}
              id="bio"
              name="bio"
              defaultValue={state.bio}
              className="textarea textarea-bordered"
              placeholder="Professional Bio (100 - 150 characters)"
            ></textarea>
          </div>

          {/* Desired Rate */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Desired Rate{" "}
                <span className="italic">
                  - Amount in Philippine Pesos that the student will be paying
                  for each requested session (per hour)
                </span>
              </span>
            </label>
            <input
              {...register("rate")}
              defaultValue={state.rate}
              id="rate"
              name="rate"
              type="number"
              placeholder="Desired Rate"
              className="input input-bordered"
              required
            />
          </div>

          <div className="flex align-center justify-center gap-3">
            <button
              className="btn mt-10 btn-neutral"
              onClick={() => navigate("/auth/signup/mentor/1")}
            >
              Previous
            </button>
            <input className="btn btn-blue mt-10" type="submit" value="Next" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MentorSkills;
