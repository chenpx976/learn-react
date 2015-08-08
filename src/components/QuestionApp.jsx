'use strict';

var React = require('react/addons');
var ShowAddButton = require('./ShowAddButton.jsx');
var QuestionList = require('./QuestionList.jsx');
var QuestionForm = require('./QuestionForm.jsx');
require('styles/QuestionApp.less');

var QuestionApp = React.createClass({
  getInitialState: function() {
    var questions = [
    {
      key: 1,
      title: '写React是一种怎样的体检？',
      des: '爽啊！',
      voteCount: 10
    },
    {
      key: 2,
      title: '写业务是怎样一种体验？',
      des: '！！！！！！！',
      voteCount: 10
    }
    ];
    return {
      questions: questions
    };

  },
  getDefaultProps: function() {},
  componentWillMount: function() {},
  componentDidMount: function() {},
  shouldComponentUpdate: function() {},
  componentDidUpdate: function() {},
  componentWillUnmount: function() {},

  render: function () {
    return (
        <div className="QuestionApp">
          <div className="jumbotron text-center">
              <div className="container">
                <h1>React问答</h1>
                <ShowAddButton />
              </div>
          </div>
          <div className="main container">
            <QuestionForm />
            <QuestionList questions={this.state.questions} />
          </div>
        </div>
      );
  }
});

module.exports = QuestionApp;
