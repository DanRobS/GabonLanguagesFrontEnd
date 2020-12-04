import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../Components_styles/LanguageInfoStyles/Dictionary.css'
import '../../custom.scss'

class Dictionary extends React.Component {

  render() {
    return (
      <div className="Main_div" class="container">
        <div className="Form_div">
          <Form inline className="Input_form">
            <Form.Label htmlFor="inlineFormInputName2" srOnly>
              Name
            </Form.Label>
            <Form.Control
              className="mb-2 mr-sm-2"
              id="inlineFormInputName2"
              placeholder="Type a word"
            />
            <Button type="submit" className="mb-2">
              Translate
            </Button>
          </Form>
        </div>
        <div className="Response_div">
          <h2 className="Response_word"> Response word </h2>
          <h4 className="Response_example"> this is an example (inzebi) </h4>
          <h4 className="Response_translation"> this is an example translation in french </h4>
        </div>
      </div>
    )
  }
}

export default Dictionary;
