import NavigationItem from "./NavigationItem";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

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
    // <Navbar expand="lg" className="bg-body-tertiary">
    //   <Container>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Link to="home">Home</Link>
    //         <Link to="employee">Employee</Link>
    //         <Link to="prediction">Prediction</Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <nav>
      <ul>
        {navigation.map((navItem, index) => (
          <NavigationItem
            key={index}
            link={navItem.link}
            title={navItem.title}
          />
        ))}
      </ul>
    </nav>
  );
}

export default NavigationBar;
