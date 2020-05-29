import React, {useContext} from 'react'
import {Context} from '../Context'
import ProductCard from '../components/ProductCard'
import { Container, Row, Col } from 'reactstrap';
export default function Home() {
    const products = useContext(Context)
    console.log(products.map(product => product.id))
    
    const allProducts = products.map((product,i) => {
        return (
          <Col md="6" lg="4">
            <ProductCard key={i} Title={product.Title} Price={product.Price} />
          </Col>
        );
    }
        )
    
    return (
      <Container>
          <Row>
              {allProducts}
          </Row>
      </Container>
    );
}
