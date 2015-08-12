'use strict';

var React = require('react/addons');


require('styles/GoGame.less');

var GoGame = React.createClass({
  mixins: [],
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {},
  componentWillMount: function() {},
  componentDidMount: function() {},
  shouldComponentUpdate: function() {},
  componentDidUpdate: function() {},
  componentWillUnmount: function() {},

  render: function () {
    return (
        <div className="GoGame">
          <p>Content for GoGame</p>
        </div>
      );
  }
});

module.exports = GoGame;
