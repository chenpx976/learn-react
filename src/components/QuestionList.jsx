'use strict';

var React = require('react/addons');
var QuestionItem = require('./QuestionItem.jsx');

require('styles/QuestionList.less');

var QuestionList = React.createClass({
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
        <div className="QuestionList">
          <p>Content for QuestionList</p>
          <QuestionItem />
        </div>
      );
  }
});

module.exports = QuestionList;
