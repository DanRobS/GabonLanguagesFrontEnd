import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import '../Components_styles/AppNavBar.css'

class AppNavBar extends React.Component {
    render() {
        return(
            <Container>
                <div id="">
                    <Navbar collapseOnSelect expand="lg" bg="dark"
                            variant="dark" className="Navbar">
                    <Navbar.Brand className="Navbar-Brand"
                        href="/">Online language dictionary</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Item>
                            <Nav.Link className="homeLink" href="/">Home</Nav.Link>
                        </Nav.Item>
                        <NavDropdown title="Dictionaries" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/Dictionaries/Inzebi">Inzebi</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/Dictionaries/Fang">Fang</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item>
                            <Nav.Link className="homeLink" href="/About">About</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                </div>
            </Container>
        )
    }
}

export default AppNavBar;