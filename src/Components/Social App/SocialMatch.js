import React, { useState, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";
import RejectIcon from "../../assets/Images/rejectIcon";
import ReloadIcon from "../../assets/Images/reloadIcon";
import LikeIconSocial from "../../assets/Images/likeIconSocial";
import PowerIcon from "../../assets/Images/powerIcon";
import SocialFilterIcon from "../../assets/Images/SocialFilter";
import img1 from "../../assets/Images/match/img1.jpg";
import img2 from "../../assets/Images/match/img2.jpg";
import img3 from "../../assets/Images/match/img3.jpg";
import img4 from "../../assets/Images/match/img4.jpg";
import img5 from "../../assets/Images/match/img5.jpg";
import img6 from "../../assets/Images/match/img6.jpg";
import MultiRangeSlider from "multi-range-slider-react";
import LocationIcon from "../../assets/Images/Location";
import CrossBorderIcon from "../../assets/Images/CrossBorder";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const db = [
  {
    age: "20",
    cannabisConsumption: "Daily",
    address: "18, New York, NY, USA",
    name: "Richard Hendricks",
    url: img1,
  },
  {
    age: "20",
    cannabisConsumption: "Weekly",
    address: "18, New York, NY, USA",
    name: "Erlich Bachman",
    url: img2,
  },
  {
    age: "20",
    cannabisConsumption: "Daily",
    address: "18, New York, NY, USA",
    name: "Monica Hall",
    url: img3,
  },
  {
    age: "20",
    cannabisConsumption: "Monthly",
    address: "18, New York, NY, USA",
    name: "Jared Dunn",
    url: img4,
  },
  {
    age: "20",
    cannabisConsumption: "Weekly",
    address: "18, New York, NY, USA",
    name: "Dinesh Chugtai",
    url: img5,
  },
  {
    age: "20",
    cannabisConsumption: "Monthly",
    address: "18, New York, NY, USA",
    name: "Richard Hendricks",
    url: img6,
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};
const SocialMatch = () => {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const [distance, setDistance] = useState(0);
  const currentIndexRef = useRef(currentIndex);
  const [type, setType] = useState("Male");
  const handleChange = (event) => {
    setType(event.target.value);
  };

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < db.length - 1;

  const canSwipe = currentIndex >= 0;

  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
    console.log("called");
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  // multirange
  const [minValue, set_minValue] = useState(18);
  const [maxValue, set_maxValue] = useState(30);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  const resetForm = () => {
    setDistance(0);
    set_minValue(0);
    set_maxValue(0);
    setType();
  };

  // subscription type
  const [subtype, setsuBType] = useState("threemonths");
  const handleSubscription = (event) => {
    setsuBType(event.target.value);
  };

  // cvv
  const [Cvv, setCvv] = useState("");
  const handleCvv = (event) => {
    const limit = 3;
    setCvv(event.target.value.slice(0, limit));
  };

  // exp date
  const [ExpMonth, setExpMonth] = useState("");
  const [ExpYear, setExpYear] = useState("");

  const handleExpiryYear = (event) => {
    const limit = 4;
    setExpYear(event.target.value.slice(0, limit));
    if (event.target.value.length === 4) {
      const form = event.target.form;
      const index = [...form].indexOf(event.target);
      form[index + 1].focus();
      event.preventDefault();
    }
  };
  const handleExpiryMonth = (event) => {
    const limit = 2;
    setExpMonth(event.target.value.slice(0, limit));
    if (event.target.value.length === 2) {
      const form = event.target.form;
      const index = [...form].indexOf(event.target);
      form[index + 1].focus();
      event.preventDefault();
    }
  };

  const [paymentData, setpaymentData] = useState({
    name: "",
    cardnumber: "",
    month: "",
    year: "",
    cvv: "",
    email: "",
  });

  const paymentHandler = (e) => {
    const { name, value } = e.target;
    setpaymentData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  const navigate = useNavigate();

  return (
    <div className="w-100 h-100">
      <div className="cardContainer">
        {db.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={index}
            onSwipe={(dir) => swiped(dir, character.name, index)}
            onCardLeftScreen={() => outOfFrame(character.name, index)}
          >
            <div
              style={{ backgroundImage: "url(" + character.url + ")" }}
              className="card h-100"
            >
              <div className="profile-detail">
                <div className="d-flex align-items-center gap-3 mb-1">
                  <p className="font-24-social font-weight-500">
                    {character.name}
                  </p>
                  <p className="font-weight-600">{character.age}</p>
                </div>
                <p>{character.address}</p>
                <p>Cannabis Consumption ({character.cannabisConsumption})</p>
              </div>
            </div>
          </TinderCard>
        ))}
        <div className="buttons">
          <button
            className={`${!canSwipe ? "notgotback" : ""}`}
            onClick={() => swipe("left")}
          >
            <RejectIcon />
          </button>
          <button
            className={`${!canGoBack ? "notgotback" : ""}`}
            onClick={() => goBack()}
          >
            <ReloadIcon />
          </button>
          <button
            data-bs-toggle="modal"
            href="#matchmodal"
            className={`${!canSwipe ? "notgotback" : ""}`}
            onClick={() => swipe("right")}
          >
            <LikeIconSocial />
          </button>
          <button data-bs-toggle="modal" href="#boostmodal">
            <PowerIcon />
          </button>
          <button data-bs-toggle="modal" href="#exampleModalToggle">
            <span className="match-filter">
              <SocialFilterIcon />
            </span>
          </button>
        </div>
      </div>

      {/*filter  modal */}
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header px-4">
              <button
                type="button"
                className="green-btn-outline text-primary-green w-max-content px-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Back
              </button>
              <h1
                className="modal-title fs-5 text-center"
                id="exampleModalToggleLabel"
              >
                Set Filter
              </h1>
              <button
                type="button"
                className="green-btn w-max-content px-3"
                onClick={() => resetForm()}
              >
                Clear
              </button>
            </div>
            <div className="modal-body px-4">
              <form
                className=" d-flex flex-column justify-content-between h-100"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label className="font-weight-600 font-18-100 mb-2 d-flex justify-content-between w-100">
                    <span>Age Range</span>
                    <span>
                      {minValue}-{maxValue}
                    </span>
                  </label>
                  <MultiRangeSlider
                    className="shadow-none border-0 py-0 px-2 py-2"
                    min={0}
                    max={100}
                    minValue={minValue}
                    maxValue={maxValue}
                    ruler={false}
                    label={false}
                    barLeftColor="white"
                    barInnerColor="#5D8B2F"
                    barRightColor="white"
                    thumbLeftColor="white"
                    thumbRightColor="white"
                    onInput={(e) => {
                      handleInput(e);
                    }}
                  />
                  <div className="d-flex flex-column align-items-start justify-content-center w-100 gap-1 my-4">
                    <label className="font-weight-600 font-18-100 mb-2 d-flex justify-content-between w-100">
                      <span>Distance Range</span>
                      <span>{distance}mi.</span>
                    </label>
                    <input
                      value={distance}
                      onChange={(e) => setDistance(e.target.value)}
                      type="range"
                      className="form-control-range w-100"
                      min="1"
                      max="100"
                    ></input>
                  </div>

                  <label className="mb-2 font-weight-600 font-18-100">
                    Show me
                  </label>
                  <div
                    className="btn-group btn-group-toggle mb-4 w-100"
                    data-toggle="buttons"
                  >
                    <label className="btn py-3 font-14 bg-grey active d-flex align-items-center">
                      <input
                        type="radio"
                        name="options"
                        id="Male"
                        autoComplete="off"
                        readOnly
                        checked={type === "Male"}
                        onChange={handleChange}
                        value="Male"
                      />
                      <span className="pl-2">Male</span>
                    </label>
                    <label className="btn py-3 font-14 bg-grey d-flex align-items-center">
                      <input
                        type="radio"
                        name="options"
                        id="Female"
                        value="Female"
                        autoComplete="off"
                        checked={type === "Female"}
                        onChange={handleChange}
                      />
                      <span className="pl-2">Female</span>
                    </label>
                    <label className="btn py-3 font-14 bg-grey d-flex align-items-center">
                      <input
                        type="radio"
                        name="options"
                        id="Others"
                        value="Others"
                        autoComplete="off"
                        checked={type === "Others"}
                        onChange={handleChange}
                      />
                      <span className="pl-2">Others</span>
                    </label>
                  </div>

                  <div className="form-control h-auto p-0 bg-transparent border-0">
                    <label className="mb-2 font-weight-600 font-18-100">
                      Location
                    </label>
                    <div className="d-flex align-items-center auth-input bg-white rounded-3 justify-content-between gap-2">
                      <input
                        className="border-0 outline-0 w-100"
                        type="email"
                        placeholder="Search here..."
                        required
                      />
                      <LocationIcon />
                    </div>
                  </div>
                  <div className="or font-18-100 font-weight-600 text-dark-black my-3">
                    {" "}
                    or{" "}
                  </div>
                  <button className="green-btn-outline text-primary-green py-3 h-auto">
                    Use Current Location
                  </button>
                </div>

                <button className="green-btn mt-5 py-3 h-auto">Apply</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* boost modal */}
      <div
        className="modal fade"
        id="boostmodal"
        aria-hidden="true"
        aria-labelledby="boostmodalLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header px-4 justify-content-start">
              <button
                type="button"
                className="outline-0 border-0 bg-transparent"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <CrossBorderIcon />
              </button>
            </div>
            <div className="modal-body px-4 mb-3">
              <form
                onSubmit={(e) => e.preventDefault()}
                className=" d-flex flex-column justify-content-between h-100"
              >
                <div>
                  <h4 className="mb-3">Select a Plan</h4>
                  <Slider {...settings} className="">
                    <label className="shadow-none border-0 btn subscription-offer p-0 w-100 font-14 bg-grey active d-flex align-items-center">
                      <input
                        type="radio"
                        name="options"
                        autoComplete="off"
                        readOnly
                        checked={subtype === "threemonths"}
                        onChange={handleSubscription}
                        value="threemonths"
                      />
                      <div className="subs p-4 w-100 d-flex justify-content-center align-items-center text-dark-black">
                        <p className="font-32-social font-weight-700 border-bottom border-grey pb-3">
                          $45.00
                        </p>
                        <div className="px-3 pt-3">
                          <p className="font-18-social font-weight-700 mb-2">
                            3 months
                          </p>
                          <p className="font-16-social font-weight-400">
                            SAVE 19%
                          </p>
                        </div>
                      </div>{" "}
                    </label>
                    <label className="shadow-none border-0 btn subscription-offer position-relative p-0 w-100 font-14 bg-grey d-flex align-items-center">
                      <input
                        type="radio"
                        name="options"
                        autoComplete="off"
                        checked={subtype === "sixmonths"}
                        onChange={handleSubscription}
                        value="sixmonths"
                      />
                      <div className="subs p-4 w-100 d-flex justify-content-center align-items-center text-dark-black">
                        <p className="font-32-social font-weight-700 border-bottom border-grey pb-3">
                          $70.99
                        </p>
                        <div className="px-3 pt-3">
                          <p className="font-18-social font-weight-700 mb-2">
                            6 months
                          </p>
                          <p className="font-16-social font-weight-400">
                            SAVE 19%
                          </p>
                        </div>
                      </div>
                    </label>
                    <label className="shadow-none border-0 btn subscription-offer p-0 w-100 font-14 bg-grey d-flex align-items-center">
                      <input
                        type="radio"
                        name="options"
                        autoComplete="off"
                        checked={subtype === "onemonths"}
                        onChange={handleSubscription}
                        value="onemonths"
                      />
                      <div className="subs w-100 p-4 d-flex justify-content-center align-items-center text-dark-black">
                        <p className="font-32-social font-weight-700 border-bottom border-grey pb-3">
                          $18.99
                        </p>
                        <div className="px-3 pt-3">
                          <p className="font-18-social font-weight-700">
                            1 months
                          </p>
                        </div>
                      </div>{" "}
                    </label>
                  </Slider>

                  <div className="subsciption-benifits">
                    <ul>
                      <li>
                        <h4 className="font-16-social font-weight-600">
                          Unlimited Likes
                        </h4>
                      </li>
                      <li>
                        <h4 className="font-16-social font-weight-600">
                          See Who Likes You
                        </h4>
                      </li>
                      <li>
                        <h4 className="font-16-social font-weight-600">
                          Unlimited Rewind
                        </h4>
                      </li>
                      <li>
                        <h4 className="font-16-social font-weight-600">
                          Hide Advertisements
                        </h4>
                      </li>
                      <li>
                        <h4 className="font-16-social font-weight-600">
                          Control Your Profile
                        </h4>
                      </li>
                      <li>
                        <h4 className="font-16-social font-weight-600">
                          Control Who You See
                        </h4>
                      </li>
                      <li>
                        <h4 className="font-16-social font-weight-600">
                          Passport
                        </h4>
                        <p className="font-14-100 mt-1">
                          Match and chat with poeple anywhere in the world
                        </p>
                      </li>
                      <li>
                        <h4 className="font-16-social font-weight-600">
                          Interest Indicators
                        </h4>
                        <p className="font-14-100 mt-1">
                          Premium members get Interest Indicators (which
                          notifies members immediately they’ve been super liked)
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                <button
                  className="green-btn mt-3 py-3 h-auto green-gradient"
                  data-bs-target="#paymentmodal"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                >
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* payment modal */}
      <div
        className="modal fade"
        id="paymentmodal"
        aria-hidden="true"
        aria-labelledby="paymentmodalLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header px-4 justify-content-between">
              <button
                type="button"
                className="outline-0 border-0 bg-transparent"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <CrossBorderIcon />
              </button>
              <button
                className="green-btn-outline w-max-content px-3 text-primary-green"
                data-bs-target="#boostmodal"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Back
              </button>
            </div>
            <div className="modal-body px-4 mb-3">
              <form
                onSubmit={(e) => e.preventDefault()}
                className=" d-flex flex-column justify-content-between h-100"
              >
                <div>
                  <h4 className="mb-3">Payment Method</h4>

                  <div className="auth-input h-auto bg-transparent text-dark-black mb-3">
                    {subtype === "sixmonths" ? (
                      <>
                        <div className="d-flex flex-column">
                          <div className="d-flex justify-content-between gap-3 align-items-center border-bottom border-grey pb-3">
                            <span>Subscription Type</span>
                            <h4>6 Months</h4>
                          </div>
                          <div className="d-flex justify-content-between gap-3 align-items-center pt-3">
                            <span>Total</span>
                            <h4>$70.99</h4>
                          </div>
                        </div>
                      </>
                    ) : subtype === "threemonths" ? (
                      <>
                        <div className="d-flex flex-column">
                          <div className="d-flex justify-content-between gap-3 align-items-center border-bottom border-grey pb-3">
                            <span>Subscription Type</span>
                            <h4>3 Months</h4>
                          </div>
                          <div className="d-flex justify-content-between gap-3 align-items-center pt-3">
                            <span>Total</span>
                            <h4>$45.00</h4>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="d-flex flex-column">
                          <div className="d-flex justify-content-between gap-3 align-items-center border-bottom border-grey pb-3">
                            <span>Subscription Type</span>
                            <h4>1 Month</h4>
                          </div>
                          <div className="d-flex justify-content-between gap-3 align-items-center pt-3">
                            <span>Total</span>
                            <h4>$18.99</h4>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="form-control h-auto border-0 p-0 mb-3">
                    <label className="mb-1 font-16 font-weight-600">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      placeholder="Tony"
                      required
                      className="auth-input h-auto bg-transparent"
                      name="name"
                      value={paymentData.name}
                      onChange={paymentHandler}
                      onKeyDown={(e) => handleEnter(e)}
                    />
                  </div>
                  <div className="form-control h-auto border-0 p-0 mb-3">
                    <label
                      className="font-16 font-weight-600 pb-1"
                      htmlFor="name"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="8764 2300 9890 4328"
                      className="auth-input h-auto bg-transparent"
                      name="cardnumber"
                      value={cc_format(paymentData.cardnumber)}
                      onChange={paymentHandler}
                      onKeyDown={(e) => handleEnter(e)}
                    />
                  </div>
                  <div className="row mx-0 mb-3">
                    <div className="col-12 p-0 d-flex gap-3 justify-content-between align-items-center">
                      <div className="d-flex flex-column">
                        <label
                          className="font-16 font-weight-600 pb-1"
                          htmlFor="name"
                        >
                          Expiry Date
                        </label>
                        <div className="d-flex align-items-center">
                          <input
                            type="number"
                            required
                            placeholder="MM"
                            className="auth-input bg-transparent h-auto"
                            name="month"
                            value={ExpMonth}
                            onChange={handleExpiryMonth}
                            onKeyDown={(e) => handleEnter(e)}
                          />
                          <p className="px-3">/</p>
                          <input
                            type="number"
                            required
                            maxLength={4}
                            placeholder="YYYY"
                            className="auth-input bg-transparent h-auto"
                            name="year"
                            value={ExpYear}
                            onChange={handleExpiryYear}
                            onKeyDown={(e) => handleEnter(e)}
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-column mb-32 w-118px">
                        <label
                          className="font-16 font-weight-600 pb-1"
                          htmlFor="email"
                        >
                          CVV
                        </label>
                        <input
                          type="password"
                          required
                          className="auth-input bg-transparent h-auto"
                          name="cvv"
                          value={Cvv}
                          onChange={handleCvv}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-control h-auto border-0 p-0 mb-4">
                    <label className="mb-1 font-16 font-weight-600">
                      Email Address
                    </label>
                    <input
                      required
                      placeholder="abc@email.com"
                      name="email"
                      type="email"
                      className="auth-input h-auto bg-transparent"
                      onChange={paymentHandler}
                      onKeyDown={(e) => handleEnter(e)}
                    />
                  </div>
                </div>

                <button className="green-btn mt-3 py-3 h-auto green-gradient">
                  Buy Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Its a match */}
      <div
        className="modal fade"
        id="matchmodal"
        aria-hidden="true"
        aria-labelledby="matchmodalLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal-fullscreen">
          <div className="modal-content">
            <div className="modal-body bg-dark-black px-4 mb-3">
              <form
                onSubmit={(e) => e.preventDefault()}
                className=" d-flex flex-column justify-content-center gap-5 h-100 align-items-center"
              >
                <div className="text-center">
                  <h4 className="font-72 text-primary-green mb-3">
                    Its a Match!
                  </h4>
                  <p className="font-16-social text-white">
                    You and other user liked each other
                  </p>
                </div>
                <div className="d-flex flex-column gap-3 w-100">
                  <button
                    onClick={() => navigate("/chat")}
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    className="green-btn text-white d-flex justify-content-center align-items-center"
                  >
                    Send a Message
                  </button>
                  <button
                    className="green-btn-outline text-primary-green"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Keep Scrolling
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMatch;

function handleEnter(event) {
  if (event.key === "Enter") {
    const form = event.target.form;
    const index = [...form].indexOf(event.target);
    form[index + 1].focus();
    event.preventDefault();
  }
}
function cc_format(value) {
  const v = value
    .replace(/\s+/g, "")
    .replace(/[^0-9]/gi, "")
    .substr(0, 16);
  const parts = [];

  for (let i = 0; i < v.length; i += 4) {
    parts.push(v.substr(i, 4));
  }

  return parts.length > 1 ? parts.join(" ") : value;
}
