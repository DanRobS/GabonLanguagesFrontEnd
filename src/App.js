import './App.css';
import './custom.scss'
import Dictionary from './Components/Dictionary'
import History from './Components/History'
import LanguageSpecifics from './Components/LanguageSpecifics'
import About from './Components/About'
import React from 'react'
import { Navbar, Nav, NavDropdown,
        Tabs, Tab  } from 'react-bootstrap'
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <div className="App">

        <Router>
          <Navbar collapseOnSelect expand="lg" bg="dark"
                  variant="dark" className="Navbar">
            <Navbar.Brand className="Navbar-Brand"
                href="/">Online language dictionary</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Item>
                <Nav.Link className="homeLink" as={Link} to="/">Home</Nav.Link>
              </Nav.Item>
              <NavDropdown title="Dictionaries" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/Dictionaries/Nzebi">Nzebi</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Dictionaries/Fang">Fang</NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link className="homeLink" as={Link} to="/about">About</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar>
        </Router>


        <div className="Tabs">
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="dictionary" title="Dictionary">
              <Dictionary/>
            </Tab>
            <Tab eventKey="history" title="History">
              <History/>
            </Tab>
            <Tab eventKey="language specifics"
                  title="Languague specifics">
              <LanguageSpecifics/>
            </Tab>
          </Tabs>
        </div>

      </div>
    );
  }
}

export default App;
