import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Container, Form, Modal, Placeholder } from "react-bootstrap";
import AlertService from "../../../service/alert";
import { ModalForm } from "../../../components/Modal";

export const PersonalData = () => {

  const [showModal,setShowModal] = useState<boolean>(false)
  const [modalName, setModalName] = useState<string>("")
  const [inputName, setinputName] = useState<string>("")
  const [type, setType] = useState<string>("")
  const [placeholder, setPlaceholder] = useState<string>("")

  const handleClose = () => setShowModal(false);

  const openModal = (modalename:string, inputname:string,type:string, placeholder:string) => {

    setModalName(modalename)
    setinputName(inputname)
    setType(type)
    setPlaceholder(placeholder)

    
    setShowModal(true)
    
  };

  

  const handleSubmit = () => {};
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ backgroundColor: "#e5e5e5", height: "916px" }}
    >
      <div className="personale-profile-name">
        <div className="personale-profile-name-inner">
          <h2>Datos Personales</h2>
        </div>
      </div>

      <div className="personale-profile-path">
        <div className="personale-profile-path-inner">
          <a className="profile-data" onClick={()=>{openModal("Nombre", "Nombre", "text", "Theo")}}>
            <h5>Nombre</h5>
            <div className="personal-data">
              <h5>Theo</h5>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </a>

          <a className="profile-data" onClick={()=>{openModal("Apellido", "Apellido", "text", "Fornetti")}}>
            <h5>Apellido</h5>
            <div className="personal-data">
              <h5>Fornetti</h5>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </a>
          <a className="profile-data" onClick={()=>{openModal("Email", "Email", "text", "theofornetti2001@gmail.com")}}>
            <h5>Email</h5>
            <div className="personal-data-email ">
              <h5>theofornetti2001@gmail.com</h5>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </a>
          <a className="profile-data" onClick={()=>{openModal("Numero de telefono", "Numero de telefono", "text", "2616609655")}}>
            <h5>Numero de telefono</h5>
            <div className="personal-data">
              <h5>2616609655</h5>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </a>

          <a className="profile-data" onClick={()=>{openModal("Numero de identificacion", "Numero de identificacion", "text", "43681826")}}>
            <h5>Numero de identificacion</h5>
            <div className="personal-data">
              <h5>43681826</h5>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </a>
        </div>
      </div>

      {showModal == true ? (<ModalForm showModal={showModal} handleClose={handleClose} inputName={inputName} placeholder={placeholder} type={type} modalName={modalName}/>): ("")}
    </Container>
  );
};
