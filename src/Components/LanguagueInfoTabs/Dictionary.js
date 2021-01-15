import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../Components_styles/LanguageInfoStyles/Dictionary.css'
import '../../custom.scss'
import { Col, Container, Row } from 'react-bootstrap'

class Dictionary extends React.Component {

  render() {
    return (
      <div id="Main_div" className="container">
        <div className="Form_div">

          <div>
            <Container>
              <Row className="row_style">
                <Col className="col_style">FR</Col>
                <Col className="col_style" xs={1}></Col>
                <Col className="col_style">NZ</Col>
              </Row>
            </Container>
          </div>

          <Container>
          <Form className="Input_form">
            <Row>
              <Col>
                <Form.Control
                  className="mb-2 mr-sm-2"
                  id="inlineFormInputName2"
                  placeholder="Type a word"
                />
              </Col>
              <Col>
                <Button type="submit" className="mb-2">
                  Translate
                </Button>
              </Col>
            </Row>
          </Form>
          </Container>
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
