import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectedTick from "../../assets/Images/selectedTick";

const LookingFor = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/social/home");
  };
  const [sort, setSort] = useState("");
  const handleSort = (event) => {
    setSort(event.target.value);
  };
  return (
    <div className=" py-4 px-0 looking-for">
      <form onSubmit={(e) => submitHandler(e)} className=" mt-3 text-white">
        <div className="self-summary rounded-0">
          <div className="form-control h-auto p-0 bg-transparent border-0 ">
            <select
              className="auth-input font-14-100 text-white border-0 w-100 border-bottom rounded-0 border-06"
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
              className="auth-input font-14-100 text-white border-0 w-100 border-bottom rounded-0 border-06"
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
          <div className="form-control h-auto p-0 bg-transparent border-0 ">
            <select
              className="auth-input font-14-100 text-white border-0 w-100 border-bottom rounded-0 border-06"
              required
            >
              <option value="">Location</option>
              <option value="option1">United States</option>
              <option value="option2">Canada</option>
              <option value="option3">united Kingdom</option>
              <option value="option4">Australia</option>
              <option value="option5">Afghanistan</option>
              <option value="option6">Albania</option>
              <option value="option7">ALgeria</option>
            </select>
          </div>
        </div>
        <h3 className="font-16-social font-weight-700 text-white px-4 mt-4 pt-2 mb-3">
          SORT BY
        </h3>
        <div className="self-summary rounded-0">
          <div
            className="btn-group btn-group-toggle flex-column w-100"
            data-toggle="buttons"
          >
            <label className="btn subscription-offer p-0 w-100 auth-input font-14-100 border-0 w-100 border-bottom rounded-0 border-06">
              <input
                type="radio"
                name="options"
                id="lastonline"
                autoComplete="off"
                readOnly
                checked={sort === "Grams"}
                onChange={handleSort}
                value="Grams"
              />
              <div className="py-3 font-14-100 h-100 px-4 border-0 w-100 d-flex gap-2 align-items-center justify-content-between font-weight-500">
                LAST ONLINE
                <SelectedTick />
              </div>
            </label>
            <label className="btn subscription-offer p-0 w-100 auth-input font-14-100 border-0 w-100 border-bottom rounded-0 border-06">
              <input
                type="radio"
                name="options"
                id="Grams"
                autoComplete="off"
                readOnly
                checked={sort === "newest"}
                onChange={handleSort}
                value="Grams"
              />
              <div className="py-3 font-14-100 h-100 px-4 border-0 w-100 d-flex gap-2 align-items-center justify-content-between font-weight-500">
                NEWEST
                <SelectedTick />
              </div>
            </label>
          </div>
        </div>
        <p className="font-18 font-weight-500 text-white text-center mt-4 pt-2">
          Advance filters (Premium members only)
        </p>
        <div className="d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-center  pt-3">
          <button className="green-btn w-50 w-max-content mb-4">
            Upgrade Now
          </button>
        </div>
        <div className="self-summary rounded-0">
          <div
            className="btn-group btn-group-toggle flex-column w-100"
            data-toggle="buttons-1"
          >
            <label className="btn subscription-offer p-0 w-100 auth-input font-14-100 border-0 w-100 border-bottom rounded-0 border-06">
              <input type="checkbox" name="options" id="lastonline" readOnly />
              <div className="py-3 font-14 mb px-4 border-0 w-100 d-flex gap-2 align-items-center justify-content-between font-weight-500">
                My match’s role
                <svg
                  width={12}
                  height={15}
                  viewBox="0 0 12 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_4_585)">
                    <path
                      opacity="0.3"
                      d="M1.5 13.5716H10.5V6.42871H1.5V13.5716ZM6 8.57157C6.825 8.57157 7.5 9.21443 7.5 10.0001C7.5 10.7859 6.825 11.4287 6 11.4287C5.175 11.4287 4.5 10.7859 4.5 10.0001C4.5 9.21443 5.175 8.57157 6 8.57157Z"
                      fill="#5D8B2F"
                    />
                    <path
                      d="M10.5 5H9.75V3.57143C9.75 1.6 8.07 0 6 0C3.93 0 2.25 1.6 2.25 3.57143V5H1.5C0.675 5 0 5.64286 0 6.42857V13.5714C0 14.3571 0.675 15 1.5 15H10.5C11.325 15 12 14.3571 12 13.5714V6.42857C12 5.64286 11.325 5 10.5 5ZM3.75 3.57143C3.75 2.38571 4.755 1.42857 6 1.42857C7.245 1.42857 8.25 2.38571 8.25 3.57143V5H3.75V3.57143ZM10.5 13.5714H1.5V6.42857H10.5V13.5714ZM6 11.4286C6.825 11.4286 7.5 10.7857 7.5 10C7.5 9.21429 6.825 8.57143 6 8.57143C5.175 8.57143 4.5 9.21429 4.5 10C4.5 10.7857 5.175 11.4286 6 11.4286Z"
                      fill="#5D8B2F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4_585">
                      <rect width={12} height={15} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </label>
            <label className="btn subscription-offer p-0 w-100 auth-input font-14-100 border-0 w-100 border-bottom rounded-0 border-06">
              <input
                type="checkbox"
                name="options"
                autoComplete="off"
                readOnly
              />
              <div className="py-3 font-14 mb px-4 border-0 w-100 d-flex gap-2 align-items-center justify-content-between font-weight-500">
                Photo only
                <svg
                  width={12}
                  height={15}
                  viewBox="0 0 12 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_4_585)">
                    <path
                      opacity="0.3"
                      d="M1.5 13.5716H10.5V6.42871H1.5V13.5716ZM6 8.57157C6.825 8.57157 7.5 9.21443 7.5 10.0001C7.5 10.7859 6.825 11.4287 6 11.4287C5.175 11.4287 4.5 10.7859 4.5 10.0001C4.5 9.21443 5.175 8.57157 6 8.57157Z"
                      fill="#5D8B2F"
                    />
                    <path
                      d="M10.5 5H9.75V3.57143C9.75 1.6 8.07 0 6 0C3.93 0 2.25 1.6 2.25 3.57143V5H1.5C0.675 5 0 5.64286 0 6.42857V13.5714C0 14.3571 0.675 15 1.5 15H10.5C11.325 15 12 14.3571 12 13.5714V6.42857C12 5.64286 11.325 5 10.5 5ZM3.75 3.57143C3.75 2.38571 4.755 1.42857 6 1.42857C7.245 1.42857 8.25 2.38571 8.25 3.57143V5H3.75V3.57143ZM10.5 13.5714H1.5V6.42857H10.5V13.5714ZM6 11.4286C6.825 11.4286 7.5 10.7857 7.5 10C7.5 9.21429 6.825 8.57143 6 8.57143C5.175 8.57143 4.5 9.21429 4.5 10C4.5 10.7857 5.175 11.4286 6 11.4286Z"
                      fill="#5D8B2F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4_585">
                      <rect width={12} height={15} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </label>
          </div>
        </div>

        <div className="d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-center  mt-4 pt-3">
          <button className="green-btn w-75 w-max-content">Search</button>
        </div>
      </form>
    </div>
  );
};

export default LookingFor;
