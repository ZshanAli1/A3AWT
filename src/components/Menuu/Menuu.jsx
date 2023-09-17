import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

import "./Menu.css";
function Menuu() {
  return (
    <>
      <header className='header'>
        <Navbar
          className='navbar'
          bg='primary'
          data-bs-theme='dark'
          fixed='top'
        >
          <Container>
            <h1 className='logo lg-heading text-light'>Zeeshan Ali</h1>
            <ul className='nav-items'>
              <li className='nav-item'>
                <Nav.Link as={NavLink} to='/'>
                  Home
                </Nav.Link>
              </li>
              <li className='nav-item'>
                <Nav.Link as={NavLink} to='/personalities'>
                  Personalities
                </Nav.Link>
              </li>
              <li className='nav-item'>
                <Nav.Link as={NavLink} to='/cities'>
                  Cities
                </Nav.Link>
              </li>
              <li className='nav-item'>
                <Nav.Link as={NavLink} to='/Spots'>
                  Tourist Spot
                </Nav.Link>
              </li>
              <li className='nav-item'>
                <Nav.Link as={NavLink} to='/contact'>
                  Contact
                </Nav.Link>
              </li>
            </ul>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Menuu;
