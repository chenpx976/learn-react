'use strict';

var React = require('react/addons');


require('styles/LikeButton.less');

var LikeButton = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      liked: 'true'
    };
  },
  changeCheck: function () {
    this.setState({
      count: this.state.count + 1,
      liked: !this.state.liked
    });
  },
  render: function () {
    return (
        <div className="LikeButton">
        <h1>{this.state.liked}</h1>
          {this.state.count}
          <button onClick={this.changeCheck}>点我</button>
        </div>
      );
  }
});

module.exports = LikeButton;
