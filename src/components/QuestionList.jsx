'use strict';

var React = require('react/addons');
var QuestionItem = require('./QuestionItem.jsx');

require('styles/QuestionList.less');

var QuestionList = React.createClass({
  mixins: [],
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {},
  componentWillMount: function() {},
  componentDidMount: function() {},
  componentDidUpdate: function() {},
  componentWillUnmount: function() {},

  render: function () {
    var questions = this.props.questions;
    if (!Array.isArray(questions)) {
      throw new Error('this.props.questions is must array');
    }
    var questionComps = questions.map(function(elem) {
      return <QuestionItem key={elem.key} title={elem.title} des={elem.des} questionKey={elem.key} voteCount={elem.voteCount} onVote={ this.props.onVote } />;
    }.bind(this));
    return (
        <div className="QuestionList">
            {questionComps}
        </div>
      );
  }
});

module.exports = QuestionList;
