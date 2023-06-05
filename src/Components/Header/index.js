import React from "react";
import DashboardLogo from "../../assets/Images/DashboardLogo";
import SeedICon from "../../assets/Images/Seed";
import DispensaryIcon from "../../assets/Images/Dispensary";
import CannbisIcon from "../../assets/Images/Cannbis";
import HeadShopIcon from "../../assets/Images/HeadShop";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BudsIcon from "../../assets/Images/Buds";
import MobSearchIcon from "../../assets/Images/MobSearch";
import MenuBarIcon from "../../assets/Images/MenuBar";
import FavouriteIcon from "../../assets/Images/FavouriteIcon";
import Hooks from "../../hooks";

const headLinks = [
  {
    name: "Home",
    link: "/home",
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
    name: "Head Shop",
    link: "/home/headshop",
  },
];
const products = [
  {
    name: "Seeds",
    icon: <SeedICon />,
    link: "/home/seed",
  },
  {
    name: "Buds",
    icon: <BudsIcon />,
    link: "/home/buds",
  },
  {
    name: "Dispensary",
    icon: <DispensaryIcon />,
    link: "/home/dispensary",
  },
  {
    name: "Cannabis Lounge",
    icon: <CannbisIcon />,
    link: "/home/cannabis",
  },
  {
    name: "Head Shop",
    icon: <HeadShopIcon />,
    link: "/home/headshop",
  },
];
const head = [
  "/home",
  "/aboutus",
  "/home/seed",
  "/home/buds",
  "/home/dispensary",
  "/home/cannabis",
  "/home/headshop",
  "/home/seed/map",
  "/home/buds/map",
  "/home/dispensary/map",
  "/home/cannabis/map",
  "/home/headshop/map",
];

