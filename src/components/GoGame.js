'use strict';

var React = require('react/addons');


require('styles/GoGame.less');

var GoGame = React.createClass({
  mixins: [],
  getInitialState: function() {
    return {
      borad: this.props.testborad,
      flag: true
    };
  },
  getDefaultProps: function() {
    return {
      testborad: [
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0
      ]
    };
  },
  onClick: function (elem) {
    console.log(this.props.testborad);
    var index = elem.key;
    var newBorad = this.state.borad;
    if (!elem.item) {
      newBorad[index] = this.state.flag ? 'Ⅹ' : 'O';
      this.setState({
        borad: newBorad,
        flag: !this.state.flag
      });
    }
  },
  clearBorad: function () {
    var newBorad = this.state.borad;
    newBorad.forEach(function (elem, index) {
      newBorad[index] = 0;
    });
    console.dir(newBorad);
    this.setState({
      borad: newBorad,
      flag: this.state.flag
    });
  },
  componentWillMount: function() {},
  componentDidMount: function() {},
  // shouldComponentUpdate: function() {},
  // componentDidUpdate: function() {},
  componentWillUnmount: function() {},

  render: function () {
    var GameBtn = this.state.borad.map(function(elem, index) {
      var showText = '十';
      if (elem) {
        showText = elem;
      }
      return <div key={index} onClick={this.onClick.bind(this, {key: index, item: elem})} className="GameBtn">{showText}</div>;
    }.bind(this));
    return (
        <div className="GoGame container">
          <div className="col-md-offset-3 col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Content for GoGame</h3>
                  <button type="button" onClick={this.clearBorad} className="btn btn-default">重新开始</button>
                </div>

                <div className="panel-body">
                {GameBtn}
                </div>
            </div>
          </div>
        </div>
      );
  }
});

module.exports = GoGame;
