'use strict';

var React = require('react/addons');


require('styles/QuestionForm.less');

var QuestionForm = React.createClass({
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
        <div className="QuestionForm">
          <p>Content for QuestionForm</p>
        </div>
      );
  }
});

module.exports = QuestionForm;
