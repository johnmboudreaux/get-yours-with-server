import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './Actions';
import { Card } from '../Card/Card';
import Search from '../Search/Search';

export class AmazonSearch extends Component {

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
    return this.props.actions.loadSearchedProducts(this.state.inputValue);
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
        <div className="searched">
          {this.props.searchedProducts.map(this.productMapping)}
        </div>
      </div>
    );
  }

}

AmazonSearch.propTypes = {
  searchedProducts: PropTypes.array,
  actions: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  return {
    searchedProducts: state.searchedProducts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AmazonSearch);
