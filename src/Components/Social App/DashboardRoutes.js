import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NotFound from "../../Pages/Not Found";
import SocialDashboard from "./Dashboard";
import SocialPosts from "./Posts";
import SocialMatch from "./SocialMatch";

const SocialDashboardRoutes = () => {
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

  return (
    <div className="h-100">
      <Routes>
        <Route path="*" element={<NotFound />} />

        {windowSize[0] <= 576 ? (
          <>
            <Route path="/social/dashboard" element={<SocialDashboard />} />
            <Route path="/social/posts" element={<SocialPosts />} />
            <Route path="/social/match" element={<SocialMatch />} />
          </>
        ) : (
          ""
        )}
      </Routes>
    </div>
  );
};

export default SocialDashboardRoutes;
