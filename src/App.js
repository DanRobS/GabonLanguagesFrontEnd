import './App.css';
import './custom.scss'
import Home from './Components/Home'
import About from './Components/About'
import LanguageInfo from './Components/LanguageInfo'
import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl,
          Button } from 'react-bootstrap'
import { Route, BrowserRouter as Router, Link,
          Switch } from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <div className="App">

        <Router>

          <div id="navbar-div" className="container">
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
                  <NavDropdown.Item as={Link} to="/Dictionaries/Nzebi">Nzebi</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Dictionaries/Fang">Fang</NavDropdown.Item>
                </NavDropdown>

              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
              </Form>
              </Navbar.Collapse>
            </Navbar>
          </div>

          <div id="center-div" className="container">
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/Dictionaries/Nzebi' component={LanguageInfo}></Route>
              <Route exact path='/about' component={About}></Route>
            </Switch>
          </div>
        </Router>
        {/*
        <footer id="footer-div" className="container">
        <p>Author : This Guy</p>
        <a href="mailto:thisguy@mailservice.com">thisguy@mailservice.com</a>
        </footer>
        */}
      </div>
    );
  }
}

export default App;
