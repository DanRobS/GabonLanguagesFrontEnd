import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
//import Button from 'react-bootstrap/Button'
import '../../Components_styles/LanguageInfoStyles/LanguageSpecifics.css'
import '../../custom.scss'

class LanguageSpecifics extends React.Component {
  render(){
    return (
      <div className="Main_div" className="container" >
        <Jumbotron className="Jumbotron_div" class="container">
          <h1 className="Section_title">Rule title</h1>
          <p className="Section_text">
            This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
          </p>
          <p className="Section_example">
            Rule example.
          </p>
        </Jumbotron>

        <Jumbotron className="Jumbotron_div" class="container">
          <h1 className="Section_title">Rule title</h1>
          <p className="Section_text">
            This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
          </p>
          <p className="Section_example">
            Rule example.
          </p>
        </Jumbotron>

        <Jumbotron className="Jumbotron_div" class="container">
          <h1 className="Section_title">Rule title</h1>
          <p className="Section_text">
            This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
          </p>
          <p className="Section_example">
            Rule example.
          </p>
        </Jumbotron>

      </div>
    )
  }
}

export default LanguageSpecifics;
