import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Recommended from "../RecommendedCatalog/Recommended";
import NavContainer from "../NavContainer/NavContainer";
import CampingCatalog from "../CampingCatalog/CampingCatalog";
import BabyCatalog from "../BabyCatalog/BabyCatalog";
import AmazonSearch from "../AmazonSearch/AmazonSearch";


class App extends Component {
  render() {
    return (
      <div id='main'>
        <NavContainer></NavContainer>
        <Route exact path={'/'} component={Recommended}></Route>
        <Route path={'/Camping'} component={CampingCatalog}></Route>
        <Route path={'/Baby'} component={BabyCatalog}></Route>
        <Route path={'/SearchAmazon'} component={AmazonSearch}></Route>
      </div>
    );
  }
}

export default App;
