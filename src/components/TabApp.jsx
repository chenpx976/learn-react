'use strict';

var React = require('react/addons');
var TabNav = require('./TabNav.jsx');
var TabPanes = require('./TabPanes.jsx');

require('styles/TabApp.less');

var TabApp = React.createClass({
  mixins: [],
  getInitialState: function() {
    return this.props;
  },
  handleTabClick: function (item) {
    this.setState({
      activeTabId: item.id
    });
  },
  getDefaultProps: function() {
    return {
          activeTabId: 1,
          tabs: [
            {
              title: 'Home',
              content: 'Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.',
              id: 1
            },
            {
              title: 'Profile',
              content: 'Food truck fixie locavore, accusamus mcsweeney\'s marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.',
              id: 2
            }
          ]
        };
  },
  componentWillMount: function() {},
  componentDidMount: function() {

  },
  componentWillUnmount: function() {},

  render: function () {
    return (
        <div className="TabApp">
          <TabNav items={this.state.tabs}
            activeItemId={this.state.activeTabId}
            onTablClick={this.handleTabClick}
           />
          <TabPanes items={this.state.tabs}
            activeItemId={this.state.activeTabId}
           />
        </div>
      );
  }
});

module.exports = TabApp;
