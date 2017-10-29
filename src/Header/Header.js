import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Baby'>Baby</Link>
            </li>
            <li>
              <Link to='/Camping'>Camping</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

}

Header.propTypes = {};

export default Header;
