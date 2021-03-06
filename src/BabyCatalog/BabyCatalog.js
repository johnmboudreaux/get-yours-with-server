import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './Actions';
import { Card } from '../Card/Card';
import Search from '../Search/Search';

export class BabyCatalog extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      inputValue: ""
    };
    this.updateInputValue = this.updateInputValue.bind(this);
    this.searchClick = this.searchClick.bind(this);
  }

  updateInputValue(event) {
    this.setState({inputValue: event.target.value});
  }

  searchClick() {
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
        <Search
          inputValue={this.state.inputValue}
          updateInputValue={this.updateInputValue}
          searchClick={this.searchClick}
        />
        <div className="baby-catalog">
          {this.props.babyProducts.map(this.productMapping)}
        </div>
      </div>
    );
  }

}

BabyCatalog.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(BabyCatalog);
