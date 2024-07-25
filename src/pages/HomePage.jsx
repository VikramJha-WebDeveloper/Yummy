import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Choose from "../components/Choose";
import Stats from "../components/Stats";
import Menu from "../components/Menu";
import Testimonials from "../components/testimonials";
import Events from "../components/Events";
import Chefs from "../components/Chefs";

const HomePage = () => {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Choose></Choose>
      <Stats></Stats>
      <Menu></Menu>
      <Testimonials></Testimonials>
      <Events></Events>
      <Chefs></Chefs>
    </>
  );
};
export default HomePage;
