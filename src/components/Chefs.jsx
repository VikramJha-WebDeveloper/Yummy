import React from "react";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";

// import images
import Img1 from "/images/chefImg1.jpg";
import Img2 from "/images/chefImg2.jpg";
import Img3 from "/images/chefImg3.jpg";

const Chefs = () => {
  const title = "Chefs";
  const description = "Our Proffesional Chefs";

  const ChefSection = styled.div``;
  return (
    <ChefSection className="mt-5">
      <div className="container py-5">
        <div className="row">
          <div className="col col-12">
            <SectionTitle
              title={title}
              description={description}
            ></SectionTitle>
          </div>
        </div>
        <div className="row">
          <div className="col col-lg-4 mt-4 mt-lg-0">
            <div className="card">
              <img src={Img1} />
              <div className="card-body text-center">
                <h3 className="fs-5 fw-bolder">Walter White</h3>
                <h4 className="card-title text-secondary fs-6">Master Chef</h4>
                <p className="card-text">
                  Velit aut quia fugit et et. Dolorum ea voluptate vel tempore
                  tenetur ipsa quae aut. Ipsum exercitationem iure minima enim
                  corporis et voluptate.
                </p>
              </div>
            </div>
          </div>
          <div className="col col-lg-4 mt-4 mt-lg-0">
            <div className="card">
              <img src={Img2} />
              <div className="card-body text-center">
                <h3 className="fs-5 fw-bolder">Sarah Jhonson</h3>
                <h4 className="card-title text-secondary fs-6">Patissior</h4>
                <p className="card-text">
                  Velit aut quia fugit et et. Dolorum ea voluptate vel tempore
                  tenetur ipsa quae aut. Ipsum exercitationem iure minima enim
                  corporis et voluptate.
                </p>
              </div>
            </div>
          </div>
          <div className="col col-lg-4 mt-4 mt-lg-0">
            <div className="card">
              <img src={Img3} />
              <div className="card-body text-center">
                <h3 className="fs-5 fw-bolder">William Anderson</h3>
                <h4 className="card-title text-secondary fs-6">Cook</h4>
                <p className="card-text">
                  Velit aut quia fugit et et. Dolorum ea voluptate vel tempore
                  tenetur ipsa quae aut. Ipsum exercitationem iure minima enim
                  corporis et voluptate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ChefSection>
  );
};

export default Chefs;
