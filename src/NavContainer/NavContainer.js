import React from 'react';
import { Link } from 'react-router-dom';

class NavContainer extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      menuShowing: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      menuShowing: !this.state.menuShowing
    });
  }

  render() {
    return (
      <aside className={"main-aside " + (this.state.menuShowing ?
        "menu-showing" : "")}>
        <div className="logo">
          Get Yours
        </div>
        <button className="show-menu-button" onClick={this.toggleMenu}>
          {this.state.menuShowing ? "Hide Menu" : "Show Menu"}
        </button>
        <nav className="nav">
          <ul className="link-container">
            <li className="nav-links">
              <Link to='/SearchAmazon'>Search Amazon</Link>
            </li>
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

export default NavContainer;
