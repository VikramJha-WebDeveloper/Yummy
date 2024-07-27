import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Choose from "../components/Choose";
import Stats from "../components/Stats";
import Menu from "../components/Menu";
import Testimonials from "../components/testimonials";
import Events from "../components/Events";
import Chefs from "../components/Chefs";
import BookTable from "../components/BookTable";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

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
      <BookTable></BookTable>
      <Gallery></Gallery>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};
export default HomePage;
