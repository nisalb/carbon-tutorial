import React, { Component } from 'react';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import { Route, Switch } from 'react-router-dom';
import DashboardHeader from './components/DashboardHeader';
import LandingPage from './content/LandingPage';
import CampaignPage from './content/CampaignPage';
import './app.scss';

class App extends Component {
  render() {
    return (
      <>
        <DashboardHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/campaigns" component={CampaignPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
