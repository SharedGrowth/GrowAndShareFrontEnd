import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import socialuser from "../../assets/Images/social-user.svg";
const SocialUploadPicture = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/social/profile");
  };

  const [file, setFile] = useState(socialuser);

  const attachFile = (e) => {
    if (e.target.files) {
      let imageFile = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onloadend = function (e) {
        var myImage = new Image();
        myImage.src = e.target.result;
        setFile(myImage.src);
        return myImage;
      };
    }
  };
  return (
    <div className="py-4 px-4">
      <h3 className="font-24-social font-weight-700 text-center text-white mb-4 pb-3">
        Notice
      </h3>
      <p className="font-14 font-weight-400 text-primary-red mb-3">
        <span className="font-weight-700">Warning:</span> The Following
        inappropriate photos are strictly prohibited and will be removed.
      </p>

      <div className="text-white p-0 font-14 font-weight-400 pt-3">
        <p>1. The person in the photo is nude or minimally clothed.</p>
        <p>2, Photos that contain sexually suggestive poses.</p>
        <p>3, Photos that contain minors, sexual aids, or illegalfetishes.</p>
        <p>4, Photos that contain lewd or profane content.</p>
        <p>
          5, Any other inappropriate content/photos defined in our Terms of
          Service.
        </p>
      </div>

      <div className="d-flex justify-content-center align-items-center my-5">
        <img src={file} alt="social-user-img" />
      </div>
      <button className="green-btn my-4">User camera</button>
      <label className="green-btn w-100 height-56 cr-p d-flex justify-content-center align-items-center">
        <input
          type="file"
          className="d-none"
          accept=".jpg, .jpeg, .png"
          onChange={(e) => attachFile(e)}
        />
        <span>Upload Pick from gallery</span>
      </label>
    </div>
  );
};

export default SocialUploadPicture;
