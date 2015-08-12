'use strict';

var React = require('react/addons');
var _ = require('underscore');
require('styles/CalcApp.less');
var evel = require('evel');
var CalcApp = React.createClass({
  mixins: [],
  getInitialState: function() {
    return {
      inputText: '',
      preBtn: ''
    };
  },
  getDefaultProps: function() {
    return {
      numberBtn: [7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 0, '.', '=', '\/', 'C']

    };
  },
  onClick: function (elem) {
    var newValue = '';
    console.log(_.isNumber(elem));
    if (elem === '=') {
      if (this.state.preBtn !== '=') {
        newValue = evel(this.state.inputText);
      }
    } else if (elem === 'C') {
      newValue = '';
    }/* else if (_.isNumber(this.state.preBtn) === false && _.isNumber(elem) === false){
      this.setState({
        preBtn: elem
      });
      return;
    }*/else{
      newValue = this.state.inputText + elem;
    }

    this.setState({
      inputText: newValue,
      preBtn: elem
    });
  },
  clearInput: function () {
    this.setState({
      inputText: ''
    });
  },
  componentWillMount: function() {},
  componentDidMount: function() {},
  // shouldComponentUpdate: function(nextProps, nextState) {},
  // componentDidUpdate: function() {},
  componentWillUnmount: function() {},

  render: function () {
    var numberBtn = this.props.numberBtn.map(function(elem, index) {
      return <button key={index} onClick={this.onClick.bind(this, elem)} type="button" className="btn btn-default numberBtn">{elem}</button>;
    }.bind(this));
    return (
        <div className="CalcApp">
          <p>Content for CalcApp</p>

          <div className="col-md-offset-3 col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">React Calc</h3>
                </div>
                <div className="panel">
                  <input type="text" onClick={this.clearInput} readOnly value={this.state.inputText} className="form-control inputText" />
                </div>

                <div className="panel-body">
                    {numberBtn}
                </div>
            </div>
          </div>
        </div>
      );
  }
});

module.exports = CalcApp;
