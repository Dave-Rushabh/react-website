import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { auth } from "../Firebase/Firebase";
import { signOut } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

const SignMeOut = () => {
  // let navigate = useNavigate();
  // let status;

  signOut(auth)
    .then(() => {
      console.log("Signed Out");
      localStorage.clear("user");
      alert("You logged out successfully !");
      // status = true;
      // if (status) {
      //   navigate("/");
      // }
    })
    .catch(() => {
      console.log("Error Occured");
      alert("Unable to logout !");
    });
};

export default SignMeOut;
