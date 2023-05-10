import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export const ModalForm = (props: any) => {
  const showModal: boolean = props.showModal;

  return (
    <Modal show={showModal} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cambiar {props.modalName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={props.handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{props.inputName}</Form.Label>
            <Form.Control
              type={props.type}
              placeholder={props.placeholder}
              name={props.name}
              autoFocus
              onChange={props.handleChange}
            />
          </Form.Group>
          <Modal.Footer>
            <button className="btn btn-secondary" onClick={props.handleClose}>
              Cerrar
            </button>
            <button className="btn btn-primary" type="submit">
              Guardar Cambios
            </button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
