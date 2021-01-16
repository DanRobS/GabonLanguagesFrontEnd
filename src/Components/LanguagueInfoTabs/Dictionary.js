import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../Components_styles/LanguageInfoStyles/Dictionary.css'
import '../../custom.scss'
import { Col, Container, Row, InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Dictionary extends React.Component {

  render() {
    return (
      <div id="Main_div" className="container">
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
          <InputGroup className="mb-3">
              <FormControl
                placeholder="Type a word"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="outline-secondary">Button</Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </div>
        <div id="Response_div">
            <h2 className="Response_word"> Response word </h2>
            <h4 className="Response_example"> this is an example (inzebi) </h4>
            <h4 className="Response_translation"> this is an example translation in french </h4>
        </div>
      </div>
    )
  }
}

export default Dictionary;
