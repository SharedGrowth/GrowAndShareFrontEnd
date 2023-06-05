import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CummunicationIcon from "../../assets/Images/Cummunication";
import SocialSearchIcon from "../../assets/Images/SocialSearch";
import FollowerListIcon from "../../assets/Images/FollowerList";
import SeeViewIcon from "../../assets/Images/SeeView";

const SocialSubscription = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/social/notice");
  };

  const [type, setType] = useState("");
  const handleChange = (event) => {
    setType(event.target.value);
  };
  return (
    <div className="max-width-521 min-width-521 pb-5 px-0 subscription">
      <form onSubmit={(e) => submitHandler(e)} className="px-4 mt-4 pt-3">
        <div className="self-summary border-0 rounded-4 p-4 d-flex flex-column gap-4 mb-4">
          <p className="font-weight-700 text-white">Subscription benefits:</p>
          <div className="d-flex gap-3 align-items-center">
            <CummunicationIcon />
            <p className="text-grey cut-text">Send unlimited messages</p>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <SocialSearchIcon />
            <p className="text-grey cut-text">Set advanced preferences</p>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <FollowerListIcon />
            <p className="text-grey cut-text">
              Get access to your followers list
            </p>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <SeeViewIcon />
            <p className="text-grey cut-text">See who viewed you and more</p>
          </div>
        </div>

        <div
          className="btn-group btn-group-toggle my-4 flex-column gap-4 w-100"
          data-toggle="buttons"
        >
          <label className="btn subscription-offer p-0 w-100 font-14 bg-grey active d-flex align-items-center">
            <input
              type="radio"
              name="options"
              id="Grams"
              autoComplete="off"
              readOnly
              checked={type === "Grams"}
              onChange={handleChange}
              value="Grams"
            />
            <div className=" p-4 w-100 d-flex justify-content-center align-items-center text-white">
              <p className="font-32-social font-weight-700 border-right border-grey pr-3">
                $45.00
              </p>
              <div className="px-3">
                <p className="font-18-social font-weight-700 mb-2">3 months</p>
                <p className="font-16-social font-weight-400 text-light-grey">
                  SAVE 19%
                </p>
              </div>
            </div>{" "}
          </label>
          <label className="btn subscription-offer position-relative p-0 w-100 font-14 bg-grey d-flex align-items-center">
            <input
              type="radio"
              name="options"
              id="Seeds"
              value="Seeds"
              autoComplete="off"
              checked={type === "Seeds"}
              onChange={handleChange}
            />
            <div className="p-4 w-100 d-flex justify-content-center align-items-center text-white">
              <p className="font-32-social font-weight-700 border-right border-grey pr-3">
                $70.99
              </p>
              <div className="px-3">
                <p className="font-18-social font-weight-700 mb-2">6 months</p>
                <p className="font-16-social font-weight-400 text-light-grey">
                  SAVE 19%
                </p>
              </div>
            </div>
            <div className="text-primary-green d-flex justify-content-center w-100 most-popular">
              <span className="font-12 font-weight-700">Most Papular</span>
            </div>
          </label>
          <label className="btn subscription-offer p-0 w-100 font-14 bg-grey d-flex align-items-center">
            <input
              type="radio"
              name="options"
              id="Seeds"
              value="Seeds"
              autoComplete="off"
              checked={type === "Seeds"}
              onChange={handleChange}
            />
            <div className="w-100 p-4 d-flex justify-content-center align-items-center text-white">
              <p className="font-32-social font-weight-700 border-right border-grey pr-3">
                $18.99
              </p>
              <div className="px-3">
                <p className="font-18-social font-weight-700">1 months</p>
              </div>
            </div>{" "}
          </label>
        </div>

        <div className="d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-center  mt-4 pt-3">
          <button className="green-btn w-max-content px-5">
            Subscribe Now
          </button>
        </div>
        <p className="font-14 font-weight-400 text-light-grey mt-3 text-center">
          Recurring billing, cancel anytime
        </p>
      </form>
      <p className="font-14 font-weight-400 text-light-grey mt-4 pt-2 px-4">
        Please strictly follow the community rules listed below. If you become
        aware of content with child sexual abuse imagery or human sex
        trafficking, please report it to us and to the appropriate authorities!
        Please strictly follow the community rules listed below. If you become
        aware of content with child sexual abuse imagery or human sex
        trafficking, please report it to us and to the appropriate authorities!{" "}
      </p>
    </div>
  );
};

export default SocialSubscription;
