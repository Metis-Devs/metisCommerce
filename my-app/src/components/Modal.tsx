import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'

export const ModalForm = (props:any) => {
    const showModal:boolean = props.showModal

  return (
    <Modal show={showModal} onHide={props.handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Cambiar {props.modalName}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>{props.inputName}</Form.Label>
          <Form.Control
            type={props.type}
            placeholder={props.placeholder}
            autoFocus
          />
        </Form.Group>
       
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.handleClose}>
        Cerrar
      </Button>
      <Button variant="primary" onClick={props.handleClose}>
        Guardar Cambios
      </Button>
    </Modal.Footer>
  </Modal>
  )
}
