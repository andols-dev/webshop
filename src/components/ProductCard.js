import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
export default function ProductCard({ Title, Price }) {
  return (
   
      <Card>
        <CardHeader>{Title}</CardHeader>
        <CardBody>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>Add to Cart</Button>
        </CardBody>
        <CardFooter>{Price}</CardFooter>
      </Card>
    
  );
}
