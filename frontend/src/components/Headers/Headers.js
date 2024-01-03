import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom"

const Headers = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "50px" }}>
        <Container>
          <NavLink to="/home" className="text-decoration-none text-light mx-2">UserInfo</NavLink>
          <Nav className="me-auto">
            <NavLink to="/home" className="text-decoration-none text-light ">Home</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Headers