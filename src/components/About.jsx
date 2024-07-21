import { React, useEffect, createContext, useContext } from "react";
import AOS from "aos";

import { settings } from "../App";

// import react icons
import { FaCheckCircle } from "react-icons/fa";

// import images
import Img1 from "/images/aboutImg1.jpg";
import Img2 from "/images/aboutImg2.jpg";

// import heading section
import SectionTitle from "./SectionTitle";

//page title and description
const data = createContext();

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  const defaultSetting = useContext(settings);

  const td = {
    title: "About Us",
    description: "Learn More About Us",
  };

  return (
    <data.Provider value={td}>
      <div className="container py-5">
        <div className="row">
          <div className="col col-12 text-uppercase">
            <SectionTitle></SectionTitle>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col col-12 col-lg-7 border">
            <div className="card border-0">
              <img className="img-fluid" src={Img1} />
              <div className="card-body border border-secondary border-4 my-3">
                <h4 className="text-center">Book a Table</h4>
                <h5
                  className={`text-center fs-3 text-${defaultSetting.themeColors.firstColor}`}
                >
                  +1 5589 55488 55
                </h5>
              </div>
            </div>
          </div>
          <div className="col col-12 col-lg-5 border">
            <p style={{ color: `${defaultSetting.themeColors.lightDark}` }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="list-group">
              <li className="list-group-item border-0 p-0 mb-2">
                <FaCheckCircle
                  className={`text-${defaultSetting.themeColors.firstColor}`}
                />{" "}
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </li>
              <li className="list-group-item border-0 p-0 mb-2">
                <FaCheckCircle
                  className={`text-${defaultSetting.themeColors.firstColor}`}
                />{" "}
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </li>
              <li className="list-group-item border-0 p-0 mb-2">
                <FaCheckCircle
                  className={`text-${defaultSetting.themeColors.firstColor}`}
                />{" "}
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate trideta
                storacalaperda mastiro dolore eu fugiat nulla pariatur.
              </li>
            </ul>
            <p className="mt-3">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident
            </p>
            <div className="card overflow-hidden border-0">
              <img src={Img2} />
            </div>
          </div>
        </div>
      </div>
    </data.Provider>
  );
};

export default About;
export { data };
