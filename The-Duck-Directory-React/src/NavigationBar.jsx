import { Navbar, Nav, Container } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

function NavigationBar(props) {
  if (!props.isLoggedIn) {
    return null;
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="primary" data-bs-theme="dark">
      <Container>
        <LinkContainer to="/home">
          <Navbar.Brand>
          <img
              src="imgs/logo.png"
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

  );
}

export default NavigationBar;