const AppHeader = (props) => {
  const Location = useLocation();
  const { isOpen, setIsOpen } = props;
  const { Logout } = Hooks();

  const navigate = useNavigate();
  return (
    <div
      className={`app-header  flex-column justify-content-center ${
        head.includes(Location.pathname) ? "mob-app-header" : ""
      }`}
    >
      <div className="container px-4 mx-auto d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <svg
            onClick={() => navigate(-1)}
            className={`${
              Location.pathname === "/home" ? "d-none" : ""
            } d-sm-none`}
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

          <DashboardLogo />
          <h3 className="app-heading">GROW AND SHARE</h3>
        </div>
        <Link
          to={"/social/signup"}
          className="d-sm-none d-flex gap-1 align-items-center text-primary-green font-weight-600"
        >
          <span className="w-max-content">Social</span>
          <svg
            width={14}
            height={24}
            viewBox="0 0 18 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.81165 2.10437C6.61776 2.10437 4.85257 3.7256 4.85257 5.72389C4.85257 7.665 6.50612 9.23888 8.59567 9.33127C8.73388 9.32315 8.87904 9.3227 9.01857 9.33116C11.1054 9.2377 12.7606 7.66517 12.7707 5.72168C12.7694 3.72594 10.9949 2.10437 8.81165 2.10437ZM2.55078 5.72389C2.55078 2.56647 5.34314 0 8.81165 0C12.267 0 15.0725 2.56493 15.0725 5.72389V5.72827H15.0725C15.0584 8.81523 12.3962 11.3334 9.03446 11.4367C8.98334 11.4382 8.93217 11.4367 8.88128 11.432C8.84564 11.4288 8.7811 11.4279 8.72019 11.4329C8.67271 11.4369 8.62499 11.4381 8.57733 11.4367C5.2164 11.3334 2.55078 8.81503 2.55078 5.72389Z"
              fill="#5D8B2F"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.00863 12.8232C11.2709 12.8232 13.5925 13.3415 15.3986 14.4441C17.0309 15.4372 18 16.8526 18 18.4038C18 19.9545 17.0314 21.3721 15.4005 22.3702L15.4002 22.3704C13.5888 23.4784 11.2639 24.0001 9 24.0001C6.73659 24.0001 4.41231 23.4787 2.60103 22.3711C0.968935 21.378 0 19.9627 0 18.4117C0 16.8609 0.968581 15.4434 2.59955 14.4452L2.60377 14.4426L2.60378 14.4426C4.41978 13.3418 6.74568 12.8232 9.00863 12.8232ZM3.87791 16.1952C2.72528 16.9013 2.30179 17.7243 2.30179 18.4117C2.30179 19.0988 2.72494 19.919 3.87726 20.6199L3.87978 20.6214C5.23328 21.4493 7.08619 21.8957 9 21.8957C10.9137 21.8957 12.7665 21.4494 14.12 20.6215M3.87791 16.1952C5.23818 15.3713 7.09484 14.9276 9.00863 14.9276C10.9238 14.9276 12.7738 15.3719 14.121 16.1945L14.1227 16.1956C15.2751 16.8964 15.6982 17.7167 15.6982 18.4038C15.6982 19.0915 15.2743 19.915 14.1202 20.6214"
              fill="#5D8B2F"
            />
          </svg>
        </Link>

        <div className="d-flex gap-lg-3 headlink d-lg-flex d-none h-100">
          {headLinks.map((data, index) => {
            return (
              <Link
                key={index}
                to={data.link}
                className={`${
                  data.link === Location.pathname ||
                  Location.pathname.includes(`${data.link}/map`)
                    ? "product-item-active allproduct-heading"
                    : ""
                }  product-item `}
              >
                {data.icon} {data.name}
              </Link>
            );
          })}
        </div>
        <div className="dropdown cr-p d-none d-lg-flex header-dropdown">
          <div
            className="d-flex align-items-center gap-2 drop-btn"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="icon-green-bg bg-light-green rounded-circle">
              <FavouriteIcon />
            </span>
          </div>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <Link
              to={"/favourite"}
              className={`${
                "/favourite" === Location.pathname ? "product-item-active " : ""
              } dropdown-item`}
            >
              Favourites
            </Link>
            <Link
              to={"/contactus"}
              className={`${
                "/contactus" === Location.pathname ? "product-item-active " : ""
              } dropdown-item`}
            >
              Contact Support
            </Link>
            <div
              onClick={() => Logout()}
              to={"/login"}
              className={` dropdown-item`}
            >
              Logout
            </div>
          </ul>
        </div>
        <span
          onClick={() => setIsOpen(!isOpen)}
          className="cr-p d-lg-none d-block"
        >
          <MenuBarIcon />
        </span>
      </div>

      {head.includes(Location.pathname) && (
        <div className="allproduct-mob d-sm-none d-block mt-5">
          <div className="container mx-auto">
            <div className="d-flex flex-sm-row flex-column-reverse align-items-sm-center justify-content-between gap-4">
              <h2 className="allproduct-heading m ms-12 me-12">All Products</h2>
              <div className="d-flex ps-12 pe-12 align-items-center gap-4">
                <div className="search-product  d-sm-none d-flex">
                  <input
                    placeholder="Search Product"
                    className="border-0 outline-0 bg-transparent"
                  />
                  <span className="icon-green-bg">
                    <MobSearchIcon />
                  </span>
                </div>
                <div className="d-flex align-items-center gap-4">
                  <button className="border-0 outline-0 bg-transparent p-0 height-56">
                    <svg
                      className=" h-100"
                      width={56}
                      height={56}
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width={55}
                        height={55}
                        rx="15.5"
                        fill="#5D8B2F"
                        fillOpacity="0.2"
                        stroke="#5D8B2F"
                      />
                      <path
                        d="M41.9999 15.2328V18.7889C41.9999 20.0821 41.186 21.6985 40.372 22.5067L33.3721 28.649C32.3954 29.4572 31.7442 31.0736 31.7442 32.3668V39.3173C31.7442 40.2872 31.0931 41.5803 30.2791 42.0652L28.0001 43.52C25.8838 44.8131 22.9536 43.3584 22.9536 40.7721V32.2051C22.9536 31.0736 22.3025 29.6189 21.6513 28.8107L20.0234 27.1134L29.4977 12H38.7442C40.5348 12 41.9999 13.4548 41.9999 15.2328Z"
                        fill="#5D8B2F"
                      />
                      <path
                        opacity="0.4"
                        d="M26.8603 12L18.4279 25.4324L15.4651 22.345C14.6512 21.5368 14 20.0821 14 19.1122V15.3945C14 13.4548 15.4651 12 17.2558 12H26.8603Z"
                        fill="#5D8B2F"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-sm-5 mt-4 mb-sm-5 pb-3 gap-4 d-flex align-items-start justify-content-between">
            <div className="d-flex gap-3 overflow-x-auto all-products-link px-4">
              {products.map((data, index) => {
                return (
                  <Link
                    key={index}
                    to={data.link}
                    className={`${
                      data.link === Location.pathname ||
                      Location.pathname.includes(`${data.link}/map`)
                        ? "product-item-active"
                        : ""
                    }  product-item`}
                  >
                    {data.icon} {data.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppHeader;
