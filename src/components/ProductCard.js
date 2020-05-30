import React, { useState } from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

export default function ProductCard({ Title, Price, Img, Test}) {
  const [hovered, setHovered] = useState(false);

  const heartIcon = hovered && (
    <i className="ri-heart-2-line" style={{ cursor: "pointer" }} title="Add as Favourite"></i>
  );
  return (
    <Card
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      
    >
      <CardHeader>
  <span>{Title} {Test}</span> <span className="float-right">{heartIcon}</span>
      </CardHeader>
      <CardBody>
        <CardTitle>Special Title Treatment</CardTitle>

        <CardText>
         <img src={Img} alt=""/>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button>Add to Cart</Button>
      </CardBody>
      <CardFooter>${Price}</CardFooter>
    </Card>
  );
}
