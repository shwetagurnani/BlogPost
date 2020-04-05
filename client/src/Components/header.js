import React, { Component } from "react";
import { Link, HashRouter } from "react-router-dom";

class Header extends Component {
  render() {

    return (
      <header>
        <h1>
          <HashRouter>
            <Link to="/displayPost">Edgistify</Link>
          </HashRouter>
        </h1>
      </header>
    );
  }
}

export default Header;
