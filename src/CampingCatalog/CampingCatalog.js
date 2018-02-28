import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './Actions';
import { Card } from '../Card/Card';

export class CampingCatalog extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      inputValue: ""
    };
    this.updateInputValue = this.updateInputValue.bind(this);
    this.searchClick = this.searchClick.bind(this);
  }

  updateInputValue(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  searchClick() {
    return this.props.actions.loadCampingProducts(this.state.inputValue);
  }

  productMapping(product, index) {
    return (
      <Card
        image={product.imageURL}
        title={product.title}
        description={product.description}
        price={product.price}
        link={product.amazonLink}
        key={index}
      />
    );
  }

  render() {
    return (
      <div>
        <header className="header-div">
          <input
            className="header-input"
            type={'text'}
            placeholder="Search For Camping Products Here"
            onChange={this.updateInputValue}/>
          <button
            className="header-button"
            onClick={this.searchClick}>
            Search Camping Products
          </button>
        </header>
        <div className="camping-catalog">
          {this.props.campingProducts.map(this.productMapping)}
        </div>
      </div>
    );
  }

}

CampingCatalog.propTypes = {
  campingProducts: PropTypes.array,
  actions: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  return {
    campingProducts: state.campingProducts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CampingCatalog);
