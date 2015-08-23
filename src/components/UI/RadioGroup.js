'use strict';

var React = require('react/addons');


require('styles/UI/RadioGroup.less');

var RadioGroup = React.createClass({
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
        <div className="RadioGroup">
          <div class="radio">
            <label>
              <input type="radio" name="" id="input" value="" checked="checked" />
              Radio Box
            </label>
          </div>
        </div>
      );
  }
});

module.exports = RadioGroup;
