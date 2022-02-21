import React from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../CSS/signin.css";
import { auth } from "./../Firebase/Firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  // let RouteDecision = Boolean;
  // const [Authorised, setAuthorised] = useState(false);
  let navigate = useNavigate();
  const SigninWithFirebase = () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
    });
    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log(result);

        localStorage.clear("user");
        localStorage.setItem("Name", JSON.stringify(result.user.displayName));

        localStorage.setItem("user", JSON.stringify(result));
        let IsAuthenticated = result.user.emailVerified;
        console.log(IsAuthenticated);

        if (IsAuthenticated) {
          navigate("/home");
          // setAuthorised(true);
          // console.log(Authorised);
          // alert("You are logged in successfully !");
        }

        // let authorised = JSON.parse(localStorage.getItem("user"));
        // let status = authorised.user.emailVerified;

        // console.log(status);
        // RouteDecision = IsAuthenticated;
        // console.log("The Route Decision is :" +{ RouteDecision });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // import {signOut } from "firebase/auth";
  // const SignOutMe = () => {
  //   signOut(auth)
  //     .then(() => {
  //       console.log("Signed Out");
  //     })
  //     .catch(() => {
  //       console.log("Error Occured");
  //     });

  return (
    <>
      <div className="signin-main">
        <div className="signin-container">
          <div className="signin-text">
            <div>
              <p className="text-main-signin">
                Welcome To RD's Venture
                <br />
                <br />
                <br />
                <br />
                <br />
                Sign in with your <br /> Google Account to procced further
              </p>
            </div>
            <div>
              <button className="signin-btn " onClick={SigninWithFirebase}>
                Sign in With Google
              </button>
            </div>
            {/* <button onClick={SignOutMe}>Sign Out</button> */}
          </div>
          {/* if({signInWithPopup}){<h1> {localStorage.getItem("Name")}</h1>} */}
        </div>
      </div>
    </>
  );
};

export default Signin;
