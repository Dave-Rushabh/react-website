import React, { useState } from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../CSS/Contact.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    orgname: "",
    orgloc: "",
    message: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (event) => {
    event.preventDefault();

    const { name, email, orgname, orgloc, message } = user;

    if (name && email && orgname && orgloc && message) {
      const response = await fetch(
        "https://reactwebsite-142cc-default-rtdb.firebaseio.com/reactwebsite.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            orgname,
            orgloc,
            message,
          }),
        }
      );

      if (response) {
        setUser({
          name: "",
          email: "",
          orgname: "",
          orgloc: "",
          message: "",
        });
        alert("Your Details Have Been Received; We Will Get Back To You ASAP!");
      }
    } else {
      alert("Please Fill All Data");
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-container">
        <form method="POST">
          <div className="form-main-1">
            <div className="if-1">
              <input
                type="text"
                placeholder="Please Enter Your Name"
                className="inputfield"
                value={user.name}
                autoComplete="off"
                required
                onChange={getUserData}
                name="name"
              />
            </div>
            <div className="if-2">
              <input
                type="email"
                name="email"
                id=""
                placeholder="Please Enter Your Email"
                className="inputfield"
                value={user.email}
                autoComplete="off"
                required
                onChange={getUserData}
              />
            </div>
          </div>

          <div className="form-main-3">
            <div className="if-5">
              <input
                type="text"
                placeholder="Your Organization's Name"
                className="inputfield"
                value={user.orgname}
                autoComplete="off"
                required
                onChange={getUserData}
                name="orgname"
              />
            </div>
            <div className="if-6">
              <input
                type="text"
                placeholder="Your Organization's Location"
                className="inputfield"
                value={user.orgloc}
                autoComplete="off"
                required
                onChange={getUserData}
                name="orgloc"
              />
            </div>
          </div>
          <div className="form-main-2">
            {/* <div className="if-3">
              <input
                type="text"
                placeholder="Mobile Number with Country Code"
                className="inputfield"
              />
            </div> */}
            <div className="if-4">
              <textarea
                id=""
                // cols="23"
                rows="10"
                placeholder="Brief Us Your Business Needs"
                className="tarea"
                value={user.message}
                autoComplete="off"
                required
                onChange={getUserData}
                name="message"
              ></textarea>
            </div>
          </div>

          <div className="form-main-4">
            <div className="">
              <button
                type="button"
                value="Submit"
                className="btn-submit"
                onClick={postData}
              >
                Submit
              </button>
              {/* <input
                
              /> */}
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
