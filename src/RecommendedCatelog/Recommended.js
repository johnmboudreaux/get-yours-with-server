import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './Actions';
import { Card } from '../Card/Card';

class Recommended extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      inputValue: ""
    };
    this.updateInputValue = this.updateInputValue.bind(this);
    this.addClick = this.addClick.bind(this);
  }

  updateInputValue(event) {
    this.setState({inputValue: event.target.value});
  }

  addClick() {
    this.props.actions.loadRecommendedProducts(this.state.inputValue);
  }

  productMapping(recommendedProduct, index) {
    return (
      <Card
        image={recommendedProduct.imageURL}
        title={recommendedProduct.title}
        description={recommendedProduct.description}
        price={recommendedProduct.price}
        link={recommendedProduct.amazonLink}
        key={index}
      />
    );
  }

  render() {
    return (
      <div>
        <h1>Recommended</h1>
        <input type={'text'} onChange={this.updateInputValue}/>
        <button onClick={this.addClick}>Add Products</button>
        {this.props.recommendedProducts.map(this.productMapping)}
      </div>
    );
  }

}

Recommended.propTypes = {
  recommendedProducts: PropTypes.array,
  actions: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  return {
    recommendedProducts: state.recommendedProducts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommended);
