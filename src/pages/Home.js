import React, { useContext } from "react";
import { Context } from "../Context";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "reactstrap";
export default function Home() {
  const products = useContext(Context);
  console.log(products.map((product) => product.id));

  const allProducts = products.map((product) => {
    return (
      <Col key={product.Id} md="6" lg="4">
        <ProductCard
          Title={product.Title}
          Price={product.Price}
          Img={product.Img}
        />
      </Col>
    );
  });
  console.log(allProducts);

  return (
    <Container>
      <Row>{allProducts}</Row>
    </Container>
  );
}
