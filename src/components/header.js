import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

class Header extends Component {
  renderLinks(){
    if (this.props.authenticated) {
      return (
        <li className="nav-item">
          <Link to="/signout">Sign Out</Link>
        </li>
      );
    } else {
      return [
        <li className="nav-item" key={1}>
          <NavLink to="/signin" activeClassName="selected">Sign In</NavLink>
        </li>,
        <li className="nav-item" key={2}>
          <NavLink to="/signup" activeClassName="selected">Sign Up</NavLink>
        </li>
      ];
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect (mapStateToProps, null)(Header);
