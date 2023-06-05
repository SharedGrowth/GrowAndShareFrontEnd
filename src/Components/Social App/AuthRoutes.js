import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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

const SocialAuthRoutes = () => {
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
      } social-screens`}
    >
      <Routes>
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

export default SocialAuthRoutes;
