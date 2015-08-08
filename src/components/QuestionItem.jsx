'use strict';

var React = require('react/addons');


require('styles/QuestionItem.less');

var QuestionItem = React.createClass({
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
    return (
        <div className="QuestionItem" key={this.props.key}>
            <div className="media-left">
              <button className="btn btn-default">
                <span className="glyphicon glyphicon-chevron-up"></span>

              </button>
              <span className="vote-count">{this.props.voteCount}</span>
              <button className="btn btn-default">
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
