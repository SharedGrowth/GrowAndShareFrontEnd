import React from "react";
import { useNavigate } from "react-router-dom";
import userprofile from "../../assets/Images/authUserImage.svg";
import authSettings from "../../assets/Images/authSettings.svg";

const SocialProfile = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/subscription");
  };
  return (
    // <div className="auth-model">
    <div className=" py-4 px-0">
      <div className="self-summary text-white m-4 mb-5 p-3 d-flex flex-column align-items-center gap-4 position-relative">
        <img
          src={authSettings}
          alt=""
          className="settings-authprofile"
        />
        <img src={userprofile} alt="" className="rounded-3" />
        <h2 className="auth-model-heading px-4 text-left ">User</h2>
        <div className="d-flex gap-4">
          <span>Age: 20</span>
          <span>Gender: Women</span>
        </div>
        <p className="font-14 font-weight-500">St, Toronto, ON 2G8, Canada</p>
      </div>
      <div className="self-summary rounded-0 py-3 px-4">
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
          <select className="auth-input" required>
            <option value="">My Bio</option>
            <option value="option1">Option1</option>
            <option value="option2">Option2</option>
            <option value="option3">Option3</option>
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

        {/* <div className="d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-center  mt-4 pt-3">
            <button className="green-btn custom-w min-width-208">Next</button>
          </div> */}
      </form>
    </div>
    // </div>
  );
};

export default SocialProfile;
