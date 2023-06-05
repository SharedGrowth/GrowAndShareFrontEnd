import React from "react";
import DistanceIcon from "../../assets/Images/Distance";
import CountIcon from "../../assets/Images/Count";
import RatingIcon from "../../assets/Images/Rating";
import LocationIcon from "../../assets/Images/Location";
import SendMailIcon from "../../assets/Images/SendMail";
import seed1 from "../../assets/Images/seed1.svg";
import seed2 from "../../assets/Images/seed2.svg";
import seed3 from "../../assets/Images/seed3.svg";
import seed4 from "../../assets/Images/seed4.svg";
import HeartIcon from "../../assets/Images/Heart";
import { Link } from "react-router-dom";

const seedData = [
  {
    id: 1,
    name: "Toronto, Ontario     ",
    img: seed1,
    distance: "3 km Away",
    location: "Indica, White Rhino",
    count: "20 Seeds",
    rating: "5.0",
    totalReviews: "(56 Reviews)",
  },
  {
    id: 1,
    name: "Toronto, Ontario     ",
    img: seed2,
    distance: "3 km Away",
    location: "Indica, White Rhino",
    count: "20 Seeds",
    rating: "5.0",
    totalReviews: "(56 Reviews)",
  },
  {
    id: 1,
    name: "Toronto, Ontario     ",
    img: seed3,
    distance: "3 km Away",
    location: "Indica, White Rhino",
    count: "20 Seeds",
    rating: "5.0",
    totalReviews: "(56 Reviews)",
  },
  {
    id: 1,
    name: "Toronto, Ontario     ",
    img: seed4,
    distance: "3 km Away",
    location: "Indica, White Rhino",
    count: "20 Seeds",
    rating: "5.0",
    totalReviews: "(56 Reviews)",
  },
  {
    id: 1,
    name: "Toronto, Ontario     ",
    img: seed1,
    distance: "3 km Away",
    location: "Indica, White Rhino",
    count: "20 Seeds",
    rating: "5.0",
    totalReviews: "(56 Reviews)",
  },
  {
    id: 1,
    name: "Toronto, Ontario     ",
    img: seed2,
    distance: "3 km Away",
    location: "Indica, White Rhino",
    count: "20 Seeds",
    rating: "5.0",
    totalReviews: "(56 Reviews)",
  },
  {
    id: 1,
    name: "Toronto, Ontario     ",
    img: seed3,
    distance: "3 km Away",
    location: "Indica, White Rhino",
    count: "20 Seeds",
    rating: "5.0",
    totalReviews: "(56 Reviews)",
  },
  {
    id: 1,
    name: "Toronto, Ontario     ",
    img: seed4,
    distance: "3 km Away",
    location: "Indica, White Rhino",
    count: "20 Seeds",
    rating: "5.0",
    totalReviews: "(56 Reviews)",
  },
];
const Seeds = () => {
  return (
    <div className="seeds-card-main row m-0">
      {seedData.map((data, index) => {
        return (
          <div
            className="col-xl-3 col-lg-4  col-md-6 mb-4 seed-card-col"
            key={index}
          >
            <Link
              to={"/home/seed/seedinfo"}
              className="seed-card position-relative text-black"
            >
              <img className="w-100 intro-img" src={data.img} alt="" />
              <span className="like-post">
                <HeartIcon />
              </span>
              <div className="ps-sm-0 ps-3">
                <p className="my-sm-4 mb-3 font-24 font-weight-700">
                  {data.name}
                </p>
                <div className="d-flex justify-content-between align-items-center mb-sm-3 mb-2 flex-wrap gap-2">
                  <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                    <DistanceIcon />
                    {data.distance}
                  </span>
                  <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                    <CountIcon />
                    {data.count}
                  </span>
                </div>

                <span className="d-flex gap-2 align-items-center font-18 font-weight-500 mb-sm-4 pb-sm-1 mb-2">
                  <LocationIcon />
                  {data.location}
                </span>
                <div className="d-flex justify-content-between align-items-center gap-sm-2 gap-3 flex-sm-nowrap flex-wrap">
                  <div className="d-flex gap-2 align-items-center flex-wrap">
                    <span className="d-flex gap-2 align-items-center font-24 font-weight-700">
                      <RatingIcon />
                      {data.rating}
                    </span>
                    <span className="font-14-100 text-grey font-weight-400">
                      {data.totalReviews}
                    </span>
                  </div>
                  <button className="green-btn w-auto ps-3 pe-1 d-flex align-items-center font-18 py-sm-3 gap-3">
                    {" "}
                    <span>Message</span>{" "}
                    <span className="send-message">
                      <SendMailIcon />
                    </span>
                  </button>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Seeds;
