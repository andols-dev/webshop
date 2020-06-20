import React,{useContext} from 'react'
import {Context} from '../Context'
import { Button } from "reactstrap";
export default function CartItem({item}) {
    const {removeFromCart} = useContext(Context);
    return (
      <div className="mt-5">
        <h4>{item.Title}</h4>
        <img src={item.Img} style={{ width: "150px" }} alt="product" />
        <br></br>
        <Button className="mt-3" outline color="success" onClick={() => removeFromCart(item.Id)}>
          remove
        </Button>
      </div>
    );
}
