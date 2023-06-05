import React from "react";
import socialpost1 from "../../assets/Images/social-post1.svg";
import socialpost2 from "../../assets/Images/social-post2.svg";
import socialpost3 from "../../assets/Images/social-post3.svg";
import socialuser1 from "../../assets/Images/socialpost-user1.svg";
import LikeIcon from "../../assets/Images/likeIcon";

const homeData = [
  {
    name: "MommyKaja",
    address: "18, New York, NY, USA",
    date: "03/03/2023",
    toplist: "Top 1",
    img: socialpost1,
    likes: "394",
  },
  {
    name: "MommyKaja",
    address: "18, New York, NY, USA",
    date: "03/03/2023",
    toplist: "Top 1",
    img: socialpost2,
    likes: "394",
  },
  {
    name: "MommyKaja",
    address: "18, New York, NY, USA",
    date: "03/03/2023",
    toplist: "Top 1",
    img: socialpost3,
    likes: "394",
  },
];

const SocialPosts = () => {
  return (
    <div className="container">
      <div className="row m-0 px-1">
        {homeData.map((data, index) => {
          return (
            <div className="col-12 mb-4" key={index}>
              <div className="text-dark-black">
                <div className="d-flex gap-2 align-items-center mb-4">
                  <img src={socialuser1} alt="" />
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h3 className="font-20 font-weight-700 text-dark-black">
                        {data.name}
                      </h3>
                      <p className="font-11 text-center font-weight-700 text-white bg-primary-green rounded-4 py-2 px-3 w-max-content">
                        {data.toplist}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="font-12 font-weight-500">{data.address}</p>
                      <p className="font-12 font-weight-500 text-right">
                        {data.date}
                      </p>
                    </div>
                  </div>
                </div>
                <img src={data.img} alt="" className="w-100" />

                <div className="d-flex justify-content-end gap-4 align-items-center mt-2">
                  <div className="d-flex gap-2 align-items-center">
                    <LikeIcon />
                    <span className="font-12 font-weight-500">{data.likes}</span>
                  </div>
                  <span role="button">
                    <svg
                      width={23}
                      height={5}
                      viewBox="0 0 23 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="3.15182"
                        cy="2.41598"
                        r="2.16256"
                        fill="#2D2B2B"
                      />
                      <circle
                        cx="11.8022"
                        cy="2.41598"
                        r="2.16256"
                        fill="#2D2B2B"
                      />
                      <circle
                        cx="20.4526"
                        cy="2.41598"
                        r="2.16256"
                        fill="#2D2B2B"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialPosts;
