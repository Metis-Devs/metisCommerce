import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const NavBar = () => {
  const [token, setToken] = useState<boolean>(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(true);
    }
  });

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-container">
      <Container fluid>
        <Navbar.Brand href="#">MetisCommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            
            <NavDropdown title={token ? "UserName" : "Ingresar"} >
              <NavDropdown.Item href="#action3">{token ? "Compras" : "Login"}</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              {token ? "Vender" : "Crear cuenta"}
              </NavDropdown.Item>
              
              {token ? (
                <>
                <NavDropdown.Item href="#action4">
              Preguntas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
              
              Salir
              </NavDropdown.Item>
              </>
              ) : ("")}
            </NavDropdown>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
