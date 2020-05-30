import React, {useState, useContext} from "react";
import {Context} from "../Context"
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

export default function ProductCard({ Title, Price, Img, Id, isFavorite}) {
  const [hovered, setHovered] = useState(false);
  const {toggleFavourite} = useContext(Context)
  function heartIcon() {
    if(isFavorite) {
      return (
        <i className="ri-heart-2-fill" style={{color: "crimson"}} onClick={() => toggleFavourite(Id)}></i>
      );
    } else if(hovered) {
      return (
        <i
          className="ri-heart-2-line"
          style={{ cursor: "pointer", color: 'crimson' }}
          title="Add as Favourite"
          onClick={() => toggleFavourite(Id)}
        ></i>
      );
    }
  } 
  return (
    <Card className="mt-5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      
    >
      <CardHeader>
  <span>{Title} </span> <span className="float-right">{heartIcon()}</span>
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
