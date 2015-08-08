'use strict';

var React = require('react/addons');


require('styles/ShowAddButton.less');

var ShowAddButton = React.createClass({
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
        <div className="ShowAddButton">
          <button id="add-question-btn" onClick={this.props.onToggleForm} className="btn btn-success">添加问题</button>
        </div>
      );
  }
});

module.exports = ShowAddButton;
