import React, { useContext } from "react";
import SectionTitle from "./SectionTitle";
import { settings } from "../App";
import styled from "styled-components";

// import images
import img1 from "/images/menu1.jpg";
import img2 from "/images/menu2.jpg";
import img3 from "/images/menu3.jpg";
import img4 from "/images/menu4.jpg";
import img5 from "/images/menu5.jpg";
import img6 from "/images/menu6.jpg";

// data list
const data = [
  {
    id: 1,
    img: img1,
    title: "Mangam Tiste",
    description: "Lorem, ipsum, dolor, sit, amet",
    price: `$${5.95}`,
  },
  {
    id: 2,
    img: img2,
    title: "Mangam Tiste",
    description: "Lorem, ipsum, dolor, sit, amet",
    price: `$${14.95}`,
  },
  {
    id: 3,
    img: img3,
    title: "Mangam Tiste",
    description: "Lorem, ipsum, dolor, sit, amet",
    price: `$${8.95}`,
  },
  {
    id: 4,
    img: img4,
    title: "Mangam Tiste",
    description: "Lorem, ipsum, dolor, sit, amet",
    price: `$${12.95}`,
  },
  {
    id: 5,
    img: img5,
    title: "Mangam Tiste",
    description: "Lorem, ipsum, dolor, sit, amet",
    price: `$${12.95}`,
  },
  {
    id: 6,
    img: img6,
    title: "Mangam Tiste",
    description: "Lorem, ipsum, dolor, sit, amet",
    price: `$${9.95}`,
  },
];

const Menu = () => {
  const defaultSettings = useContext(settings);
  const title = "Our Menu";
  const description = "Check Our Yummy Menu";

  const MenuSection = styled.div`
    img {
      cursor: pointer;
    }
  `;

  return (
    <MenuSection>
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
          {data.map((item) => (
            <div key={item.id} className="col col-12 col-lg-4 mt-3">
              <div className="card overflow-hidden">
                <img
                  src={item.img}
                  data-bs-toggle="modal"
                  data-bs-target="#imgModal"
                />
                <div className="modal fade" id="imgModal">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-body">
                        <img src={item.img} className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title fs-4 fw-normal">{item.title}</h3>
                  <p className="card-text text-secondary">{item.description}</p>
                  <h4
                    className={`fs-5 fw-bolder text-${defaultSettings.themeColors.firstColor}`}
                  >
                    {item.price}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MenuSection>
  );
};
export default Menu;
