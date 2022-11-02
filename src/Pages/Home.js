import React from "react";
import About from "./About";
import Banner from "./Carousel/Banner";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <About/>
      <Services/>
    </div>
  );
};

export default Home;
