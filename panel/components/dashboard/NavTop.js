import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

class NavTop extends React.Component {
    render() {
        var currentPath = this.props.rout[1].name.charAt(0).toUpperCase() + this.props.rout[1].name.slice(1);

        return (
            <Navbar fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">{currentPath}</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Account</NavItem>
                        <NavDropdown eventKey={2} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={2.1}>Action</MenuItem>
                            <MenuItem eventKey={2.2}>Another action</MenuItem>
                            <MenuItem eventKey={2.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={2.4}>Separated link</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={3} href="#">Log out</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

NavTop.propTypes = {};
NavTop.defaultProps = {};

export default NavTop;