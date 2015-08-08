'use strict';

var React = require('react/addons');


require('styles/ToggleShow.less');

var ToggleShow = React.createClass({
  getInitialState: function() {
    return {
      toggle: true,
      msg: 0
    };
  },
  handleClick: function () {
    this.setState({
      toggle: !this.state.toggle,
      msg: this.state.msg + 1
    });
  },
  render: function () {
    var styleObj = {
      display: this.state.toggle ? 'display' : 'none'
    };
    return (
        <div className="ToggleShow">
          <p style={ styleObj } >Content for ToggleShow</p>
          <button onClick={this.handleClick} >Toggle {this.state.msg}</button>
        </div>
      );
  }
});

module.exports = ToggleShow;
