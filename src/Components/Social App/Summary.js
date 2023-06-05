import React from "react";
import { useNavigate } from "react-router-dom";

const SocialSummary = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/social/userdetail");
  };
  return (
    <div className="px-3 py-4 h-100 ">
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="form-control h-auto p-0 bg-transparent border-0 mb-4">
          <label className="text-white mb-2 font-weight-600 font-18-100">
            Your self-summary
          </label>
          <textarea
            required
            className="auth-input-textarea border-grey"
            type="email"
            placeholder="Tell me about yourself!"
          />
        </div>
        <p className="font-15 line-height-140 font-weight-500 text-white">
          Note: It’s NOT allowed to post any inappropriate content, such as
          pornographic content
        </p>
        <div className="d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-between  mt-4 pt-3">
          <button className="green-btn-outline " onClick={() => goBack()}>
            Back
          </button>
          <button className="green-btn ">Next</button>
        </div>{" "}
      </form>
    </div>
  );
};

export default SocialSummary;
