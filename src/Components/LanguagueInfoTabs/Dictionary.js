import React from 'react'
import Button from 'react-bootstrap/Button'
import '../../Components_styles/LanguageInfoStyles/Dictionary.css'
import '../../custom.scss'
import { Col, Container, Row, InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MediaQuery from 'react-responsive'
import {OverlayTrigger, Tooltip} from 'react-bootstrap'

class Dictionary extends React.Component {

  

  render() {

    //TOOLTIP FOR LANGUAGE CHANGE ICON - PADS AND LAPTOP SIZED SCREENS
    const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        Traduire dans l'autre sens
      </Tooltip>
    );

    {/* PADS AND LAPTOP SIZE */}
      function nzebiToFrench () {
        document.getElementById("Form_div_frnz").classList.add("hide_div");
        document.getElementById("Form_div_nzfr").classList.remove("hide_div");
      }

      function frenchToNzebi () {
        document.getElementById("Form_div_frnz").classList.remove("hide_div");
        document.getElementById("Form_div_nzfr").classList.add("hide_div");
      }

    {/* NZEBI TO FRENCH DIV */}
      function nzebiToFrench_phone () {
        document.getElementById("Form_div_frnz_phone").classList.add("hide_div");
        document.getElementById("Form_div_nzfr_phone").classList.remove("hide_div");
      }

      function frenchToNzebi_phone () {
        document.getElementById("Form_div_frnz_phone").classList.remove("hide_div");
        document.getElementById("Form_div_nzfr_phone").classList.add("hide_div");
      }

    return (
      <div id="Main_div" className="container">

        {/************************/}
        {/* PADS AND LAPTOP SIZE */}
        {/************************/}
        <MediaQuery minDeviceWidth={769}>

          {/* /////////////////// */}
          {/* FRENCH TO NZEBI DIV */}
          {/* /////////////////// */}
          <div id="Form_div_frnz">
            <div>
              <Container>
                <Row className="row_style">
                  <Col className="col_style">FR</Col>
                  
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}>
                    <Col onClick={nzebiToFrench} className="col_style_icon" xs={1}>
                      <FontAwesomeIcon id="icon" icon="sync-alt" />
                    </Col>
                  </OverlayTrigger>
                  
                  <Col className="col_style">NZ</Col>
                </Row>
              </Container>
            </div>

            <div id="dictionaryForm">
              <div id="input-group">
                <InputGroup className="mb-6">
                  <FormControl
                    placeholder="Tapez un mot français..."
                    aria-label="Recipient's username"
                    autocomplete="true"
                  />
                  <InputGroup.Append>
                    <Button variant="secondary">Rechercher</Button>
                  </InputGroup.Append>
                </InputGroup>
              </div>
              <div id="Response_div">
                  <h2 className="Response_word"> Response word </h2>
                  <h4 className="Response_example"> this is an example (inzebi) </h4>
                  <h4 className="Response_translation"> this is an example translation in french </h4>
              </div>
            </div>
          </div>

          {/* /////////////////// */}
          {/* NZEBI TO FRENCH DIV */}
          {/* /////////////////// */}
          <div id="Form_div_nzfr" className="hide_div">
            <div>
              <Container>
                <Row className="row_style">
                  <Col className="col_style">NZ</Col>
                  
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}>
                    <Col onClick={frenchToNzebi} className="col_style_icon" xs={1}>
                      <FontAwesomeIcon id="icon" icon="sync-alt" />
                    </Col>
                  </OverlayTrigger>
                  
                  <Col className="col_style">FR</Col>
                </Row>
              </Container>
            </div>

            <div id="dictionaryForm">
              <div id="input-group">
                <InputGroup className="mb-6">
                  <FormControl
                    placeholder="Tapez un mot inzebi..."
                    aria-label="Recipient's username"
                    autocomplete="true"
                  />
                  <InputGroup.Append>
                    <Button variant="secondary">Rechercher</Button>
                  </InputGroup.Append>
                </InputGroup>
              </div>
              <div id="Response_div">
                  <h2 className="Response_word"> Response word </h2>
                  <h4 className="Response_example"> this is an example (inzebi) </h4>
                  <h4 className="Response_translation"> this is an example translation in french </h4>
              </div>
            </div>
          </div>
        </MediaQuery>




        {/***********************/}
        {/* PHONE-SIZED SCREENS */}
        {/***********************/}
        <MediaQuery maxDeviceWidth={768}>

          
          {/* FRENCH TO NZEBI DIV */}
          <div id="Form_div_frnz_phone">
            <div>
              <Container>
                <Row className="row_style_phone">
                  <Col className="col_style_phone">FR</Col>
                  <Col onClick={nzebiToFrench_phone} className="col_style_icon_phone" xs={2}>
                    <FontAwesomeIcon id="icon" icon="sync-alt" />
                  </Col>
                  <Col className="col_style_phone">NZ</Col>
                </Row>
              </Container>
            </div>

            <div className="dictionaryForm_phone">
            <InputGroup className="mb-6">
                <FormControl
                  placeholder="Entrer un mot français..."
                  aria-label="Recipient's username"
                />
                <InputGroup.Append>
                  <Button variant="secondary">Rechercher</Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
            <div id="Response_div_phone">
              <h2 className="Response_word_phone"> Response word </h2>
              <h4 className="Response_example_phone"> this is an example (inzebi) </h4>
              <h4 className="Response_translation_phone"> this is an example translation in french </h4>
            </div>
          </div>

          {/* NZEBI TO FRENCH DIV */}
          <div id="Form_div_nzfr_phone" className="hide_div">
            <div>
              <Container>
                <Row className="row_style_phone">
                  <Col className="col_style_phone">NZ</Col>
                  <Col onClick={frenchToNzebi_phone} className="col_style_icon_phone" xs={2}>
                    <FontAwesomeIcon id="icon" icon="sync-alt" />
                  </Col>
                  <Col className="col_style_phone">FR</Col>
                </Row>
              </Container>
            </div>

            <div className="dictionaryForm_phone">
            <InputGroup className="mb-6">
                <FormControl
                  placeholder="Entrer un mot inzebi..."
                  aria-label="Recipient's username"
                />
                <InputGroup.Append>
                  <Button variant="secondary">Rechercher</Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
            <div id="Response_div_phone">
              <h2 className="Response_word_phone"> Response word </h2>
              <h4 className="Response_example_phone"> this is an example (inzebi) </h4>
              <h4 className="Response_translation_phone"> this is an example translation in french </h4>
            </div>
          </div>
        </MediaQuery>
      </div>
    )
  }
}

export default Dictionary;
