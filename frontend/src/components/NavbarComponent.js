import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"


export const NavbarComponent = () => {
      return(
          <Navbar id="nav-bar" collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Brand className="navbar-brand" href="#posts">Definitly Not Reddit</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse >
              <Nav style={{ width: "100%" }}>
                {/* <Nav.Link className="nav-link" href="#posts">Posts</Nav.Link> */}
                {/* <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#faq">FAQ</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )
  
  }