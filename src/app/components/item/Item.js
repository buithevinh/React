import React from "react";
import {Link} from 'react-router';



export class Item extends React.Component {

  render() {
    let item = {
      "id": this.props.id,
      "src": this.props.src,
      "address": this.props.address,
      "title": this.props.title,
      "time":  this.props.time,
      "location": this.props.location
    };
    let src =  this.props.src;

   if (typeof src !== "string") {
      src = this.props.src[0].image;
   }
    return (

        <div className="item fade-enter-active">
          <Link to ={{pathname: "/view", state: item }} >
            <img src={src}/>
            <div className="caption">
              <h3 className="title">{this.props.title}</h3>
              <p>{this.props.time}</p>
              <p>{this.props.location  + "-" + this.props.address  }</p>
            </div>
          </Link>
        </div>

    );
  }
}
