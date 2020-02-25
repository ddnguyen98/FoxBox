import React, { Component } from 'react';

import { Nav, Navbar, NavItem, NavLink, Container, NavbarToggler, Collapse } from "reactstrap"

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
            <Navbar dark="true" color="dark" light expand="md" className="navigation">
                <Container>
                    <NavbarToggler onClick={() => toggle()} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="navh" navbar >
                                <NavItem className="navhitem">
                                    <NavLink href="#/">Home</NavLink>
                                </NavItem>
                                <NavItem className="navhitem">
                                    <NavLink href="#/about">About</NavLink>
                                </NavItem>
                                <NavItem className="navhitem">
                                    <NavLink href="#/members">Members</NavLink>
                                </NavItem>
                                <NavItem className="navhitem">
                                    <NavLink href="#/schedule">Schedule</NavLink>
                                </NavItem>
                                <NavItem className="navhitem">
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