'use strict';

var React = require('react/addons');


require('styles/CarouselApp.less');

var CarouselApp = React.createClass({
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
        <div className="CarouselApp">
          <p>Content for CarouselApp</p>
        </div>
      );
  }
});

module.exports = CarouselApp;
