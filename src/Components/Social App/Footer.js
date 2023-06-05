import React, { useState } from "react";
import ColorPlateIcon from "../../assets/Images/ColorPlate";
import UserStartIcon from "../../assets/Images/UserStart";
import SocialFilterIcon from "../../assets/Images/SocialFilter";
import { useLocation } from "react-router-dom";

const SocialFooter = () => {
  const [type, setType] = useState("sortbyvotes");
  const handleChange = (event) => {
    setType(event.target.value);
  };
  const location = useLocation();
  return (
    <div
      className={`${
        location.pathname.includes("/social/posts")
          ? "post-footer"
          : "social-footer"
      } ${
        location.pathname.includes("/social/match") ? "d-none" : ""
      }  d-sm-none`}
    >
      {!location.pathname.includes("/social/posts") ? (
        <>
          <div className="d-flex flex-column gap-2 align-items-center h-100">
            <ColorPlateIcon />
            <p className="font-12 font-weight-700">Colors</p>
          </div>
          <div className="d-flex flex-column gap-2 align-items-center h-100">
            <UserStartIcon />
            <p className="font-12 font-weight-700">Hobbies</p>
          </div>
          <div className="d-flex flex-column gap-2 align-items-center h-100">
            <SocialFilterIcon />
            <p className="font-12 font-weight-700">Filter</p>
          </div>
        </>
      ) : (
        <div
          className="btn-group btn-group-toggle h-100 rounded-0 w-100"
          data-toggle="buttons"
        >
          <label className="btn font-14 bg-grey active d-flex align-items-center rounded-0">
            <input
              type="radio"
              name="options"
              id="sortbyvotes"
              autoComplete="off"
              readOnly
              checked={type === "sortbyvotes"}
              onChange={handleChange}
              value="sortbyvotes"
            />
            <span className="">Sort by votes</span>
          </label>
          <label className="btn font-14 bg-grey d-flex align-items-center rounded-0">
            <input
              type="radio"
              name="options"
              id="newestfirst"
              value="newestfirst"
              autoComplete="off"
              checked={type === "newestfirst"}
              onChange={handleChange}
            />
            <span className="">Newest first</span>
          </label>
          <label className="btn font-14 bg-grey d-flex align-items-center rounded-0">
            <input
              type="radio"
              name="options"
              id="mymoments"
              value="mymoments"
              autoComplete="off"
              checked={type === "mymoments"}
              onChange={handleChange}
            />
            <span className="">My moments</span>
          </label>
        </div>
      )}
    </div>
  );
};

export default SocialFooter;
