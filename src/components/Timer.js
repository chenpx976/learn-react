'use strict';

var React = require('react/addons');


require('styles/Timer.less');

var Timer = React.createClass({
  mixins: [],
  getInitialState: function() {
    return {
      elapsed: 0
    };
  },
  getDefaultProps: function() {
    return {
      start: Date.now()
    };
  },
  componentWillMount: function() {},
  componentDidMount: function() {
    this.timer = setInterval(this.tick, 50);
  },
  componentWillUnmount: function() {
    clearInterval(this.timer);
  },
  tick: function () {
    this.setState({
      elapsed: new Date() - this.props.start
    });
  },
  render: function () {
    var elapsed = Math.round(this.state.elapsed / 100);
    var seconds = (elapsed / 10).toFixed(1);
    return (
        <div className="Timer">
          <p>Content for Timer</p>
          <p>{seconds}</p>
        </div>
      );
  }
});

module.exports = Timer;
