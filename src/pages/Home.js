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
      <Col key={product.Id} md="6" lg="4" className="text-center" >
        <ProductCard
          Title={product.Title}
          Price={product.Price}
          Img={product.Img}
          Id={product.Id}
          isFavorite={product.isFavorite}
          Product={product}
        />
      </Col>
    );
  });

  return (
    <div>
      <Container>
        <h3>Trending products</h3>
      </Container>

      <Container>
        <ToastContainer />
        <Row>{products}</Row>
      </Container>
      <h3>Customer Reviews</h3>
      <div className="reviews"></div>
    </div>
  );
}
