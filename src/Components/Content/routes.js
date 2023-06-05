import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../Pages/Home";
import Seeds from "../Dashboard Components/Seeds";
import Buds from "../Dashboard Components/Buds";
import Dispensary from "../Dashboard Components/Dispensary";
import Cannabis from "../Dashboard Components/Cannabis";
import HeadShop from "../Dashboard Components/HeadShop";
import ShowAllProducts from "../Dashboard Components/AllProducts";
import ProductUserProfile from "../../Pages/Product User Profile";
import DispensaryProfileDetail from "../../Pages/Dispensary User Profile";
import CannabisProfileDetail from "../../Pages/Cannabis User Profile";
import HeadProfileDetail from "../../Pages/Head User Profile";
import FavoriteProduct from "../../Pages/Favorite Products";
import UserProfile from "../../Pages/User Profile";
import EditProfile from "../User Profile Detail Options/EditProfile";
import DeleteProfile from "../User Profile Detail Options/DeleteAccount";
import SeedMap from "../ViewMap/Seed";
import BudsMap from "../ViewMap/Buds";
import DispensaryMap from "../ViewMap/Dispensary";
import CannabisMap from "../ViewMap/Cannabis";
import HeadShopMap from "../ViewMap/HeadShop";
import { ProtectedRoutes } from "../../utils/ProtectedRoutes";

const ContentRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoutes
              component={
                <HomePage>
                  <ShowAllProducts />
                </HomePage>
              }
            />
          }
        />
        <Route
          path="/home/seed"
          element={
            <ProtectedRoutes
              component={
                <HomePage>
                  <Seeds />
                </HomePage>
              }
            />
          }
        />

        <Route
          path="/home/seed/map"
          element={
            <ProtectedRoutes
              component={
                <HomePage>
                  <SeedMap />
                </HomePage>
              }
            />
          }
        />

        <Route
          path="/home/buds"
          element={
            <ProtectedRoutes
              component={
                <HomePage>
                  <Buds />
                </HomePage>
              }
            />
          }
        />

        <Route
          path="/home/buds/map"
          element={
            <ProtectedRoutes
              component={
                <HomePage>
                  <BudsMap />
                </HomePage>
              }
            />
          }
        />

        <Route
          path="/home/dispensary"
          element={
            <ProtectedRoutes
              component={
                <HomePage>
                  <Dispensary />
                </HomePage>
              }
            />
          }
        />
        <Route
          path="/home/dispensary/map"
          element={
            <ProtectedRoutes
              component={
                <HomePage>
                  <DispensaryMap />
                </HomePage>
              }
            />
          }
        />

        <Route
          path="/home/cannabis"
          element={
            <ProtectedRoutes
              component={
                <HomePage>
                  <Cannabis />
                </HomePage>
              }
            />
          }
        />
        <Route
          path="/home/cannabis/map"
          element={
            <ProtectedRoutes
              component={
                <HomePage>
                  <CannabisMap />
                </HomePage>
              }
            />
          }
        />

        <Route
          path="/home/headshop"
          element={
            <ProtectedRoutes
              component={
                <HomePage>
                  <HeadShop />
                </HomePage>
              }
            />
          }
        />
        <Route
          path="/home/headshop/map"
          element={
            <ProtectedRoutes
              component={
                <HomePage>
                  <HeadShopMap />
                </HomePage>
              }
            />
          }
        />

        <Route
          path="/home/seed/seedinfo"
          element={<ProtectedRoutes component={<ProductUserProfile />} />}
        />
        <Route
          path="/home/dispensary/detail"
          element={<ProtectedRoutes component={<DispensaryProfileDetail />} />}
        />
        <Route
          path="/home/cannabis/detail"
          element={<ProtectedRoutes component={<CannabisProfileDetail />} />}
        />
        <Route
          path="/home/headshop/detail"
          element={<ProtectedRoutes component={<HeadProfileDetail />} />}
        />
        <Route
          path="/favourite"
          element={<ProtectedRoutes component={<FavoriteProduct />} />}
        />
        <Route
          path="/favourite/userprofile"
          element={<ProtectedRoutes component={<UserProfile />} />}
        />
        <Route
          path="/favourite/userprofile/edit"
          element={<ProtectedRoutes component={<EditProfile />} />}
        />
        <Route
          path="/favourite/userprofile/delete"
          element={<ProtectedRoutes component={<DeleteProfile />} />}
        />
      </Routes>
    </>
  );
};

export default ContentRoutes;
