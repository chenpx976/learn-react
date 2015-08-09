'use strict';

var React = require('react/addons');


require('styles/TabNav.less');

var TabNav = React.createClass({
  mixins: [],
  getInitialState: function() {
    return {};
  },
  onTablClick: function (item) {
    this.props.onTablClick(item);
  },
  getDefaultProps: function() {},
  componentWillMount: function() {},
  componentDidMount: function() {},
  componentWillUnmount: function() {},

  render: function () {
    var items = this.props.items.map(function(item) {
      return <li key={item.id} onClick={this.onTablClick.bind(this, item)} role="presentation" className={this.props.activeItemId === item.id ? 'active' : ''} >
                  <a href="#home">{item.title}</a>
              </li>;
    }.bind(this));
    return (
        <div className="TabNav">
          <ul className="nav nav-tabs" role="tablist">
            {items}
          </ul>
        </div>
      );
  }
});

module.exports = TabNav;
