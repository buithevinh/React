import React from "react";
var ReactDOM = require('react-dom')
export class GoogleMap extends React.Component {
  componentDidMount(){
    var sitePoint =  new google.maps.LatLng(15.7481293, 101.4153941);
    var mapOptions = {
      zoom: 15,
      center: sitePoint
    }
    var map = new google.maps.Map(ReactDOM.findDOMNode(this), mapOptions);
    var geocoder = new google.maps.Geocoder();
    let address = this.props.address;
    geocoder.geocode({'address': address}, function(result, status){
      if (status === "OK") {
        map.setCenter(result[0].geometry.location);
        var marker = new google.maps.Marker({
          map: map,
          position: result[0].geometry.location,
          animation: google.maps.Animation.DROP,
          draggble: true
        });
      }
    });
   this.setState({
       map: map
   });
  }
  render(){
    return (
       <div id="map"></div>
      )
  }
}
