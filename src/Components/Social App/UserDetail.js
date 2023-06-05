import React from "react";
import { useNavigate } from "react-router-dom";

const SocialUserDetail = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/social/userbio");
  };
  return (
    <div className="max-width-521 min-width-521 px-3 py-4 ">
      <h2 className="font-weight-700 text-white text-center font-24-social mb-4">
        User
      </h2>
      <p className="font-14 font-weight-500 text-primary-red pb-4 mb-2">
        <span className="font-weight-700">Warning:</span> you must be at atleast
        18 years old to sign up for app.
      </p>
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="form-control h-auto p-0 bg-transparent border-0 mb-4">
          <label className="text-white mb-2 font-weight-600 font-18-100">
            Your Age
          </label>
          <select className="auth-input" required>
            <option value="">Select an option</option>
            <option value="option1">26</option>
            <option value="option2">27</option>
            <option value="option3">28</option>
            <option value="option1">29</option>
            <option value="option2">30</option>
            <option value="option3">31</option>
            <option value="option1">32</option>
            <option value="option2">33</option>
            <option value="option3">34</option>
          </select>
        </div>
        <div className="form-control h-auto p-0 bg-transparent border-0 mb-4">
          <label className="text-white mb-2 font-weight-600 font-18-100">
            Your Role
          </label>
          <select className="auth-input" required>
            <option value="">Select an option</option>
            <option value="option1">Dom</option>
            <option value="option2">Master/Mistress</option>
            <option value="option3">Switch</option>
            <option value="option3">Sub</option>
            <option value="option3">Slave</option>
            <option value="option3">Fetishist(Legal only)</option>
            <option value="option3">Pet</option>
            <option value="option3">Open/Bull</option>
            <option value="option3">Vanilla</option>
            <option value="option3">Top</option>
            <option value="option3">Middle</option>
            <option value="option3">Unsure</option>
            <option value="option3">All-Rounder</option>
            <option value="option3">Pet</option>
            <option value="option3">Bottom</option>
            <option value="option3">Sadist</option>
            <option value="option3">Masochist</option>
            <option value="option3">Primal</option>
            <option value="option3">Open/Bull</option>
            <option value="option3">Vanilla</option>
          </select>
        </div>
        <div className="form-control h-auto p-0 bg-transparent border-0 mb-4">
          <label className="text-white mb-2 font-weight-600 font-18-100">
            Your Location
          </label>
          <select className="auth-input" required>
            <option value="">Type Location</option>
            <option value="option1">United States</option>
            <option value="option2">Canada</option>
            <option value="option3">united Kingdom</option>
            <option value="option4">Australia</option>
            <option value="option5">Afghanistan</option>
            <option value="option6">Albania</option>
            <option value="option7">ALgeria</option>
          </select>
        </div>
        <div className="d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-center  mt-4 pt-3">
          <button className="green-btn custom-w min-width-208">Continue</button>
        </div>
      </form>
    </div>
  );
};

export default SocialUserDetail;
