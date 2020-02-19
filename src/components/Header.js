import React, { Component } from 'react';

import { Nav, Navbar, NavbarBrand, NavItem, NavLink, Container } from "reactstrap"

class Header extends Component {
    render() {
        return (
            <Navbar color="light" light expand="md">
                <Container>
                    <Nav className="mr-auto" navbar>
                        <NavbarBrand href="#/">Bella Bella Bella</NavbarBrand>
                        <NavItem>
                            <NavLink href="#/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#/members">Members</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#/schedule">Schedule</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default Header;