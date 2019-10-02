import React, { useEffect } from "react";



// core components
import DemoNavbar from "components/Navbars/DemoNavbar";
import CardsFooter from "components/Footers/CardsFooter.jsx";

// index page sections
import Hero from "./IndexSections/Hero";

const HomePage = () => {

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, []);
  return (
    <>
      <DemoNavbar />
      <main style={{scrollTop : "0"}}>
        <Hero />
       
      </main>
      <CardsFooter />
    </>
  );
};

export default HomePage;
