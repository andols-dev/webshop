import React, { useState, useContext } from 'react'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem,} from 'reactstrap';
import {Link} from 'react-router-dom'
import {Context} from '../Context'

export default function Navigation(props) {
    const [collapsed, setCollapsed] = useState(true);
    const {cartItems} = useContext(Context)
    const cart =
      cartItems.length === 0 ? (
        <i className="ri-shopping-cart-2-line"></i>
      ) : (
        <i className="ri-shopping-cart-2-fill"></i>
      );

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
      <Navbar className="mt-4" color="faded" light expand="md">
        <div className="container">
          <div className="mr-auto">
            <Link to="/" style={{ fontSize: "34px" }}>
              Shop name
            </Link>
          </div>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav className="mr-auto"></Nav>
            <Nav>
              <NavItem>
                <Link to="/cart" style={{ fontSize: "34px" }}>
                  {cart}
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
}
