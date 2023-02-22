import React from "react";
import index from "./index";
import Map from "./Map";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "font-awesome/css/font-awesome.css";
import "font-awesome/css/font-awesome.min.css";
import Search from "./search";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <i class="fa fa-bus" aria-hidden="true"></i> 香港交通一站通
            </Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav.Link href="/">
                <i className="fa fa-home fa-lg" aria-hidden="true"></i>
                <span> 主頁</span>
              </Nav.Link>
              <Nav.Link href="/map">
                <i class="fa fa-map" aria-hidden="true"></i>
                <span> 地圖</span>
              </Nav.Link>

              <Nav.Link href="/routesearch">
              <i class='fa fa-search'></i>
                <span> 路線搜尋</span>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<home />} />
          <Route path="/map" element={<Map />} />
          <Route path="*" element={<h1>404</h1>} />
          <Route path="/routesearch" element={<Search/>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
