import NavigationItem from "./NavigationItem";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap'

function NavigationBar(props) {
  if (!props.isLoggedIn) {
    return null;
  }

  const navigation = [
    { title: "Home", link: "home" },
    { title: "Employee", link: "employee" },
    { title: "Prediction", link: "prediction" },
  ];

  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="primary" data-bs-theme="dark">
      <Container>
        <LinkContainer to="/home">
          <Navbar.Brand>
          <img
              src="/src/imgs/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="duck logo"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/home">
              <Nav.Link to="home">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/employee">
              <Nav.Link to="employee">Employee</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/prediction">
              <Nav.Link to="prediction">Prediction</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

//     <LinkContainer to="/service">
//     <Nav.Link>Service</Nav.Link>
// </LinkContainer>

    // <nav>
    //   <ul>
    //     {navigation.map((navItem, index) => (
    //       <NavigationItem
    //         key={index}
    //         link={navItem.link}
    //         title={navItem.title}
    //       />
    //     ))}
    //   </ul>
    // </nav>
  );
}

export default NavigationBar;
