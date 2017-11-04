import React from 'react';
import { Link } from 'react-router-dom';

class NavContainer extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <aside className="main-aside">
        <div className="logo">
          LOGO
        </div>
        <nav className="nav">
          <ul className="link-container">
            <li className="nav-links">
              <Link to='/'>Personal Recomendations</Link>
            </li>
            <li className="nav-links">
              <Link to='/Baby'>Baby</Link>
            </li>
            <li className="nav-links">
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
