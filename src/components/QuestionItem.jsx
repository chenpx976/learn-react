'use strict';

var React = require('react/addons');


require('styles/QuestionItem.less');

var QuestionItem = React.createClass({
  mixins: [],
  getInitialState: function() {
    return {};
  },
  voteUp: function () {
    var newCount = parseInt(this.props.voteCount, 10) + 1;
    this.props.onVote(this.props.questionKey, newCount);
  },
  voteDown: function () {
    var newCount = parseInt(this.props.voteCount, 10) - 1;
    this.props.onVote(this.props.questionKey, newCount);
  },
  getDefaultProps: function() {},
  componentWillMount: function() {},
  componentDidMount: function() {},
  componentDidUpdate: function() {},
  componentWillUnmount: function() {},
  render: function () {
    return (
        <div className="QuestionItem" key={this.props.key}>
            <div className="media-left">
              <button onClick={this.voteUp} className="btn btn-default">
                <span className="glyphicon glyphicon-chevron-up"></span>
                <span className="vote-count">{this.props.voteCount}</span>

              </button>
              <button onClick={this.voteDown} className="btn btn-default">
                <span className="glyphicon glyphicon-chevron-down"></span>
              </button>
            </div>
            <div className="media-body">
              <h4 className="media-heading">{this.props.title}</h4>
              <p>{this.props.des}</p>
            </div>
        </div>
      );
  }
});

module.exports = QuestionItem;
