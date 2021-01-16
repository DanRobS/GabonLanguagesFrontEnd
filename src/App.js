import './App.css';
import './custom.scss'
import AppNavBar from './Components/AppNavBar'
import Home from './Components/Home'
import About from './Components/About'
import LanguageInfo from './Components/LanguageInfo'
import React from 'react'
import { Route, BrowserRouter as Router,
          Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'

library.add(far, faExchangeAlt)

class App extends React.Component {

  render() {
    return (

      <div className="App">
        <Router>

          <AppNavBar />
          
          <Container>
            <div id="center-div">
              <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/Dictionaries/Nzebi' component={LanguageInfo}></Route>
                <Route exact path='/about' component={About}></Route>
              </Switch>
            </div>
          </Container>
          
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
