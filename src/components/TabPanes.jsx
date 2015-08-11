'use strict';

var React = require('react/addons');


require('styles/TabPanes.less');

var TabPanes = React.createClass({
  mixins: [],
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {},
  componentWillMount: function() {},
  componentDidMount: function() {},
  componentWillUnmount: function() {},

  render: function () {
    var items = this.props.items.map(function(item) {
      return <div key={item.id} role="tabpanel" className={this.props.activeItemId === item.id ? 'active' : '' + 'tab-pane'} >
                  {item.content}
              </div>;
    }.bind(this));
    return (
        <div className="TabPanes tab-content">
          {items}
        </div>
      );
  }
});

module.exports = TabPanes;
