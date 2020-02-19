import React, { Component } from 'react';

import { Nav, Navbar, NavbarBrand, NavItem, NavLink, Container, NavbarToggler, Collapse } from "reactstrap"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    render() {
        const toggle = () => this.setState({isOpen: !this.state.isOpen});

        return (
            <Navbar color="light" light expand="md" className="navigation">
                <Container>
                    <NavbarBrand href="#/">Bella Bella Bella</NavbarBrand>
                    <NavbarToggler onClick={() => toggle()} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
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
                        </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;