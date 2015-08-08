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
      questions: questions,
      formDisplayed: false
    };

  },
  onToggleForm: function () {
    this.setState({
      formDisplayed: !this.state.formDisplayed
    });
  },
  onNewQuestion: function ( newQuestion ) {
    newQuestion.key = this.state.questions.length + 1;
    var newQuestions = this.state.questions.concat(newQuestion);
    newQuestions = this.sortQuestion(newQuestions);
    this.setState({
      questions: newQuestions
    });
  },
  sortQuestion: function (questions) {
    questions.sort(function (a, b) {
      return b.voteCount - a.voteCount;
    });
    return questions;
  },
  getDefaultProps: function() {},
  componentWillMount: function() {},
  componentDidMount: function() {},
  componentDidUpdate: function() {},
  componentWillUnmount: function() {},

  render: function () {
    return (
        <div className="QuestionApp">
          <div className="jumbotron text-center">
              <div className="container">
                <h1>React问答</h1>
                <ShowAddButton onToggleForm={this.onToggleForm} />
              </div>
          </div>
          <div className="main container">
            {this.state.formDisplayed}
            <QuestionForm onNewQuestion={this.onNewQuestion} onToggleForm={this.onToggleForm} formDisplayed={this.state.formDisplayed} />
            <QuestionList questions={this.state.questions} />
          </div>
        </div>
      );
  }
});

module.exports = QuestionApp;
