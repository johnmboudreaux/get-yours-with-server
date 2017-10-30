import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <header className="main-header">
        <nav className="header-nav">
          <ul>
            <li>
              <Link to='/'>Personal Recomendations</Link>
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
