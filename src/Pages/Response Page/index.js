import React, { useState } from "react";
import UploadIcon from "../../assets/Images/Upload";
import { useNavigate } from "react-router-dom";
import AddIcon from "../../assets/Images/Add";
import { useEffect } from "react";
import { PostResponse } from "../../Api";

const ResponsivePage = () => {
  const [myArray, setMyArray] = useState([]);
  const [addMorebtn, setAddMoreBtn] = useState(false);
  const [id, setId] = useState();
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState({
    userId: "",
    strainType: "",
    grownType: "",
    photo: "",
  });

  useEffect(() => {
    const currentUser = localStorage.getItem("userdata");
    setResponse((prevState) => ({
      ...prevState,
      userId: JSON.parse(currentUser)._id,
    }));
    setId(JSON.parse(currentUser)._id);
  }, []);

  const attachFile = (e) => {
    if (e.target.files) {
      let imageFile = e.target.files[0];
      setResponse((prevState) => ({
        ...prevState,
        photo: imageFile,
      }));
      setFile(imageFile.name);
    }
  };

  const formHandler = (e) => {
    const { name, value } = e.target;
    setResponse((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  // const data = [
  //   {
  //     userId: "647dac834cf8185f7467eb3c",
  //     strainType: "Sativa",
  //     grownType: "Grown",
  //     photo: response.photo,
  //   },
  // ];
  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();

    if (addMorebtn) {
      setMyArray((prev) => [...prev, response]);
      myArray.forEach((mapData) => {
        console.log(mapData);
        data.append("userId", id);
        data.append("strainType", mapData.strainType);
        data.append("grownType", mapData.grownType);
        data.append("photo", mapData.photo);
      });
    } else {
      data.append("userId", id);
      data.append("strainType", response.strainType);
      data.append("grownType", response.grownType);
      data.append("photo", response.photo);
    }

    PostResponse(data);
  };

  const addMore = () => {
    setAddMoreBtn(true);
    setMyArray((prev) => [...prev, response]);
    setResponse({
      strainType: "",
      grownType: "",
      photo: "",
    });
    setFile(null);
  };
  return (
    <div className="max-width-521">
      <h2 className="auth-model-heading mb-4 pb-3">
        We’ll help you get started based on your response
      </h2>
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="form-control h-auto p-0 bg-transparent border-0 mb-4">
          <label className="text-white mb-2 font-weight-600 font-18-100">
            Which Strain type do you have?
          </label>
          <select
            className="auth-input"
            required
            name="strainType"
            onChange={(e) => formHandler(e)}
            value={response.strainType}
          >
            <option value={""}>Strain Type</option>
            <option value={"Sativa"}>Sativa</option>
            <option value={"Indica"}>Indica</option>
            <option value={"Hybrid"}>Hybrid</option>
            <option value={"CBD"}>CBD</option>
          </select>
        </div>

        <div className="form-control h-auto p-0 bg-transparent border-0 mb-4">
          <label className="text-white mb-2 font-weight-600 font-18-100">
            Grown or Purchased?
          </label>
          <select
            className="auth-input"
            required
            name="grownType"
            onChange={(e) => formHandler(e)}
            value={response.grownType}
          >
            <option value={""}>- Select Option -</option>
            <option value={"Dispensary"}>Dispensary</option>
            <option value={"Grown"}>Grown</option>
          </select>
        </div>
        <label className="upload-file cr-p w-100 mb-4">
          <input
            type="file"
            className="d-none"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => attachFile(e)}
          />
          <div className="d-flex justify-content-center align-items-center h-100 w-100 gap-2">
            <UploadIcon />
            <p className="font-16 font-weight-500">
              {file === null ? "Choose File / Drag & Drop Here" : file}
            </p>
          </div>
        </label>
        <button
          className="add-more bg-transparent border-white text-white gap-2"
          onClick={() => addMore()}
          type="button"
        >
          <AddIcon />
          Add More
        </button>
        <div className="d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-between  mt-4 pt-3">
          <button
            className="green-btn-outline "
            onClick={() => goBack()}
            type="button"
          >
            Back
          </button>
          <button className="green-btn " type="submit">
            Next
          </button>
        </div>
      </form>
      <p className="text-center text-grey mt-5 font-16">
        Terms of use | Privacy Policy
      </p>
    </div>
  );
};

export default ResponsivePage;
