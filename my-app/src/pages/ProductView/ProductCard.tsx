import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import item4 from "./switch.jpg";

interface ProductInterface {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    stock: number;
    updatedAt: string;
    createdAt: string;
  };
}

export const ProductCard = (props: ProductInterface) => {
  const { product } = props;
  const [onEnter, setOnEnter] = useState<boolean>(false)
  
  const onMouseEnter = () =>{
    setOnEnter(true)
  }

  const onMouseLeave = () =>{
    setOnEnter(false)
  }

  return (
    <Col key={product.id} lg={3}>
      <a
        className="w-100 card-hover card"
        href={"/productDescription/" + product.id} 
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{backgroundColor: "#f5f5f5"}}
      >
        
        <Card.Img variant="top" className="h-50" src={item4} />
        <Card.Body className="card-body h-50" >
          <Card.Title>$ {product.price}</Card.Title>
          <Card.Subtitle
            className="mb-2  text-success"
            style={{ color: "green" }}
          >
            Envio Gratis
          </Card.Subtitle>
          <Card.Text style={{display: onEnter ? 'block' : 'none' }}>
            {product.description.substring(0,60)}...
          </Card.Text>
        </Card.Body>
        
      </a>
    </Col>
  );
};
