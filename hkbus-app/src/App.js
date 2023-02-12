import React from "react";
import index from "./index";
import map from "./map";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>

        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">hkbus-app</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/map">Map</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<index />} />
          <Route path="/map" element={<map />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
