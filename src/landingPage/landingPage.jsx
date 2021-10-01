import React from "react";

import LandingSection1 from "./components/section1";
import WhyCodigo from "./components/whyCodigo";
import OurCourses from "./components/CoursesSection/OurCourses";
import AboutUs from "./components/AboutUsSection/AboutUs";
import Footer from "../footer";

const landingPage = () => {
  return (
    <div>
      <LandingSection1 />
      <WhyCodigo />
      <OurCourses />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default landingPage; //kay havay
