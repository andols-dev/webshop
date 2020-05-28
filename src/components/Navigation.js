import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {Link} from 'react-router-dom'

export default function Navigation(props) {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto">
              <Link to="/">Shop name</Link>
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar className="mr-auto">
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    GitHub
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav navbar>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    <Link to="/cart">
                      <i class="ri-shopping-cart-fill"></i>
                    </Link>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
}
