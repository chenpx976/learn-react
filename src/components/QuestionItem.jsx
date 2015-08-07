'use strict';

var React = require('react/addons');


require('styles/QuestionItem.less');

var QuestionItem = React.createClass({
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
        <div className="QuestionItem">
          <p>Content for QuestionItem</p>
        </div>
      );
  }
});

module.exports = QuestionItem;
