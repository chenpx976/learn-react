'use strict';

var React = require('react/addons');
var QuestionApp = require('./QuestionApp.jsx');
// CSS
require('normalize.css');
require('../styles/main.css');
var LearnReactApp = React.createClass({
  render: function() {
    return (
      <div className="main">
        <QuestionApp />
      </div>
    );
  }
});

React.render(<LearnReactApp />, document.getElementById('content')); // jshint ignore:line

module.exports = LearnReactApp;
