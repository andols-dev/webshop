import React, { useState, useContext } from 'react'
import {
  UncontrolledTooltip,Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import {Link} from 'react-router-dom'
import {Context} from '../Context'

export default function Navigation(props) {
    const [collapsed, setCollapsed] = useState(true);
    const {cartItems} = useContext(Context)
    const cart =
      cartItems.length === 0 ? (
        <i className="ri-shopping-cart-2-line"></i>
      ) : (
        <i className="ri-shopping-cart-2-fill" style={{ color: "#4BB543" }}></i>
      );
      
      
    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
      <Navbar className="navbar-dark bg-dark text-white" light expand="md">
        <div className="container">
          <div className="mr-auto companyName">
            <Link to="/" style={{ fontSize: "34px" }}>
              Web<span style={{ color: "#4BB543" }}>Shop</span>
            </Link>
          </div>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav className="mr-auto"></Nav>
            <Nav>
              <NavItem>
                <Link
                  className="test"
                  to="/cart"
                  style={{ fontSize: "34px", marginRight: "74px" }}
                >
                  {cart}
                </Link>
              </NavItem>
              {cartItems.length > 0 ? (
                <span
                  className=" rounded-circle bg-success"
                  href="#"
                  id="UncontrolledTooltipExample"
                >
                  {cartItems.length}
                  <UncontrolledTooltip
                    placement="right"
                    target="UncontrolledTooltipExample"
                  >
                    You have {cartItems.length} {cartItems.length > 1 ? "items" : "item"} in your cart
                  </UncontrolledTooltip>
                </span>
              ) : (
                ""
              )}
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
}
