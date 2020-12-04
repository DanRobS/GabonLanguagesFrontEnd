import '../Components_styles/LanguageInfo.css';
import '../custom.scss'
import Home from './Home'
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
    )
  }
}

export default LanguageInfo;
