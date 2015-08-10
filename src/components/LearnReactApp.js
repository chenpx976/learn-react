'use strict';

var React = require('react/addons');
var QuestionApp = require('./QuestionApp.jsx');
var TabApp = require('./TabApp.jsx');
var Dropdown = require('./Dropdown.jsx');
// CSS
require('normalize.css');
require('../styles/main.css');
var LearnReactApp = React.createClass({
  render: function() {
      var tabDate = {
          activeTabId: 1,
          tabs: [
            {
              title: 'Android',
              content: '索尼大法好',
              id: 1
            },
            {
              title: 'Apple',
              content: '水果十块钱一斤',
              id: 2
            }
          ]
        };
    return (
      <div className="main">
        <QuestionApp />
        <TabApp activeTabId={tabDate.activeTabId}
        tabs={tabDate.tabs}
         />
         <TabApp />
        <Dropdown />
      </div>
    );
  }
});

React.render(<LearnReactApp />, document.getElementById('content')); // jshint ignore:line

module.exports = LearnReactApp;
