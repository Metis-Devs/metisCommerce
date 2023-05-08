import { faArrowRight, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Profile = () => {
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center h-100"
      style={{ backgroundColor: "#e5e5e5" }}
    >
      <div className="profile-name">
        <div className="profile-name-inner">
          <FontAwesomeIcon icon={faUser} />
          <h2>Theo Fornetti</h2>
        </div>
      </div>

      <div className="profile-path">
        <div className="profile-path-inner">
          <a className="profile-data" href="/personalData">
            <h5>Mis Datos</h5>
            <FontAwesomeIcon icon={faArrowRight} />
            
          </a>
          
          <a className="profile-data" href="/directions">
            <h5>Direcciones</h5>
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
          <a className="profile-data" href="/userProducts">
            <h5>Mis articulos</h5>
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
          <a className="profile-data" href="/sales">
            <h5>Ventas</h5>
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </div>
    </Container>
  );
};
