import React, { useContext } from "react";
import { Context } from "../Context";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "reactstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Home() {
  const { allProducts } = useContext(Context);

  const products = allProducts.map(({ Id, Title, Price, Img, isFavorite }) => {
    return (
      <Col key={Id} md="6" lg="4" className="text-center p-0">
        <ProductCard
          Title={Title}
          Price={Price}
          Img={Img}
          Id={Id}
          isFavorite={isFavorite}
        />
      </Col>
    );
  });

  return (
    <Container>
      <ToastContainer />
      <Row>{products}</Row>
    </Container>
  );
}
