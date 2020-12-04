import './App.css';
import './custom.scss'
import Dictionary from './Components/Dictionary'
import History from './Components/History'
import LanguageSpecifics from './Components/LanguageSpecifics'
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

        <div className="Tabs">
        <Switch>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="dictionary" title="Dictionary">
              <Route exact path='/Dictionaries/Nzebi' component={Dictionary}></Route>
            </Tab>
            <Tab eventKey="history" title="History">
              <Route exact path='/Dictionaries/Nzebi' component={History}></Route>
            </Tab>
            <Tab eventKey="language specifics"
                  title="Languague specifics">
              <Route exact path='/Dictionaries/Nzebi' component={LanguageSpecifics}></Route>
            </Tab>
          </Tabs>
        </Switch>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
