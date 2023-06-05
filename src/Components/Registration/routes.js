import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "../../Pages/Login Page";
import AgeVerifyPage from "../../Pages/Age Verify";
import SignUpPage from "../../Pages/Sign up";
import RetailerType from "../../Pages/Retailer Type";
import DispensaryType from "../../Pages/Dispensary";
import HeadShop from "../../Pages/Head Shop";
import CannabisLounge from "../../Pages/Cannabis Lounge";
import ResponsivePage from "../../Pages/Response Page";
import BudSeedPage from "../../Pages/Bud Seed";
import TermsConditionsPage from "../../Pages/Terms and Conditions";
import AddAddressPage from "../../Pages/Add Adress";
import NotFound from "../../Pages/Not Found";
import SocialSignUp from "../Social App/SocialSignup";
import SocialSummary from "../Social App/Summary";
import SocialUserDetail from "../Social App/UserDetail";
import SocialUserBio from "../Social App/UserBio";
import SocialSubscription from "../Social App/SocialSubscription";
import SocialNotice from "../Social App/Notice";
import SocialUploadPicture from "../Social App/UploadPicture";
import SocialProfile from "../Social App/SocialProfile";
import LookingFor from "../Social App/LookingFor";

const RegistrationRoutes = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const location = useLocation();

  return (
    <div
      className={`${
        !location.pathname.includes("/social") ? "auth-model" : ""
      } `}
    >
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/age" element={<AgeVerifyPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/retailer" element={<RetailerType />} />
        <Route path="/dispensary" element={<DispensaryType />} />
        <Route path="/headshop" element={<HeadShop />} />
        <Route path="/cannabis" element={<CannabisLounge />} />
        <Route path="/address" element={<AddAddressPage />} />
        <Route path="/response" element={<ResponsivePage />} />
        <Route path="/budseed" element={<BudSeedPage />} />
        <Route path="/terms" element={<TermsConditionsPage />} />
        <Route path="*" element={<NotFound />} />

        {windowSize[0] <= 576 ? (
          <>
            <Route path="/social/signup" element={<SocialSignUp />} />
            <Route path="/social/summary" element={<SocialSummary />} />
            <Route path="/social/userdetail" element={<SocialUserDetail />} />
            <Route path="/social/userbio" element={<SocialUserBio />} />
            <Route path="/social/notice" element={<SocialNotice />} />
            <Route
              path="/social/subscription"
              element={<SocialSubscription />}
            />
            <Route
              path="/social/uploadpicture"
              element={<SocialUploadPicture />}
            />
            <Route path="/social/profile" element={<SocialProfile />} />
            <Route path="/social/lookingfor" element={<LookingFor />} />
          </>
        ) : (
          ""
        )}
      </Routes>
    </div>
  );
};

export default RegistrationRoutes;
