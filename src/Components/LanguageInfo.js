import '../Components_styles/LanguageInfo.css';
import '../custom.scss'
import Dictionary from './LanguagueInfoTabs/Dictionary'
import History from './LanguagueInfoTabs/History'
import LanguageSpecifics from './LanguagueInfoTabs/LanguageSpecifics'
import React from 'react'
import { Tabs, Tab  } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'

class LanguageInfo extends React.Component {
  render() {
    return (
      <div className="Tabs">
        <Switch>
          <Tabs defaultActiveKey="Dictionary" id="uncontrolled-tab-example"
            className="container">
            <Tab eventKey="Dictionary" title="Dictionary">
              <Route exact path='/Dictionaries/Nzebi' component={Dictionary}></Route>
            </Tab>
            <Tab eventKey="History" title="History">
              <Route exact path='/Dictionaries/Nzebi' component={History}></Route>
            </Tab>
            <Tab eventKey="Hanguage specifics"
                  title="Languague specifics">
              <Route exact path='/Dictionaries/Nzebi' component={LanguageSpecifics}></Route>
            </Tab>
          </Tabs>
        </Switch>
      </div>
    )
  }
}

export default LanguageInfo;
