import React from "react";

export class OverLay extends React.Component {
  constructor() {
    super();
    this.state = {
      height :0,
      value: ''
    }
  }
   componentDidMount() {
    const elheight = document.getElementsByClassName('header')[0].clientHeight;
    this.setState({height: elheight});
  }

  handleClick(){
    this.props.onUpdate(false);
    this.setState({value: ''});
  }

  handleChange(event){
    this.props.searchItems(event);
    this.setState({value: event.target.value})
  }

  focusInput(param) {
    if (param) {
      param.focus();
    }
  }

  render() {
    let display, value;
    let heightTop = {"top" : this.state.height};
    if (!this.props.hidden) {
      display = {"display" : 'none'}
    }else {
      display= {"display" : 'block'}
    }
    return (
      <div className = "overlay-component">
        <div style = {display} className="overlay" onClick ={this.handleClick.bind(this)}>
        </div>
        <div style = {heightTop, display} className="search">
          <input  type="text" ref = {this.focusInput.bind(this)} placeholder="Search..."  className ="input"
          value={this.state.value} onChange = {this.handleChange.bind(this)} />
        </div>
      </div>
      );
  }
}
