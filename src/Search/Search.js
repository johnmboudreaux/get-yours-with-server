import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ inputValue, updateInputValue, searchClick }) => {
  return (
    <header className="header-div">
      <input
        value={inputValue}
        className="header-input"
        type={'text'}
        placeholder="Search For Products Here"
        onChange={updateInputValue}/>
      <button
        className="header-button"
        onClick={searchClick}>
        Search Products
      </button>
    </header>
  );
};

Search.propTypes = {
  inputValue: PropTypes.string,
  updateInputValue: PropTypes.func,
  searchClick: PropTypes.func
};
export default Search;
