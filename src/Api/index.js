import axios from "axios";
import { toast } from "react-toastify";
const SignUpUrl = `${process.env.REACT_APP_API_URI}users/signup`;
const LoginUrl = `${process.env.REACT_APP_API_URI}users/login`;
const PostResponseUrl = `${process.env.REACT_APP_API_URI}userItem`;

export const PostLoginData = async (loginDetails, rememberCheck) => {
  try {
    const fetchData = await axios.post(LoginUrl, loginDetails);
    localStorage.clear();

    if (rememberCheck) {
      sessionStorage.setItem(
        "remember-user",
        rememberCheck ? JSON.stringify(fetchData.data.data.user) : ""
      );
    } else {
      sessionStorage.clear();
    }

    localStorage.setItem("user-token", fetchData.data.token);
    localStorage.setItem("userdata", JSON.stringify(fetchData.data.data.user));
    toast.success("Welcome");
    setTimeout(() => {
      window.location.href = "/home";
    }, 1000);
  } catch (error) {
    toast.error(error?.message);
    console.log(error);
  }
};
export const PostSignUp = async (signInDetails) => {
  try {
    const fetchData = await axios.post(SignUpUrl, signInDetails);
    localStorage.clear();
    localStorage.setItem("user-token", fetchData.data.token);
    localStorage.setItem("userdata", JSON.stringify(fetchData?.data.data.user));
    if (signInDetails.userType === "Retailer") {
      setTimeout(() => {
        window.location.href = "/retailer";
      }, 1000);
    } else {
      setTimeout(() => {
        window.location.href = "/address";
      }, 1000);
    }
    toast.success("  Sign up Successful");
  } catch (error) {
    toast.error(error?.message);
    console.log(error);
    localStorage.clear();
  }
};

export const PostRetailerType = async (RetailerTypeUrl, retailerType) => {
  try {
    const fetchData = await axios.patch(RetailerTypeUrl, retailerType);
    localStorage.setItem("userdata", JSON.stringify(fetchData?.data?.user));
    setTimeout(() => {
      window.location.href = "/address";
    }, 1000);
    toast.success("Retailer Type Added Successfully");
  } catch (error) {
    toast.error(error?.message);
    console.log(error);
  }
};

export const PostAddress = async (adressUrl, address) => {
  try {
    await axios.patch(adressUrl, address);
    setTimeout(() => {
      window.location.href = "/response";
    }, 1000);
    toast.success("Address Added Successfully");
  } catch (error) {
    toast.error(error?.message);
    console.log(error);
  }
};

export const PostResponse = async (newArray) => {
  try {
    console.log(newArray);
    await axios.post(PostResponseUrl, newArray);
    setTimeout(() => {
      window.location.href = "/terms";
    }, 1000);
    toast.success("Response Added Successfully");
  } catch (error) {
    toast.error(error?.message);
    console.log(error);
  }
};
