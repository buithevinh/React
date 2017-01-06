import React from "react";
import {Link} from 'react-router';


export class Header extends React.Component {

  handleClick(){
    this.props.onUpdate(true);
  }

  render() {
    let inviSearch;
    if (typeof this.props.search !== 'undefined') {
      if (!this.props.search) {
        inviSearch = {'display': "none"}
      }
    }
    else {
      inviSearch = {'display': "block"}
    }
    return (
      <nav>
        <ul>
          <li>
            <Link activeClassName="active" to = '/app'  className="icon">
              <i aria-hidden="true" className="fa fa-plus-square"> </i>
            </Link>
          </li>
          <li style = {inviSearch}>
            <Link className="icon" onClick= {this.handleClick.bind(this)}>
              <i aria-hidden="true" className="fa fa-search"></i>
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/sugget" className="icon">
              <i aria-hidden="true" className="fa fa-lightbulb-o"></i>
            </Link>
          </li>
          <li className="user">
            <Link activeClassName="active" to = "/user" className="icon">
              <i aria-hidden="true" className="fa fa-user-circle-o"></i>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
