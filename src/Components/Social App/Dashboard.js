import React from "react";
import socialhome1 from "../../assets/Images/social-home-1.svg";
import socialhome2 from "../../assets/Images/social-home-2.svg";
import socialhome3 from "../../assets/Images/social-home-3.svg";
import socialhome4 from "../../assets/Images/social-home-4.svg";

import AddSocialUserIcon from "./AddSocialUser";
import SocialChatIcon from "./SocialChatIcon";

const homeData = [
  {
    name: "Rach_sammy",
    address: "33, Women, Owen Soun..",
    img: socialhome1,
  },
  {
    name: "Rach_sammy",
    address: "33, Women, Owen Soun..",
    img: socialhome2,
  },
  {
    name: "Rach_sammy",
    address: "33, Women, Owen Soun..",
    img: socialhome3,
  },
  {
    name: "Rach_sammy",
    address: "33, Women, Owen Soun..",
    img: socialhome4,
  },
];

const SocialDashboard = () => {
  return (
    <div className="container">
      <div className="row m-0 px-1">
        {homeData.map((data, index) => {
          return (
            <div className="col-6 px-2 mb-4" key={index}>
              <div className="social-card text-center">
                <img src={data.img} alt="" className="w-100 mb-3" />
                <h3 className="font-16-social font-weight-700 text-dark-black mb-2">
                  {data.name}
                </h3>
                <p className="font-12 font-weight-500 mt-1 cut-text">
                  {data.address}
                </p>
                <div className="d-flex justify-content-around align-items-center mt-2 pt-1">
                  <span>
                    <SocialChatIcon />
                  </span>
                  <span
                    data-bs-toggle="modal"
                    href="#exampleModalToggle"
                    role="button"
                  >
                    <AddSocialUserIcon />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        class="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content mx-4">
            {/* <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel">
                Modal 1
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div> */}
            <div class="modal-body text-center">
              <h3 className="font-20-social font-weight-900 mb-4 text-dark-black">
                Enable Pust Notification
              </h3>
              <p className="font-16-25 font-weight-500 text-dark-black">
                Looks like your push notifications are disabled! You might be
                missing out a lot! turn notifications back on?
              </p>
              <div className="d-flex gap-3 mt-4 pt-3">
                <button className="green-btn-outline text-primary-green">
                  No Thanks
                </button>
                <button className="green-btn">Yes, Please</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialDashboard;
