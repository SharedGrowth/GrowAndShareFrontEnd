import React, { useState } from "react";
import UploadIcon from "../../assets/Images/Upload";
import AddIcon from "../../assets/Images/Add";
import { useNavigate } from "react-router-dom";

const HeadShop = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");

  const attachFile = (e) => {
    if (e.target.files) {
      setFileName(e.target.files[0]?.name);
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
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/cannabis");
  };
  return (
    <div className="max-width-792">
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="d-flex flex-md-row flex-column align-items-center gap-4 justify-content-between mb-4">
          <div className="form-control h-auto p-0 bg-transparent border-0">
            <label className="text-white mb-2 font-weight-600 font-18-100">
              Select Accessories
            </label>
            <select className="auth-input">
              <option defaultValue>- Select Option -</option>
              <option>Bongs</option>
              <option>Rigs</option>
              <option>Papers</option>
              <option>Vaporizers</option>
            </select>
          </div>
          <div className="form-control h-auto p-0 bg-transparent border-0">
            <label className="text-white mb-2 font-weight-600 font-18-100">
              Select Type
            </label>
            <select className="auth-input">
              <option defaultValue>- Select Type -</option>
              <option>Under $100</option>
              <option>Under $300</option>
              <option>Under $1000</option>
            </select>
          </div>
        </div>
        <div className="d-flex flex-md-row flex-column align-items-center gap-4 justify-content-between mb-4">
          <div className="form-control h-auto p-0 bg-transparent border-0">
            <label className="text-white mb-2 font-weight-600 font-18-100">
              Cost
            </label>
            <input
              type="number"
              className="auth-input"
              placeholder="$ Enter Cost"
            />
          </div>
          <div className="form-control h-auto p-0 bg-transparent border-0">
            <label className="text-white mb-2 font-weight-600 font-18-100">
              Brand Name
            </label>
            <input
              type="text"
              className="auth-input"
              placeholder="Enter Brand Name"
            />
          </div>
        </div>
        <div className="d-flex flex-md-row flex-column align-items-center gap-4 justify-content-between mb-4">
          <div className="form-control h-auto p-0 bg-transparent border-0">
            <label className="text-white mb-2 font-weight-600 font-18-100">
              Product Name
            </label>
            <input
              type="text"
              className="auth-input"
              placeholder="Enter Product Name"
            />
          </div>
          <div className="form-control h-auto p-0 bg-transparent border-0">
            <label className="text-white mb-2 font-weight-600 font-18-100">
              Select Size
            </label>
            <select className="auth-input">
              <option defaultValue>- Select Type -</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </div>

        <label className="text-white mb-2 font-weight-600 font-18-100">
          Upload Images
        </label>
        <div className="d-flex flex-md-row flex-column align-items-center gap-4 justify-content-between mb-4">
          <label className="upload-file cr-p">
            <input
              type="file"
              className="d-none"
              accept=".jpg, .jpeg, .png"
              onChange={(e) => attachFile(e)}
            />
            <div className="d-flex justify-content-center align-items-center h-100 w-100 gap-2">
              <UploadIcon />
              <p className="font-16 font-weight-500">
                {fileName === "" ? "Choose File / Drag & Drop Here" : fileName}
              </p>
            </div>
          </label>
          <button className="add-more bg-transparent border-white text-white gap-2">
            <AddIcon />
            Add More Strain
          </button>
        </div>
        <div className="d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-center  mt-5">
          <button
            className="green-btn-outline custom-w min-width-208"
            onClick={() => goBack()}
          >
            Back
          </button>
          <button className="green-btn custom-w min-width-208">Next</button>
        </div>
      </form>
      <p className="text-center text-grey mt-5 font-16">
        Terms of use | Privacy Policy
      </p>
    </div>
  );
};

export default HeadShop;
