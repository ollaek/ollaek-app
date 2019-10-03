import React, { useEffect, useState } from "react";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar";
import CardsFooter from "components/Footers/CardsFooter.jsx";

// index page sections
import Hero from "./IndexSections/Hero";
import SignInModal from "../components/Modals/SignInModal";

const HomePage = () => {
  const [show, setShow] = useState(null);
  const toggleModal = () => {
    setShow(!show);
  };
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, []);
  return (
    <>
      <DemoNavbar toggleModal={() => toggleModal()} />
      <SignInModal toggleModal={show} changeToggleModal={() => toggleModal()} />
      <main style={{ scrollTop: "0" }}>
        <Hero />
      </main>
      <CardsFooter />
    </>
  );
};

export default HomePage;
