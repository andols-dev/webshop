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
      <Col key={product.Id} md="6" lg="4" className="text-center">
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
      <div className="info ">
        <Container>
          <Row className="infoRow">
            <Col md="6">
              <img src="/img/come_in.jpg" alt="" />
            </Col>
            <Col md="6">
              <h3>Welcome</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
                dicta modi doloremque ipsam magnam molestiae.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
                dicta modi doloremque ipsam magnam molestiae.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <h3 className="mt-5">Trending products</h3>
      </Container>

      <Container>
        <ToastContainer style={{ marginTop: "3.1rem" }} />
        <Row>{products}</Row>
      </Container>
      <Container className="customerContainer">
        <h3>Customer Reviews</h3>
      </Container>

      <div className="reviews"></div>
    </div>
  );
}
