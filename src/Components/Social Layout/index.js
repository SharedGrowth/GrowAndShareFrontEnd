import React from "react";
import SocialFooter from "../Social App/Footer";
import DashboardLogo from "../../assets/Images/DashboardLogo";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MenuBarIcon from "../../assets/Images/MenuBar";

const SocialLayout = (props) => {
  const { children } = props;
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column justify-content-between h-100 ">
      <div
        className={`w-100 app-header d-sm-none flex-column justify-content-center `}
      >
        <div className="container px-4 mx-auto d-flex align-items-center justify-content-between">
          <svg
            onClick={() => navigate(-1)}
            width={12}
            height={27}
            viewBox="0 0 12 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.6137 26.0731C12.1288 25.504 12.1288 24.5812 11.6137 24.0121L3.0135 14.5098C2.51295 13.9568 2.51295 13.0432 3.0135 12.4902L11.6137 2.98793C12.1288 2.41879 12.1288 1.49601 11.6137 0.926861C11.0985 0.357712 10.2634 0.357712 9.74825 0.926861L1.14809 10.4291C-0.382695 12.1205 -0.382695 14.8795 1.14809 16.5709L9.74825 26.0731C10.2634 26.6423 11.0985 26.6423 11.6137 26.0731Z"
              fill="#6B6B6B"
            />
          </svg>
          <div className="d-flex align-items-center gap-2">
            <DashboardLogo />
            <h3 className="font-16-social font-weight-600">GROW AND SHARE</h3>
          </div>

          <Link
            to={"/home"}
            className="d-sm-none d-flex gap-1 align-items-center text-primary-green font-weight-600"
          >
            Home
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              width={14}
              height={24}
              viewBox="0 0 122.88 112.07"
              style={{ enableBackground: "new 0 0 122.88 112.07" }}
              xmlSpace="preserve"
            >
              <g>
                <path
                  fill="#5D8B2F"
                  d="M61.44,0L0,60.18l14.99,7.87L61.04,19.7l46.85,48.36l14.99-7.87L61.44,0L61.44,0z M18.26,69.63L18.26,69.63 L61.5,26.38l43.11,43.25h0v0v42.43H73.12V82.09H49.49v29.97H18.26V69.63L18.26,69.63L18.26,69.63z"
                />
              </g>
            </svg>
          </Link>

          <span className="cr-p d-lg-none d-block">
            <MenuBarIcon />
          </span>
        </div>
      </div>
      <div
        className={
          location.pathname.includes("/social/match")
            ? "social-match"
            : "social-home-content"
        }
      >
        {children}
      </div>
      <SocialFooter />
    </div>
  );
};

export default SocialLayout;
