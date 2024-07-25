import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Choose from "../components/Choose";
import Stats from "../components/Stats";
import Menu from "../components/Menu";
import Testimonials from "../components/testimonials";

const HomePage = () => {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Choose></Choose>
      <Stats></Stats>
      <Menu></Menu>
      <Testimonials></Testimonials>
    </>
  );
};
export default HomePage;
