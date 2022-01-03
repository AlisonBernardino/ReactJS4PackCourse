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

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md"></Navbar>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://www.youtube.com/c/AliihRemix2010/videos">YouTube channel</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">Contact us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">About</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Candies
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Lollipops
                                </DropdownItem>
                                <DropdownItem>
                                    Gums
                                </DropdownItem>
                                <DropdownItem>
                                    Sugar breads
                                </DropdownItem>
                                <DropdownItem>
                                    Sugar cubes
                                </DropdownItem>
                                <DropdownItem>
                                    Chocolate bars
                                </DropdownItem>
                                <DropdownItem>
                                    Colorful milks
                                </DropdownItem>
                            </DropdownMenu>
                            <DropdownToggle nav caret>
                                Drinks
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Juices
                                </DropdownItem>
                                <DropdownItem>
                                    Soda cans
                                </DropdownItem>
                                <DropdownItem>
                                    Water
                                </DropdownItem>
                                <DropdownItem>
                                    Coffee
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </div>
        )
    }
}