import React, { useState, useContext } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";
import { Button } from "reactstrap";
export default function Cart() {
  const { cartItems, emptyCart } = useContext(Context);
  const [order, setOrder] = useState("Place Order");
  const totalCost = 3.98 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const cartItemElements = cartItems.map((item) => {
    return <CartItem key={item.Id} item={item} />;
  });

  const buy = () => {
    setOrder("Ordering...");
    setTimeout(() => {
      console.log("order placed");
      setOrder("Place Order");
      emptyCart();
    }, 3000);
  };
  const showOrderBtn =
    cartItems.length > 0 ? (
      <Button
        outline
        color="success"
        style={{ marginLeft: "3rem"}}
        onClick={buy}
      >
        {order}
      </Button>
    ) : null;
  return (
    <div className="mt-4" style={{ textAlign: "center" }}>
      <div style={{textAlign: 'center'}}>
        <h4>Checkout</h4>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h4>Total: {totalCostDisplay} </h4> {showOrderBtn}
      </div>

      {cartItemElements}
    </div>
  );
}
