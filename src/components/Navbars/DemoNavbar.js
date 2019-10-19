import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from "reactstrap";
import "../Navbars/signIn.css";
import useLogIn from "../../hooks/useLogin";

const DemoNavbar = ({ toggleModal }) => {
  let isLoggedIn = useLogIn(localStorage.getItem("token"));
  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialize
    headroom.init();
  }, [isLoggedIn]);
  const renderSettingsSection = () => {
    if (isLoggedIn === true) {
      return (
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav className="nav-link-icon">
            <i className="ni ni-settings-gear-65" />
            <span className="nav-link-inner--text d-lg-none">Settings</span>
          </DropdownToggle>
          <DropdownMenu
            aria-labelledby="navbar-default_dropdown_1"
            right
            style={{ textAlign: "center" }}
          >
            <DropdownItem onClick={e => e.preventDefault()}>
              Language
            </DropdownItem>

            <DropdownItem divider />
            <DropdownItem onClick={() => onLogOut()}>LogOut</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      );
    } else {
      return (
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav className="nav-link-icon">
            <i className="ni ni-settings-gear-65" />
            <span className="nav-link-inner--text d-lg-none">Settings</span>
          </DropdownToggle>
          <DropdownMenu
            aria-labelledby="navbar-default_dropdown_1"
            right
            style={{ textAlign: "center" }}
          >
            <DropdownItem onClick={e => e.preventDefault()}>
              Language
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      );
    }
  };
  const renderLoginSection = () => {
    if (isLoggedIn === true) {
      return (
        <NavItem className="d-lg-block ml-lg-4">
          <NavLink
            style={{ cursor: "pointer" }}
            className="nav-link-icon"
            id="profile"
            onClick={() => alert("Lessa shewaya")}
          >
            <img
              alt="..."
              className="img-fluid rounded-circle shadow"
              src={localStorage.getItem("profilePicture")}
              style={{ width: "40px", marginRight: "20px" }}
            />
            {localStorage.getItem("name")}
          </NavLink>
          <UncontrolledTooltip delay={0} target="profile">
            View Profile
          </UncontrolledTooltip>
        </NavItem>
      );
    } else {
      return (
        <NavItem className="d-lg-block ml-lg-4">
          <Button
            className="btn-neutral btn-icon change-color"
            color="default"
            onClick={toggleModal}
          >
            <span className="btn-inner--icon">
              <i className="fa fa-power-off mr-2" />
            </span>
            <span className="nav-link-inner--text ml-1">SIGN IN</span>
          </Button>
        </NavItem>
      );
    }
  };

  const onLogOut = () => {
    isLoggedIn = !isLoggedIn;
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("profilePicture");
  };
  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
              <img
                alt="..."
                src={require("assets/img/brand/argon-react-white.png")}
              />
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar_global">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("assets/img/brand/argon-react.png")}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://www.facebook.com/creativetim"
                    id="Live"
                    target="_blank"
                  >
                    Live Scores
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="Live">
                    Keep Updated With All Live Scores
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://www.facebook.com/creativetim"
                    id="Tournaments"
                    target="_blank"
                  >
                    Tournaments
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="Tournaments">
                    See, Join and Follow Tournaments
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://www.facebook.com/creativetim"
                    id="playgrounds"
                    target="_blank"
                  >
                    Playgrounds
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="playgrounds">
                    See All Playgrounds With Tournaments
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://www.facebook.com/creativetim"
                    id="games"
                    target="_blank"
                  >
                    Games
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="games">
                    See All Games Played In Tournaments and Playgrounds
                  </UncontrolledTooltip>
                </NavItem>
              </Nav>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                {renderLoginSection()}
                {renderSettingsSection()}
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default DemoNavbar;
