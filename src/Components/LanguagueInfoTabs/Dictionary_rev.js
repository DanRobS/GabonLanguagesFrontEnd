import React from 'react'
import Button from 'react-bootstrap/Button'
import '../../Components_styles/LanguageInfoStyles/Dictionary.css'
import '../../custom.scss'
import { Col, Container, Row, InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MediaQuery from 'react-responsive'

class Dictionary extends React.Component {

  render() {
    return (
      <div id="Main_div" className="container">
        
        {/************************/}
        {/* PADS AND LAPTOP SIZE */}
        {/************************/}
        <MediaQuery minDeviceWidth={769}>
          <div className="Form_div">
            <div>
              <Container>
                <Row className="row_style">
                  <Col className="col_style">FR</Col>
                  <Col className="col_style" xs={1}><FontAwesomeIcon icon="exchange-alt" /></Col>
                  <Col className="col_style">NZ</Col>
                </Row>
              </Container>
            </div>

            <div className="dictionaryForm">
            <InputGroup className="mb-6">
                <FormControl
                  placeholder="Type a word"
                  aria-label="Recipient's username"
                />
                <InputGroup.Append>
                  <Button variant="secondary">Button</Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
          </div>
          <div id="Response_div">
              <h2 className="Response_word"> Response word </h2>
              <h4 className="Response_example"> this is an example (inzebi) </h4>
              <h4 className="Response_translation"> this is an example translation in french </h4>
          </div>
        </MediaQuery>

        {/***********************/}
        {/* PHONE-SIZED SCREENS */}
        {/***********************/}
        <MediaQuery maxDeviceWidth={768}>
          <div className="Form_div_phone">
            <div>
              <Container>
                <Row className="row_style_phone">
                  <Col className="col_style_phone">FR</Col>
                  <Col className="col_style_icon_phone" xs={1}><FontAwesomeIcon icon="exchange-alt" /></Col>
                  <Col className="col_style_phone">NZ</Col>
                </Row>
              </Container>
            </div>

            <div className="dictionaryForm_phone">
            <InputGroup className="mb-6">
                <FormControl
                  placeholder="Type a word"
                  aria-label="Recipient's username"
                />
                <InputGroup.Append>
                  <Button variant="secondary">Button</Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
          </div>
          <div id="Response_div_phone">
              <h2 className="Response_word_phone"> Response word </h2>
              <h4 className="Response_example_phone"> this is an example (inzebi) </h4>
              <h4 className="Response_translation_phone"> this is an example translation in french </h4>
          </div>
        </MediaQuery>
      </div>
    )
  }
}

export default Dictionary;
