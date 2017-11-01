import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class NavContainer extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <aside className="main-aside">
        <nav className="nav">
          <ul className="link-container">
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
      </aside>
    );
  }

}

NavContainer.propTypes = {};

export default NavContainer;
