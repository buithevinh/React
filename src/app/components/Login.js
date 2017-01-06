import React from "react";
import { Footer } from "./Footer";
import {Link} from 'react-router';


export class Login extends React.Component {
  render() {
     return (
      <div className="wallpage">
        <div className="form">
          <h1>Happy<br /> Days</h1>
          <div className="box-btn">
            <Link to='/app' className="btn facebook">Facebook</Link>
            <Link to='/app'  className="btn google">Google</Link>
            <div className="inline">
              <Link to= '/sign-up' className="sign-up">Sign Up</Link>
              <Link to= '/sign-in' className="login">Log In</Link>
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    );
  }
}





