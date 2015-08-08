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
  shouldComponentUpdate: function() {},
  componentDidUpdate: function() {},
  componentWillUnmount: function() {},

  render: function () {
    var styleObj = {
      display: this.props.formDisplayed ? 'block' : 'none'
    };
    return (
        <div className="QuestionForm" style={ styleObj }>
        <form name="addQuestion" className="clearfix">
          <div className="form-group">
            <label htmlFor="qtitle">问题</label>
            <input type="text" className="form-control" id="qtitle" placeholder="您的问题的标题" />
          </div>
          <textarea className="form-control" rows="3" placeholder="问题的描述"></textarea>
          <button className="btn btn-success pull-right">确认</button>
          <button className="btn btn-default pull-right">取消</button>
        </form>
        </div>
      );
  }
});

module.exports = QuestionForm;
