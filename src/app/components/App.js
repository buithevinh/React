import React from "react";
import { Header } from "./Header";
import { ListItem } from "./ListItem";
import { Footer } from "./Footer";
import {OverLay} from "./OverLay";

function replaceText(text){
    text = text.toLowerCase();
    text = text.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    text = text.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    text = text.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    text = text.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    text = text.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    text = text.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    text = text.replace(/đ/g, 'd');
    return text;
  }

export class App extends React.Component {
  constructor(props){
    super(props);
    var json ;
    this.state = {
      click: false,
      id: "VH001",
      json: [],
      items: [],
      loadData: []
    };
  }

  componentWillMount() {
    var that =  this;
    $.ajax({
      url: './app/data/data.json',
      dataType: 'json',
      cache: false,
      success: function(result) {
        that.setState({
          json: result,
        });
        let object = that.state.json;
        let data = that.state.loadData;
        for (var i = 0; i < object.length; i++) {
          if (i < 4) {
            data[i] = object[i];
          }
        }
        that.setState({
          loadData: data,
          items: data
        });
      },
      error: function( status, err) {
        console.error(status, err.toString());
      }
    });
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(event){
    if (!this.state.click) {
      let heightView  = event.target.documentElement.clientHeight;
      let scrollTop = event.target.scrollingElement.scrollTop + heightView;
      let length = $('.item').length;
      let heightScroll = $('.item').height() * length;
      if (scrollTop >= heightScroll) {
        let object = this.state.json;
        let data = this.state.loadData;

        for (let i = length; i < object.length; i++) {
          if (i < (length + 2)) {
            data.push(object[i]);
          }
        }
        if (data.length <= object.length) {
          if (data.length > length) {
            this.setState({
              loadData: data,
              items: data
            });
          }
        }
      }
    }
  }

  searchItems(event) {
    let items = this.state.json;
    let defaultItem = this.state.loadData;
    items = items.filter(function(item){
      return replaceText(item.title).indexOf(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({loadData: items})
  }


  onUpdate(param){
    if (!param && this.state.loadData.length == 0) {
      this.setState({loadData: this.state.items});
    }
    this.setState({
      click: param
    });
  }

  render() {
    return (
      <div className="wallpage">
        <div className="header">
          <Header onUpdate = {this.onUpdate.bind(this)} />
        </div>
        <OverLay hidden = {this.state.click} searchItems = {this.searchItems.bind(this)} onUpdate = {this.onUpdate.bind(this)}/>
        <div className="content">
          <ListItem json = {this.state.loadData}/>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    );
  }
}
