import React, { useEffect } from "react";
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
  UncontrolledTooltip
} from "reactstrap";
import "../Navbars/signIn.css";
import useLogIn from "../../hooks/useLogin";
import {getUserInfo} from "../../services/getUserInfo";

const DemoNavbar = ({ toggleModal }) => {
  const isLoggedIn = useLogIn(localStorage.getItem("token"));
  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialize
    headroom.init();
  }, []);

  const renderLoginSection = () => {
    debugger;
    let user;
    if (isLoggedIn === true) {
      try{
       user = getUserInfo().then((res)=>{
         user = res.data
         alert(user.Email);
       });
        console.log(user);
      }catch(ex){
        console.log(ex);
      }
      
      return (
        <NavItem className="d-lg-block ml-lg-4">
          <NavLink
            style={{cursor : "pointer"}}
            className="nav-link-icon"
            id="profile"
            onClick={() => alert("asas")}
          >
            <img
              alt="..."
              className="img-fluid rounded-circle shadow"
              src={require("assets/img/theme/team-1-800x800.jpg")}
              style={{ width: "50px", marginRight: "20px" }}
            />
            {user.Email}
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
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default DemoNavbar;
