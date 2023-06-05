import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SocialSignUp = () => {
  const [loginDetails, setloginDetails] = useState({
    email: "",
    password: "",
  });

  const formHandler = (e) => {
    const { name, value } = e.target;
    setloginDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/social/summary");
    console.log(loginDetails);
  };
  return (
    <div className="auth-model mx-4 my-5 ">
      <div className="max-width-521 min-width-521 px-3 py-4">
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="form-control h-auto p-0 bg-transparent border-0 mb-4">
            <label className="text-white mb-2 font-weight-600 font-18-100">
              What’s your email?
            </label>
            <input
              className="auth-input"
              type="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="form-control h-auto p-0 bg-transparent border-0 mb-4">
            <label className="text-white mb-2 font-weight-600 font-18-100">
              Choose a username
            </label>
            <input
              className="auth-input"
              type="text"
              placeholder="Username"
              required
            />
          </div>

          <div className="form-control h-auto p-0 bg-transparent border-0 mb-4">
            <label className="text-white mb-2 font-weight-600 font-18-100">
              Enter your password
            </label>
            <div className="auth-input d-flex align-items-center justify-content-between w-100">
              <input
                name="password"
                required
                type={"password"}
                placeholder="Password"
                className="password-input w-75"
                onChange={(e) => formHandler(e)}
              />
            </div>
          </div>

          <button className="green-btn">Next</button>
        </form>
      </div>
    </div>
  );
};

export default SocialSignUp;
