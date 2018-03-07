import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './Actions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

export class Search extends Component {
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
    this.props.actions.loadProducts(this.state.inputValue);
  }

  render() {
    return (
      <header className="header-div">
        <input
          className="header-input"
          type={'text'}
          placeholder="Search For Products Here"
          onChange={this.updateInputValue}/>
        <button
          className="header-button"
          onClick={this.searchClick}>
          Search Baby Products
        </button>
      </header>
    );
  }

}

Search.propTypes = {
  babyProducts: PropTypes.array,
  actions: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
