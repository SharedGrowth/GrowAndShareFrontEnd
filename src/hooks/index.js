const Hooks = () => {
  const token = localStorage.getItem("user-token");
  const IsUserLoggedIn = () => {
    if (token) {
      return true;
    } else {
      return false;
    }
  };

  const Logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return {
    IsUserLoggedIn,
    Logout,
  };
};

export default Hooks;
