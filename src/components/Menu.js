'use strict';

var React = require('react/addons');


require('styles/Menu.less');

var Menu = React.createClass({
  mixins: [],
  getInitialState: function() {
    return {
      focused: 0
    };
  },
  onClick: function (index) {
    this.setState({
      focused: index
    });
  },
  getDefaultProps: function() {
    return {
      items: ['Home', 'Services', 'About', 'Contact Us']
    };
  },
  componentWillMount: function() {},
  componentDidMount: function() {},
  componentWillUnmount: function() {},

  render: function () {
    var self = this;
    return (
        <div className="Menu">
          <p>Selected: {this.props.items[this.state.focused]} </p>
          <ul>{
            this.props.items.map(function(elem, index) {
              var style = '';
              if (self.state.focused === index) {
                style = 'focused';
              }
              return <li key={index} className={style} onClick={self.onClick.bind(self, index)} >{elem}</li>;
            })
          }
          </ul>
        </div>
      );
  }
});

module.exports = Menu;
