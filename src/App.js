import './App.css';
import './custom.scss'
import Home from './Components/Home'
import About from './Components/About'
import LanguageInfo from './Components/LanguageInfo'
import React from 'react'
import { Navbar, Nav, NavDropdown,
        Tabs, Tab  } from 'react-bootstrap'
import { Route, BrowserRouter as Router, Link,
          Switch } from 'react-router-dom'

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
                <Nav.Link className="homeLink" href="/">Home</Nav.Link>

              </Nav.Item>
              <NavDropdown title="Dictionaries" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/Dictionaries/Nzebi">Nzebi</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Dictionaries/Fang">Fang</NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link className="homeLink" href="/about">About</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar>

          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/Dictionaries/Nzebi' component={LanguageInfo}></Route>
            <Route exact path='/about' component={About}></Route>
          </Switch>

        </Router>
      </div>
    );
  }
}

export default App;
