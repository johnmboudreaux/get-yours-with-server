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
        <Search />
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
