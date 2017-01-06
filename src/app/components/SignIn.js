import React from "react";
import { Footer } from "./Footer";
import {Link} from 'react-router';


export class SignIn extends React.Component {
  render() {
     return (
      <div className="wallpage">
        <div className="back">
          <Link to = '/' className="icon">
            <i aria-hidden="true" className="fa fa-arrow-left"></i>
            <h3>Log in with social</h3>
          </Link>
        </div>
        <div className="form">
          <h1>Happy<br /> Days</h1>
          <div className="text-box">
            <input type="text" placeholder="Mobile Number or Email" className="input border"/>
          </div>
          <div className="text-box">
            <input type="text" placeholder="Password" className="input"/>
          </div>
          <Link to = '/app' className="btn-login">log in</Link>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    );
  }
}





