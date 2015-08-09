'use strict';

var React = require('react/addons');


require('styles/Dropdown.less');

var Dropdown = React.createClass({
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
        <div className="Dropdown">
          <p>Content for Dropdown</p>
        </div>
      );
  }
});

module.exports = Dropdown;
