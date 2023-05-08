import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ApiService from "../service/api";
import { get } from "http";
import axios from "axios";

interface productType {
  type: { id: number; name: string; createdAt?: string; updatedAt?: string };
}

export const NavBar = () => {
  const [token, setToken] = useState<boolean>(false);
  const [types, setTypes] = useState<productType["type"][]>([]);

  const getTypes = async () => {
    try {
      const response = await axios.get("http://localhost:3030/productType");
      const data: productType["type"][] = response.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("loginToken");
    if (storedToken) {
      setToken(true);
    }

    const fetchData = async () => {
      const data:any = await getTypes();
      setTypes(data);
    };

    if (types.length === 0) {
      fetchData();
    }
  }, [types]);

  if (types.length === 0) {
    return <div>Cargando...</div>;
  }

  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-container">
      <Container fluid>
        <Navbar.Brand href="/">MetisCommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title={token ? "UserName" : "Ingresar"}>
              <NavDropdown.Item href={token ? "/profile" : "/login"}>
                {token ? "Perfil" : "Login"}
              </NavDropdown.Item>
              <NavDropdown.Item href={token ? "Compras" : "/register"}>
                {token ? "Compras" : "Crear cuenta"}
              </NavDropdown.Item>

              {token ? (
                <>
                 <NavDropdown.Item href="#action4">Vender</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Preguntas</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action4" onClick={handleClick}>
                    Salir
                  </NavDropdown.Item>
                </>
              ) : (
                ""
              )}
            </NavDropdown>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              {types.map(t => {
                return (
                  <NavDropdown.Item href={"/types/"+t.name}>
                    {t.name}
                </NavDropdown.Item>
                )
              })}
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
