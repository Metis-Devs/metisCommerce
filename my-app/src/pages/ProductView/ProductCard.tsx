import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import item4 from "./switch.jpg"




interface ProductInterface {
  product: {
    id:number
    name:string,
    price:number,
    image:string
    description:string,
    stock:number,
    updatedAt:string,
    createdAt:string

  },
 
}

export const ProductCard = (props: ProductInterface) => {

  const {product} = props
  return (
    <Col key={product.id} md={3}>
      <Card className="w-100" style={{height: "400px", marginTop:"40px"}} >
        <Card.Img variant="top" src={item4} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {product.price}
          </Card.Subtitle>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
