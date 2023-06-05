import React from "react";
import { useNavigate } from "react-router-dom";

const SocialUserBio = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/social/subscription");
  };
  return (
    <div className="max-width-521 min-width-521 py-4 px-0 ">
      <h2 className="font-weight-700 text-white font-24-social mb-4 px-4 text-left ">
        User
      </h2>
      <div className="self-summary rounded-0 px-4 py-3">
        <p className="font-18-100 font-weight-700 pb-2 text-white">
          My Self- summary
        </p>
        <p className="font-14 font-weight-400 text-grey pt-1">
          I’m a sub looking to be dominated
        </p>
      </div>
      <form onSubmit={(e) => submitHandler(e)} className="px-4 mt-4 pt-3">
        <label className="text-white mb-2 font-weight-600 font-18-100">
          My Bio
        </label>
        <div className="form-control h-auto p-0 bg-transparent border-0 mb-4">
          <select className="auth-input font-14" required>
            <option value="">My Bio</option>
            <option value="option1">Dom</option>
            <option value="option2">Master/Mistress</option>
            <option value="option3">Switch</option>
            <option value="option4">Sub</option>
            <option value="option5">Slave</option>
            <option value="option6">Fetishist(Legal only)</option>
            <option value="option7">Pet</option>
            <option value="option8">Open/Bull</option>
            <option value="option9">Vanilla</option>
            <option value="option10">Top</option>
            <option value="option11">Middle</option>
            <option value="option12">Unsure</option>
            <option value="option13">All-Rounder</option>
          </select>
        </div>
        <input
          className="auth-input mb-4"
          type="text"
          required
          placeholder="I’ve been kinky for"
        />
        <input
          className="auth-input mb-4"
          type="text"
          required
          placeholder="Height"
        />
        <input
          className="auth-input mb-4"
          type="text"
          required
          placeholder="Ethincity"
        />
        <input
          className="auth-input mb-4"
          type="text"
          required
          placeholder="Drinking"
        />
        <input
          className="auth-input mb-4"
          type="text"
          required
          placeholder="Smoking"
        />
        <input
          className="auth-input mb-4"
          type="text"
          required
          placeholder="My hobbies"
        />

        <label className="text-white mb-4 font-weight-600 font-18-100">
          Looking for
        </label>
        <div className="form-control h-auto p-0 bg-transparent border-0 ">
          <select
            className="auth-input mb-4"
            required
          >
            <option value="">I’M LOOKING FOR</option>
            <option value="option1">Man</option>
            <option value="option2">Women</option>
            <option value="option3">Couples</option>
            <option value="option4">Trans</option>
            <option value="option5">Other</option>
          </select>
        </div>
        <div className="form-control h-auto p-0 bg-transparent border-0 ">
          <select
            className="auth-input mb-4"
            required
          >
            <option value="">Age range</option>
            <option value="option1">26</option>
            <option value="option2">27</option>
            <option value="option3">28</option>
            <option value="option4">29</option>
            <option value="option5">30</option>
            <option value="option6">31</option>
            <option value="option7">32</option>
            <option value="option8">33</option>
            <option value="option9">34</option>
          </select>
        </div>

        <div className="d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-center  mt-4 pt-3">
          <button className="green-btn custom-w min-width-208">Next</button>
        </div>
      </form>
    </div>
  );
};

export default SocialUserBio;
