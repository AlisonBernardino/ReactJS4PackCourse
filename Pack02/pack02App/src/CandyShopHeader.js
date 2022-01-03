import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

export default class CandyShopNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return(
            <div>
                <Navbar color="primary" dark expand="md">
                    <NavbarBrand href="/">CandyShop</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="">Candies</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="">Drinks</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="">Combos</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="">Special offers</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="">Contact us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="">About</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    User preferences
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Price adjust
                                    </DropdownItem>
                                    <DropdownItem>
                                        Show by nearest location
                                    </DropdownItem>
                                    <DropdownItem>
                                        "My first candy"
                                    </DropdownItem>
                                    <DropdownItem>
                                        Express gift packs
                                    </DropdownItem>
                                    <DropdownItem>
                                        Less sugar candies
                                    </DropdownItem>
                                    <DropdownItem>
                                        Zero sugar goodies
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}