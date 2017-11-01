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

const mapStateToProps = (store, ownProps) => {
  return {
    babyProducts: store.babyProducts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BabyCatelog);
