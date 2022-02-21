import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Components/Home";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Error from "./Components/Error";
import { Routes, Route } from "react-router-dom";
import Signin from "./Components/Signin";
import ProtectedRoutes from "./Components/PrivateRoutes";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>
        {/* <Route path="*" element={<Error />} />
        <Route path="/Error" element={<Error />} /> */}
      </Routes>
    </>
  );
};

export default App;
