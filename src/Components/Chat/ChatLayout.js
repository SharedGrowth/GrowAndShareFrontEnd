import React from "react";
import { useState } from "react";
import MobSearchIcon from "../../assets/Images/MobSearch";
import User from "../../assets/Images/sidelink-user.svg";
import DashboardLogo from "../../assets/Images/DashboardLogo";
import SideLinkSettings from "../../assets/Images/sideLinkSettings";
import { Link } from "react-router-dom";
import CrossIcon from "../../assets/Images/Cross";
import selectafter from "../../assets/Images/select-after.svg";
import { useEffect } from "react";
import MenuBarIcon from "../../assets/Images/MenuBar";
import AppFooter from "../../Components/Footer";

const chats = [
  {
    name: "Raza Awan",
    id: 1,
    lastmessage: "okk",
  },
  {
    name: "Raza Awan",
    id: 2,
    lastmessage: "okk",
  },
  {
    name: "Raza Awan",
    id: 3,
    lastmessage: "okk",
  },
  {
    name: "Raza Awan",
    id: 4,
    lastmessage: "okk",
  },
  {
    name: "Raza Awan",
    id: 5,
    lastmessage: "okk",
  },
  {
    name: "Raza Awan",
    id: 6,
    lastmessage: "okk",
  },
  {
    name: "Raza Awan",
    id: 7,
    lastmessage: "okk",
  },
  {
    name: "Raza Awan",
    id: 8,
    lastmessage: "okk",
  },
  {
    name: "Raza Awan",
    id: 9,
    lastmessage: "okk",
  },
  {
    name: "Raza Awan",
    id: 10,
    lastmessage: "okk",
  },
];
const chatsdetail = [
  {
    id: 1,
    name: "Raza Awan",
  },
  {
    id: 2,
    name: "Raza Awan",
  },
  {
    id: 3,
    name: "Raza Awan",
  },
  {
    id: 4,
    name: "Raza Awan",
  },
  {
    id: 5,
    name: "Raza Awan",
  },
  {
    id: 6,
    name: "Raza Awan",
  },
  {
    id: 7,
    name: "Raza Awan",
  },
  {
    id: 8,
    name: "Raza Awan",
  },
  {
    id: 9,
    name: "Raza Awan",
  },
  {
    id: 10,
    name: "Raza Awan",
  },
];
const sideLinks = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "Seed Store",
    link: "/home/seed",
  },
  {
    name: "Buds",
    link: "/home/buds",
  },
  {
    name: "Dispensary",
    link: "/home/dispensary",
  },
  {
    name: "Cannabis Lounge",
    link: "/home/cannabis",
  },
  {
    name: "Head Store",
    link: "/home/headshop",
  },
  {
    name: "About us",
    link: "aboutus",
  },
  {
    name: "Login/Logout",
    link: "/logout",
  },
];
const Chat = () => {
  const [responsiveChat, setResponsiveChat] = useState(false);
  const [recentChats, setrecentChats] = useState(true);

  const current = new Date();
  const time = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    if (windowSize[0] >= 768) {
      setResponsiveChat(true);
      setrecentChats(true);
    }
    if (windowSize[0] <= 767 && recentChats) {
      setResponsiveChat(false);
    }
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize[0]]);

  return (
    <>
      <div className={`app-header ${!recentChats ? "d-none" : ""}`}>
        <div className="container px-4 mx-auto d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            {true && (
              <div
                onClick={() => {
                  setResponsiveChat(false);
                  setrecentChats(true);
                }}
                className="d-md-none d-block"
              >
                <svg
                  width={9}
                  height={18}
                  viewBox="0 0 9 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.71025 0.29552C9.09658 0.689547 9.09658 1.32839 8.71025 1.72242L2.26012 8.30089C1.88471 8.68377 1.88471 9.31623 2.26012 9.69911L8.71025 16.2776C9.09658 16.6716 9.09658 17.3105 8.71025 17.7045C8.32391 18.0985 7.69753 18.0985 7.31119 17.7045L0.861065 11.126C-0.287021 9.95507 -0.287021 8.04493 0.861066 6.874L7.31119 0.29552C7.69753 -0.0985068 8.32391 -0.0985067 8.71025 0.29552Z"
                    fill="#0F8140"
                  />
                </svg>
              </div>
            )}
            <DashboardLogo />
            <h3 className="app-heading">GROW AND SHARE</h3>
          </div>
          <span onClick={() => setIsOpen(!isOpen)} className="cr-p">
            <MenuBarIcon />
          </span>
        </div>
      </div>
      {isOpen && (
        <div className={`app-menu`}>
          <div>
            <div className="section-1">
              <div className="d-flex justify-content-end align-items-center">
                <span onClick={() => setIsOpen(!isOpen)} className="cr-p mb-4">
                  <CrossIcon />
                </span>
              </div>
              <div className="d-flex align-items-center gap-2  mb-4 pb-3">
                <DashboardLogo />
                <div>
                  <h3 className="font-18 font-weight-700">GROW AND SHARE</h3>
                  <p className="font-10">Diversity Your Supply</p>
                </div>
              </div>
              <div className="search-product mb-4">
                <input
                  placeholder="Search Product"
                  className="border-0 outline-0 bg-transparent"
                />
                <span className="icon-green-bg">
                  <MobSearchIcon />
                </span>
              </div>
            </div>
            <div className="d-flex flex-column  side-links-main">
              {sideLinks.map((data, index) => {
                return (
                  <Link
                    onClick={() => setIsOpen(!isOpen)}
                    key={index}
                    to={data.link}
                    className={`${
                      data.link === Location.pathname ? "side-link-active" : ""
                    }  side-link`}
                  >
                    {data.icon} {data.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between gap-2 pt-4 section-2">
            <div className="dropdown">
              <div
                className="d-flex align-items-center gap-2"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={User} alt="" className="side-link-user-img" />
                <div>
                  <h3 className="font-18 font-weight-700">Tony Stark</h3>
                  <p className="font-10">Retailer</p>
                </div>
                <img src={selectafter} alt="" />
              </div>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <div className="dropdown-item">Action</div>
                </li>
                <li>
                  <div className="dropdown-item">Another action</div>
                </li>
                <li>
                  <div className="dropdown-item">Something else here</div>
                </li>
              </ul>
            </div>

            <SideLinkSettings />
          </div>
        </div>
      )}

      <div
        className={`${
          !recentChats ? "chat-screen-content" : "chat-screen-content-footer"
        }`}
      >
        <div className={`${!recentChats ? "h-100" : ""} chat-screen `}>
          <div
            className={`${!recentChats ? "h-100" : ""} container mx-auto px-12`}
          >
            <div className={`${!recentChats ? "h-100" : ""}`}>
              <div className="row m-0 h-100">
                {recentChats && (
                  <div className="col-md-5 col-12 px-12">
                    <div className="seed-card flex-column px-0">
                      <div className="recent-chats-header mx-4 pb-4">
                        <div className="search-product">
                          <input
                            placeholder="Search User "
                            className="w-75 border-0 outline-0 bg-transparent"
                          />
                          <span className="icon-green-bg">
                            <MobSearchIcon />
                          </span>
                        </div>
                      </div>
                      <div className="recent-chats-detail">
                        <div
                          className="nav flex-column nav-pills"
                          id="v-pills-tab"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          {chats.map((data, index) => {
                            return (
                              <>
                                <button
                                  key={index}
                                  className="nav-link w-100  product-item bg-white  rounded-0 w-100 justify-content-start h-auto"
                                  id={`v-pills-${data.id}-tab`}
                                  data-toggle="pill"
                                  href={`#v-pills-${data.id}`}
                                  role="tab"
                                  aria-controls={`v-pills-${data.id}`}
                                  aria-selected="true"
                                >
                                  <div
                                    className="d-md-flex d-none align-items-center w-100 gap-2"
                                    type="button"
                                  >
                                    <img
                                      src={User}
                                      alt=""
                                      className=" rounded-circle"
                                    />
                                    <div className="user-name py-4 w-100 d-flex flex-column gap-2 justify-content-start align-items-start">
                                      <div className="d-flex align-items-center justify-content-between w-100 gap-2">
                                        <h3 className="font-18 font-weight-700">
                                          {data.name}
                                        </h3>
                                        <p className="font-12 font-weight-500">
                                          {time}
                                        </p>
                                      </div>
                                      <p className="font-14 font-weight-500">
                                        Retailer
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="d-md-none d-flex align-items-center w-100 gap-2"
                                    type="button"
                                    onClick={() => {
                                      setResponsiveChat(true);
                                      setrecentChats(false);
                                    }}
                                  >
                                    <img
                                      src={User}
                                      alt=""
                                      className="side-link-user-img"
                                    />
                                    <div className="user-name py-4 w-100 d-flex flex-column gap-2 justify-content-start align-items-start">
                                      <div className="d-flex align-items-center justify-content-between w-100 gap-2">
                                        <h3 className="font-18 font-weight-700">
                                          {data.name}
                                        </h3>
                                        <p className="font-12 font-weight-500">
                                          {time}
                                        </p>
                                      </div>
                                      <p className="font-14 font-weight-500">
                                        Retailer
                                      </p>
                                    </div>
                                  </div>
                                </button>
                              </>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {responsiveChat && (
                  <div className="col-md-7 col-12 px-12">
                    <div className="seed-card h-100 px-sm-4 px-4">
                      {chatsdetail.map((chatsdetail, index) => {
                        return (
                          <div
                            key={index}
                            className="tab-pane w-100 fade  chat-detail"
                            id={`v-pills-${chatsdetail.id}`}
                            role="tabpanel"
                            aria-labelledby={`v-pills-${chatsdetail.id}-tab`}
                          >
                            <div
                              className="d-flex align-items-center justify-content-enduser-name pb-4 mb-4 chat-detail-header pt-sm-0 pt-4"
                              type="button"
                            >
                              <div
                                onClick={() => {
                                  setResponsiveChat(false);
                                  setrecentChats(true);
                                }}
                                className="d-md-none d-block"
                              >
                                <svg
                                  width={9}
                                  height={18}
                                  viewBox="0 0 9 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.71025 0.29552C9.09658 0.689547 9.09658 1.32839 8.71025 1.72242L2.26012 8.30089C1.88471 8.68377 1.88471 9.31623 2.26012 9.69911L8.71025 16.2776C9.09658 16.6716 9.09658 17.3105 8.71025 17.7045C8.32391 18.0985 7.69753 18.0985 7.31119 17.7045L0.861065 11.126C-0.287021 9.95507 -0.287021 8.04493 0.861066 6.874L7.31119 0.29552C7.69753 -0.0985068 8.32391 -0.0985067 8.71025 0.29552Z"
                                    fill="#0F8140"
                                  />
                                </svg>
                              </div>
                              <img
                                src={User}
                                alt=""
                                className=" rounded-circle"
                              />
                              <div className="w-100 d-flex flex-column justify-content-start align-items-start">
                                <h3 className="font-18 font-weight-700">
                                  Tony Stark
                                </h3>

                                <div className="d-flex justify-content-start align-items-center gap-2">
                                  <svg
                                    width="9"
                                    height="9"
                                    viewBox="0 0 9 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle
                                      cx="4.29825"
                                      cy="4.29825"
                                      r="4.29825"
                                      fill="#5D8B2F"
                                    />
                                  </svg>
                                  <p className="font-14 font-weight-400 text-grey">
                                    {" "}
                                    Available
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="chat-detail-body">
                              <div className="new-msg d-flex flex-column gap-3 ">
                                <div className="send-msg">
                                  <div className="msg">
                                    Lorem ipsum dolor sit amet consectetur.
                                    Lorem ipsum dolor sit amet consectetur.
                                    Lorem ipsum dolor sit amet consectetur.
                                    Lorem ipsum dolor sit amet consectetur.
                                    <span className="d-flex justify-content-end font-12 pt-1 text-grey">
                                      {time}
                                    </span>
                                  </div>
                                </div>
                                <div className="rcv-msg">
                                  <div className="msg">
                                    Lorem ipsum dolor sit amet consectetur.
                                    <span className="d-flex justify-content-end font-12 pt-1 text-grey">
                                      {time}
                                    </span>
                                  </div>
                                </div>
                                <div className="send-msg">
                                  <div className="msg">
                                    Lorem ipsum dolor sit amet consectetur.
                                    <span className="d-flex justify-content-end font-12 pt-1 text-grey">
                                      {time}
                                    </span>
                                  </div>
                                </div>
                                <div className="rcv-msg">
                                  <div className="msg">
                                    Lorem ipsum dolor sit amet consectetur.
                                    <span className="d-flex justify-content-end font-12 pt-1 text-grey">
                                      {time}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex align-items-center chatbox-footer">
                              <div className="bg-primary-green w-max-content p-3 rounded-4">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    opacity="0.4"
                                    d="M5.55604 24H18.444C21.8381 24 23.1908 21.972 23.3507 19.5L23.9902 9.588C24.1624 6.996 22.0472 4.8 19.3786 4.8C18.6284 4.8 17.9398 4.38 17.5954 3.732L16.71 1.992C16.1443 0.9 14.6686 0 13.4142 0H10.5981C9.33141 0 7.8557 0.9 7.29001 1.992L6.40458 3.732C6.06025 4.38 5.37158 4.8 4.62142 4.8C1.95284 4.8 -0.162353 6.996 0.00981355 9.588L0.64929 19.5C0.796862 21.972 2.1619 24 5.55604 24Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M13.8421 8.10078H10.1528C9.64859 8.10078 9.23047 7.69278 9.23047 7.20078C9.23047 6.70878 9.64859 6.30078 10.1528 6.30078H13.8421C14.3463 6.30078 14.7644 6.70878 14.7644 7.20078C14.7644 7.69278 14.3463 8.10078 13.8421 8.10078Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M11.9964 19.3571C14.2921 19.3571 16.153 17.5412 16.153 15.3011C16.153 13.0611 14.2921 11.2451 11.9964 11.2451C9.70082 11.2451 7.83984 13.0611 7.83984 15.3011C7.83984 17.5412 9.70082 19.3571 11.9964 19.3571Z"
                                    fill="white"
                                  />
                                </svg>
                              </div>
                              <div className="send-message-box w-100">
                                <textarea
                                  placeholder="Type a message"
                                  className="chatbox w-100"
                                  name="chatbox"
                                  minLength="2"
                                ></textarea>
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.9785 3.01565C20.4397 2.47605 19.2341 2.10917 17.108 2.81784L6.79979 6.25393C6.79952 6.25402 6.80006 6.25384 6.79979 6.25393C5.14436 6.80775 3.99685 7.41951 3.28792 8.00537C2.57466 8.59481 2.42862 9.04571 2.42862 9.3084C2.42862 9.57071 2.57428 10.0206 3.28694 10.6083C3.99559 11.1927 5.1422 11.8022 6.79797 12.3532L9.85863 13.3734C10.2212 13.4942 10.5058 13.7788 10.6266 14.1414L11.6466 17.2014C12.1975 18.8568 12.8078 20.0039 13.3929 20.7124C13.9812 21.425 14.4324 21.5714 14.6962 21.5714C14.9599 21.5714 15.4111 21.425 15.9995 20.7124C16.5846 20.0039 17.1946 18.8574 17.7455 17.202L21.1813 6.89468C21.1811 6.89501 21.1814 6.89434 21.1813 6.89468C21.8842 4.76825 21.5188 3.55671 20.9785 3.01565ZM22.6971 1.29964C24.1877 2.79245 24.3136 5.15776 23.487 7.65722L20.0499 17.9688C20.0498 17.969 20.0499 17.9686 20.0499 17.9688C19.4471 19.78 18.7183 21.2341 17.8721 22.2588C17.0292 23.2797 15.9564 24 14.6962 24C13.436 24 12.3632 23.2797 11.5202 22.2588C10.674 21.2341 9.94537 19.7806 9.34266 17.9694C9.34259 17.9692 9.34273 17.9696 9.34266 17.9694L8.51464 15.4854L6.03119 14.6575C6.03099 14.6575 6.03139 14.6576 6.03119 14.6575C4.22039 14.0549 2.76647 13.327 1.74181 12.482C0.721051 11.6403 0 10.5685 0 9.3084C0 8.04865 0.720665 6.97635 1.74083 6.13329C2.76521 5.28674 4.21839 4.55652 6.02937 3.95075L16.3401 0.513856C18.8406 -0.319646 21.205 -0.194728 22.6971 1.29964Z"
                                    fill="#5D8B2F"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M14.9112 8.78415C15.386 9.25771 15.3871 10.0266 14.9136 10.5014L10.5663 14.8608C10.0928 15.3357 9.32393 15.3368 8.84905 14.8632C8.37417 14.3896 8.3731 13.6208 8.84665 13.1459L13.1939 8.78655C13.6674 8.31167 14.4363 8.3106 14.9112 8.78415Z"
                                    fill="#5D8B2F"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="d-md-block d-none">
          <AppFooter />
        </div>
      </div>
    </>
  );
};

export default Chat;
