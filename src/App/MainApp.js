import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from "../Home/HomePage";
import Header from "../Header/Header";
import CampingCatelog from "../CampingCatelog/CampingCatelog";
import BabyCatelog from "../BabyCatelog/BabyCatelog";


class App extends Component {
  render() {
    return (
      <div id={'main'}>
        <Header></Header>
        <Switch>
          <Route exact path={'/'} component={HomePage}></Route>
          <Route path={'/Camping'} component={CampingCatelog}></Route>
          <Route path={'/Baby'} component={BabyCatelog}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
