import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import item4 from "./switch.jpg";
import ApiService from "../../service/api";
import { useParams } from "react-router-dom";
import { ProductCard } from "../ProductView/ProductCard";

interface ProductInterface {
  product: {
    id: number;
    name: string;
    price: number;
    description: string;
    stock: number;
    updatedAt: string;
    createdAt: string;
    user: {
      id: number;
    };
  };
}

export const ProductDescription = () => {
  const [product, setProduct] = useState<ProductInterface["product"]>({
    id: 0,
    name: "",
    price: 0,
    description: "",
    stock: 0,
    updatedAt: "",
    createdAt: "",
    user: {
      id: 0,
    },
  });

  const [userProducts, setUserProducts] = useState<
    ProductInterface["product"][]
  >([]);
  const params = useParams();

  const fetchProduct = async () => {
    const products = await ApiService.getPublic("/product/getOne/" + params.id);

    setProduct(products.data);
  };

  const fetchUserProducts = async () => {
    const userProduct = await ApiService.getPublic(
      "/product/userProducts/" + product.user.id + "/" + params.id
    );
    setUserProducts(userProduct.data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    if (product.user.id !== 0) {
      fetchUserProducts();
    }
  }, [product.user.id]);

 
  return (
    <Container
      fluid
      className="h-100 w-100 d-flex align-items-center justify-content-center flex-column"
      style={{ backgroundColor: "#e5e5e5" }}
    >
      <div style={{ height: "auto", minHeight: "100px", maxWidth: "1200px" }}>
        <Row className="h-50">
          <Col
            xs={6}
            md={6}
            lg={6}
            className="d-flex align-items-center justify-content-center"
          >
            <Image src={item4} rounded />
          </Col>

          <Col
            xs={6}
            md={6}
            className="h-100 d-flex align-items-center justify-content-center"
          >
            <Card.Body className=" d-flex align-items-start justify-content-between flex-column" style={{ height: "auto"}}>
              <h1>{product.name}</h1>
              <h2 className="mb-2 text-muted ">${product.price}</h2>
              <Card.Text>{product.description}</Card.Text>
              <div
                className="btn-description d-flex align-items-start justify-content-start flex-row flex-wrap"
                style={{ width: "80%" }}
              >
                <a className="btn btn-primary" style={{ marginRight:"12px" }}>Comprar</a>
                <a className="btn btn-info">Agregar a Carrito</a>
              </div>
            </Card.Body>
          </Col>
        </Row>
        <Container className="more-products">
          <hr />
          <h3 style={{ paddingLeft: "20px" }}>Otros Productos del vendedor</h3>
          <Row style={{ height: "350px" }}>
            {userProducts.map((product: any) => (
              <ProductCard product={product} />
            ))}
          </Row>
        </Container>
      </div>
    </Container>
  );
};
