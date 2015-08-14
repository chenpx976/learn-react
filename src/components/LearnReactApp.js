'use strict';

var React = require('react/addons');
var QuestionApp = require('./QuestionApp.jsx');
var TabApp = require('./TabApp.jsx');
var Menu = require('./Menu.js');
var RealTimeSearch = require('./RealTimeSearch.js');
var CalcApp = require('./CalcApp.js');
var GoGame = require('./GoGame.js');
var Checkbox = require('./Checkbox.jsx');
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
        <Menu />
        <RealTimeSearch />
        <CalcApp />
        <GoGame />
        <Checkbox />
      </div>
    );
  }
});

React.render(<LearnReactApp />, document.getElementById('content')); // jshint ignore:line

module.exports = LearnReactApp;
