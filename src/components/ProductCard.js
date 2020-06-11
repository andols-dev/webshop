import React, {useState, useContext} from "react";
import {Context} from "../Context"
import {
  UncontrolledTooltip,
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import Rating from "./Rating";

import "react-toastify/dist/ReactToastify.css";


export default function ProductCard({ Title, Price, Img, Id, isFavorite,Product}) {
  const [hovered, setHovered] = useState(false);
  const {toggleFavourite, addToCart} = useContext(Context)
  
    function heartIcon() {
      if (isFavorite) {
        return (
          
          <i
            href="#"
            id="UncontrolledTooltipExample"
            className="ri-heart-2-fill"
            style={{ cursor: "pointer", color: "crimson" }}
            onClick={() => toggleFavourite(Id)}
            
          ></i>
          
                  
        );
      } else if (hovered) {
        return (
          <>
            <i
              href="#"
              id="UncontrolledTooltipExample"
              className="ri-heart-2-line"
              style={{ cursor: "pointer", color: "crimson" }}
              onClick={() => toggleFavourite(Id)}
            ></i>
            <UncontrolledTooltip
              placement="right"
              target="UncontrolledTooltipExample"
            >
              Add product as favourite
            </UncontrolledTooltip>
          </>
        );
      }
    }; 
  return (
    <Card
      className="mt-5 card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardHeader>
        <span>{Title} </span> <span className="float-right">{heartIcon()}</span>
        
      </CardHeader>
      <CardBody>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>
          <img src={Img} alt="" />
          With supporting text below as a natural lead-in to additional content.
          <br></br>
          <span className="mt-1">Price: ${Price}</span>
        </CardText>
        <Button outline color="success" onClick={() => addToCart(Product)}>
          Add to Cart
        </Button>
      </CardBody>
      <CardFooter>
        <div>Rate product:</div>
        <Rating />
      </CardFooter>
    </Card>
  );
}

