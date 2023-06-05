import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SocialNotice = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/social/uploadpicture");
  };

  return (
    <div className=" py-4 px-4">
      <h3 className="font-24-social font-weight-700 text-center text-white mb-4 pb-3">
        Notice
      </h3>
      <p className="font-16-social text-white mb-3">
        Online Dating Safety Awareness
      </p>
      <p className="font-14 font-weight-400 text-grey ">
        Please note that we don't conduct a criminal background screening on
        each member. Please check out the safety tips below before sharing
        information or meeting in person.
      </p>
      <p className="text-primary-green font-14 font-weight-400">
        Online Dating Safety Awareness
      </p>

      <p className="font-16-social text-white mb-3 mt-4 pt-2">
        Community Rules
      </p>
      <p className="font-14 font-weight-400 text-grey ">
        Please strictly follow the community rules listed below. If you become
        aware of content with child sexual abuse imagery or human sex
        trafficking, please report it to us and to the appropriate authorities!
        Please strictly follow the community rules listed below. If you become
        aware of content with child sexual abuse imagery or human sex
        trafficking, please report it to us and to the appropriate authorities!
      </p>
      <div className="text-white p-0 font-14 font-weight-400 pt-3 d-flex flex-column gap-1">
        <p>
          1, DON'T UPLOAD nude, minimally clothed or sexually suggestive photos.
        </p>
        <p>
          2, DON'T UPLOAD content that depicts or are functionally sexual
          aids,illegal sexual themes and fetishes.
        </p>
        <p>
          3, DON'T PROMOTE sex-related entertainment, escort services or other
          services that may be interpreted as providing sexual acts in exchange
          for compensation.
        </p>
      </div>
      <p className="text-white font-14 font-weight-400 pt-3">
        For more details, you can visit our
        <Link
          to={"/terms"}
          className="text-decoration-underline text-primary-green ps-1"
        >
          Terms of Services
        </Link>
      </p>
      <button className="green-btn mt-4" onClick={(e) => submitHandler(e)}>
        OK, I GOT IT
      </button>
    </div>
  );
};

export default SocialNotice;
