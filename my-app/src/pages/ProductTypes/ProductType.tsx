import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ApiService from "../../service/api";
import { ProductCard } from "../ProductView/ProductCard";

export const ProductType = () => {
  const params = useParams();

  const [productType, setProductType] = useState([]);

  const fetchProducts = async () => {
    const data = await ApiService.getPublic(
      "/product/productType/" + params.type
    );

    setProductType(data.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Container fluid>
      <Row>
        {productType.map((p) => {
          return <ProductCard product={p} />;
        })}
      </Row>
    </Container>
  );
};
