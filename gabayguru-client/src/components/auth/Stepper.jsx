import React from 'react'

const Stepper = ({page}) => {

  return (
    <div>
    <ul className="steps steps-vertical lg:steps-horizontal my-10">
      <li
        className={`step cursor-pointer ${
          page >= 0 ? "step-neutral" : ""
        }`}
      >
        Basic Information
      </li>
      <li
        className={`step cursor-pointer ${
          page >= 1 ? "step-neutral" : ""
        }`}
      >
        Skills and <br /> Expertise
      </li>
      <li
        className={`step cursor-pointer ${
          page >= 2 ? "step-neutral" : ""
        }`}
      >
        Public Profile
      </li>
    </ul>
  </div>
  )
}

export default Stepper