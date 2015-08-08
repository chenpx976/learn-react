'use strict';

var React = require('react/addons');


require('styles/QuestionForm.less');

var QuestionForm = React.createClass({
  mixins: [],
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {},
  componentWillMount: function() {},
  componentDidMount: function() {},
  componentDidUpdate: function() {},
  componentWillUnmount: function() {},
  handleForm: function (e) {
    e.preventDefault();
    if (!this.refs.title.getDOMNode().value || !this.refs.des.getDOMNode().value) {
      return;
    }
    var newQuestion = {
      title: this.refs.title.getDOMNode().value,
      des: this.refs.des.getDOMNode().value,
      voteCount: 0
    };
    this.refs.addQuestionForm.getDOMNode().reset();
    this.props.onNewQuestion(newQuestion);
  },
  render: function () {
    var styleObj = {
      display: this.props.formDisplayed ? 'block' : 'none'
    };
    return (
        <div className="QuestionForm" style={ styleObj }>
        <form ref="addQuestionForm" name="addQuestion" className="clearfix" onSubmit={this.handleForm} >
          <div className="form-group">
            <label htmlFor="qtitle">问题</label>
            <input ref="title" type="text" className="form-control" id="qtitle" placeholder="您的问题的标题" />
          </div>
          <textarea ref="des" className="form-control" rows="3" placeholder="问题的描述"></textarea>
          <button className="btn btn-success pull-right">确认</button>
          <button onClick={this.props.onToggleForm} className="btn btn-default pull-right">取消</button>
        </form>
        </div>
      );
  }
});

module.exports = QuestionForm;
