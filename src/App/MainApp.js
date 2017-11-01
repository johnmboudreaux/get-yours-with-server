import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Recommended from "../RecommendedCatelog/Recommended";
import NavContainer from "../NavContainer/NavContainer";
import CampingCatelog from "../CampingCatelog/CampingCatelog";
import BabyCatelog from "../BabyCatelog/BabyCatelog";


class App extends Component {
  render() {
    return (
      <div id='main'>
        <NavContainer></NavContainer>
        <Route exact path={'/'} component={Recommended}></Route>
        <Route path={'/Camping'} component={CampingCatelog}></Route>
        <Route path={'/Baby'} component={BabyCatelog}></Route>
      </div>
    );
  }
}

export default App;
