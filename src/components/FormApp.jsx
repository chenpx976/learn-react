'use strict';

var React = require('react/addons');

require('styles/FormApp.less');

var FormApp = React.createClass({
  mixins: [],
  getInitialState: function() {
    return {
      inputValue: 'input value',
      selectValue: 'A',
      radioValue: 'B',
      textareaValue: 'some text here ....'
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
        <div className="FormApp">
          <form action="" onSubmit={this.handleSubmit}>
            <input type="text" name="" id="input" className="form-control" defaultValue="default value" />
            <br/>
            <select name="" id="input" defaultValue="A" class="form-control">
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
            <br/>
            <p>radio button!</p>
            <input type="radio" name="goodRadi" value="A" />
            <input type="radio" name="goodRadi" value="B" />
            <input type="radio" name="goodRadi" value="C" />
            <br/>
            <textarea name="" id="" cols="30" defaultValue="text is here" rows="10"></textarea>
          </form>
        </div>
      );
  }
});

module.exports = FormApp;
