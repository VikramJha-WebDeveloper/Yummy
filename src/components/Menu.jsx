import React from "react";
import SectionTitle from "./SectionTitle";

const Menu = () => {
  const title = "Our Menu";
  const description = "Check Our Yummy Menu";
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <SectionTitle
              title={title}
              description={description}
            ></SectionTitle>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;
