import { Outlet } from "react-router-dom";
import React from "react";

const PrivateRoutes = () => {
  //   let navigate2 = useNavigate();
  let authorised = JSON.parse(localStorage.getItem("user"));
  let status = authorised.user.emailVerified;

  console.log(status);

  if (status) {
    return <Outlet />;
  } else {
  }
  //   status ? <Outlet /> : navigate("/Error");
};
export default PrivateRoutes;
