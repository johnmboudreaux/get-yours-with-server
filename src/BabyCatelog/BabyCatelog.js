import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './Actions';
import { Card } from '../Card/Card';

class BabyCatelog extends Component {

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
    this.props.actions.loadBabyProducts(this.state.inputValue);
  }

  productMapping(campingProduct, index) {
    return (
      <Card
        image={campingProduct.imageURL}
        title={campingProduct.title}
        description={campingProduct.description}
        price={campingProduct.price}
        link={campingProduct.amazonLink}
        key={index}
      />
    );
  }

  render() {
    return (
      <div>
        <h1>Baby</h1>
        <input type={'text'} onChange={this.updateInputValue}/>
        <button onClick={this.addClick}>Add Products</button>
        {this.props.babyProducts.map(this.productMapping)}
      </div>
    );
  }

}

BabyCatelog.propTypes = {
  babyProducts: PropTypes.array,
  actions: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  return {
    babyProducts: state.babyProducts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BabyCatelog);
