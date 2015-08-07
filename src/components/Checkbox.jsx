'use strict';

var React = require('react/addons');


require('styles/Checkbox.less');

var Checkbox = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    };
  },
  changeCheck: function () {
    this.setState({
      count: this.state.count + 1
    });
  },
  render: function () {
    return (
        <div className="Checkbox">
          {this.state.count}
          <button onClick={this.changeCheck}>点我</button>
        </div>
      );
  }
});

module.exports = Checkbox;
