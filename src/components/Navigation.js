import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem,} from 'reactstrap';
import {Link} from 'react-router-dom'

export default function Navigation(props) {
    const [collapsed, setCollapsed] = useState(true);

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
                <Link to="/cart">
                  <i
                    className="ri-shopping-cart-2-line"
                    style={{ fontSize: "34px" }}
                  ></i>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
}
