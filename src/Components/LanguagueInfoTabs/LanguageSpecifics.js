import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
//import Button from 'react-bootstrap/Button'
import '../../Components_styles/LanguageInfoStyles/LanguageSpecifics.css'
import '../../custom.scss'
import MediaQuery from 'react-responsive'

class LanguageSpecifics extends React.Component {
  render(){
    return (
      
      <div className="container" >

        {/************************/}
        {/* PADS AND LAPTOP SIZE */}
        {/************************/}
        <MediaQuery minDeviceWidth={769}>
          <Jumbotron className="Jumbotron_div">
            <h1 className="Section_title">Rule title</h1>
            <p className="Section_text">
              This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
            </p>
            <p className="Section_example">
              Rule example.
            </p>
          </Jumbotron>

          <Jumbotron className="Jumbotron_div">
            <h1 className="Section_title">Rule title</h1>
            <p className="Section_text">
              This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
            </p>
            <p className="Section_example">
              Rule example.
            </p>
          </Jumbotron>

          <Jumbotron className="Jumbotron_div">
            <h1 className="Section_title">Rule title</h1>
            <p className="Section_text">
              This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
            </p>
            <p className="Section_example">
              Rule example.
            </p>
          </Jumbotron>
        </MediaQuery>

        {/***********************/}
        {/* PHONE-SIZED SCREENS */}
        {/***********************/}
        <MediaQuery maxDeviceWidth={768}>
          <Jumbotron className="Jumbotron_div_phone">
              <h1 className="Section_title_phone">Rule title</h1>
              <p className="Section_text_phone">
                This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
              </p>
              <p className="Section_example_phone">
                Rule example.
              </p>
          </Jumbotron>

          <Jumbotron className="Jumbotron_div_phone">
              <h1 className="Section_title_phone">Rule title</h1>
              <p className="Section_text_phone">
                This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
              </p>
              <p className="Section_example_phone">
                Rule example.
              </p>
          </Jumbotron>

          <Jumbotron className="Jumbotron_div_phone">
              <h1 className="Section_title_phone">Rule title</h1>
              <p className="Section_text_phone">
                This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
              </p>
              <p className="Section_example_phone">
                Rule example.
              </p>
          </Jumbotron>
        </MediaQuery>        

      </div>
    )
  }
}

export default LanguageSpecifics;
