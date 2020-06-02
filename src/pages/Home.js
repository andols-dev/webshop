import React, { useContext } from "react";
import { Context } from "../Context";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "reactstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Home() {
  const { allProducts } = useContext(Context);
  

  const products = allProducts.map((product) => {
    return (
      <Col key={product.Id} md="6" lg="4">
        <ProductCard
          Title={product.Title}
          Price={product.Price}
          Img={product.Img}
          Id={product.Id}
          isFavorite={product.isFavorite}
        />
      </Col>
    );
  });
 

  return (
    <Container className="mt-5">
      <ToastContainer />
      <Row>{products}</Row>
    </Container>
  );
}
