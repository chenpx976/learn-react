'use strict';

var React = require('react/addons');
var QuestionList = require('./QuestionList.jsx');
var QuestionForm = require('./QuestionForm.jsx');
require('styles/QuestionApp.less');

var QuestionApp = React.createClass({
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
        <div className="QuestionApp">
          <p>Content for QuestionApp</p>
          <QuestionList />
          <QuestionForm />
        </div>
      );
  }
});

module.exports = QuestionApp;
