import { React, useEffect, useContext } from "react";
import AOS from "aos";
import styled from "styled-components";
import { settings } from "../App";
import { data } from "./About";

const SectionTitle = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  const defaultSettings = useContext(settings);
  const td = useContext(data);

  const TitleSection = styled.div`
    word-spacing: 5px;
  `;

  return (
    <TitleSection>
      <h2
        className={`fs-6 text-center mb-3 text-${defaultSettings.themeColors.firstColor}`}
      >
        {td.title}
      </h2>
      <h3
        className="text-center"
        style={{ fontFamily: `${defaultSettings.fontFamily}` }}
      >
        {td.description}
      </h3>
    </TitleSection>
  );
};
export default SectionTitle;
