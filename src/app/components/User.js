import React from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";

export class User extends React.Component {

  onUpdate(param){
    this.setState({
      click: param
    });
  }

  render() {
    return (
      <div className="wallpage">
        <div className="header">
          <Header search = {false} onUpdate = {this.onUpdate.bind(this)}/>
        </div>
        <div className="user-content" >
          <div className = "profile" style={{backgroundImage: 'url(/app/img/User/user.jpg)'}}>
            <div className = 'img'>
              <img src='/app/img/User/user.jpg'/>
            </div>
          </div>

          <div className = 'block-text'>
            <h2>Vinh Bùi</h2>
            <p>Follow: <span>99</span></p>
            <p>Vote: <span>99</span></p>
            <p>surprise: <span>99</span></p>
          </div>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    );
  }
}
