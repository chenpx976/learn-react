'use strict';

var React = require('react/addons');


require('styles/Checkbox.less');

var Checkbox = React.createClass({
  getDefaultProps: function() {
    return {
      defaultChecked: false,
      onChange(){}
    };
  },
  getInitialState: function() {
    var state = {};
    var props = this.props;
    if ('checked' in props) {
      state.checked = props.checked;
    } else{
      state.checked = props.defaultChecked;
    }
    return state;
  },
  onClick: function () {
    var nextChecked = !this.state.checked;
    if (!('checked' in this.props)) {
      this.setState({
        checked: nextChecked
      });
    }
    this.props.onChange(nextChecked);
  },
  render: function () {
    var state = this.state;
    var style = {
      border: '1px solid red',
      display: 'inline-block'
    };
    if (state.checked) {
      style.backgroundColor = 'red';
    }
    return (
        <div className="Checkbox">
            <div style={style} onClick={this.onClick} className="box"></div>
        </div>
      );
  }
});

module.exports = Checkbox;
