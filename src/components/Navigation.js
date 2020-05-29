import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem,} from 'reactstrap';
import {Link} from 'react-router-dom'

export default function Navigation(props) {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
      
        <Navbar color="faded" light expand="md">
          <div className="container">
            <div className="mr-auto">
              <Link to="/">Shop name</Link>
            </div>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav className="mr-auto">
                
                  
                
                
              </Nav>
              <Nav>
                <NavItem>
                  
                    <Link to="/cart">
                      <i className="ri-shopping-cart-fill"></i>
                    </Link>
                 
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      
    );
}
