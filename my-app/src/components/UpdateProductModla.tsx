import React, { useEffect, useState } from 'react'
import { Form, Modal } from 'react-bootstrap'
import { ProductInterface } from '../Interface/Interfaces';
import ApiService from '../service/api';
import AlertService from '../service/alert';

export const UpdateProductModla = (props:any) => {
    const showModal: boolean = props.showModal;
    const[product, setProduct] = useState<ProductInterface["product"]>(props.product)

    
    const handleChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name, e.target.value )
        setProduct({ ...product, [e.target.name]: e.target.value });
        console.log(product)
    }; 

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          
          const updateUser = await ApiService.postPublic("/product/update", product);
          
          
          window.location.reload();
        } catch (err: any) {
            console.log(err.message)
          AlertService.error({
            title: "Error",
            text: err.response.data.msg,
          });
        }
      };

    
  return (
    <Modal show={showModal} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Actualizar {props.product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre del Producto</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              placeholder={props.product.name}
              name="name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Descriptcion</Form.Label>
            <Form.Control
              
              type="text"
              placeholder={props.product.description.substring(0,20)}
              name="description"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="text"
              placeholder={props.product.price}
              name="price"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Stock</Form.Label>
            <Form.Control
             type="text"
             placeholder={props.product.stock}
             name="stock"
             onChange={handleChange}
            />
          </Form.Group>
          <Modal.Footer>
            <button className="btn btn-secondary" onClick={props.handleClose}>
              Cerrar
            </button>
            <button className="btn btn-primary" type="submit" >
              Guardar Cambios
            </button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  )
}
