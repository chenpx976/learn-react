'use strict';

var React = require('react/addons');
// var _ = require('underscore');
require('styles/CalcApp.less');
var evel = require('evel');
var CalcApp = React.createClass({
  mixins: [],
  getInitialState: function() {
    return {
      last: '',
      cur: '',
    };
  },
  getDefaultProps: function() {
    return {
      numberBtn: [7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 0, '.', '=', '/', 'C']
    };
  },
  onClick: function (elem) {
    var cur;
    var lastLetter;
    switch (elem) {
    case 'C':
      this.setState({
        last: '',
        cur: ''
      });
      break;
    case '=':
      try {
        this.setState({
          last: this.state.cur + '=',
          cur: evel(this.state.cur) + ''
        });
      } catch (e) {
        this.setState({
          last: this.state.cur + '=',
          cur: 'NaN'
        });
      }
      break;
    case '+':
    case '-':
    case '*':
    case '/':
      cur = this.state.cur;
      lastLetter = cur.slice(-1);
      if (lastLetter === '+' || lastLetter === '-' || lastLetter === '*' || lastLetter === '/'){
        this.setState({
          cur: cur.slice(0, -1) + elem
        });
      } else {
        this.setState({
          cur: this.state.cur + elem
        });
      }
      break;
    case '.':
      cur = this.state.cur;
      lastLetter = cur.slice(-1);
      if (lastLetter !== '.') {
        this.setState({
          cur: this.state.cur + elem
        });
      }
      break;
    default:
      this.setState({
        cur: this.state.cur === '0' ? elem : this.state.cur + elem
      });
      break;
    }
  },
  clearInput: function () {
    this.setState({
      last: '',
      cur: '',
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
        <div className="CalcApp container">
          <p>Content for CalcApp</p>

          <div className="col-md-offset-3 col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">React Calc</h3>
                </div>
                <div className="panel">
                  <input type="text" onClick={this.clearInput} readOnly value={this.state.cur.toString()} className="form-control cur" />
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
