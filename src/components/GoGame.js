'use strict';

var React = require('react/addons');


require('styles/GoGame.less');

var GoGame = React.createClass({
  mixins: [],
  getInitialState: function() {
    var initboard = [];
    for (var i = 0; i < this.props.row; i++) {
      initboard[i] = [];
      for (var j = 0; j < this.props.col; j++) {
        initboard[i][j] = 0;
      }
    }
    return {
      board: initboard,
      flag: true
    };
  },
  getDefaultProps: function() {
    return {
      row: 8,
      col: 8
    };
  },
  onClick: function (elem) {
    var newBoard = this.state.board;
    console.dir(newBoard);
    var x = elem.x;
    var y = elem.y;
    console.log(newBoard[x][y]);
    if (!elem.item) {
      newBoard[x][y] = this.state.flag ? 'Ⅹ' : 'O';
      this.setState({
        board: newBoard,
        flag: !this.state.flag
      });
    }
  },
  clearBoard: function () {
    var initboard = [];
    for (var i = 0; i < this.props.row; i++) {
      initboard[i] = [];
      for (var j = 0; j < this.props.col; j++) {
        initboard[i][j] = 0;
      }
    }
    this.setState({
      board: initboard,
      flag: this.state.flag
    });
  },
  componentWillMount: function() {},
  componentDidMount: function() {},
  // shouldComponentUpdate: function() {},
  // componentDidUpdate: function() {},
  componentWillUnmount: function() {},

  render: function () {
    var self = this;
    var GameBtn = this.state.board.map(function(item, x) {
      return item.map(function(elem, y) {
        var showText = '十';
        if (elem) {
          showText = elem;
        }
        return <div  onClick={self.onClick.bind(self, {x: x, y: y, item: elem})} className="GameBtn">{showText}</div>;
      }.bind(self));

      });
    return (
        <div className="GoGame container">
          <div className="col-md-offset-3 col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Content for GoGame</h3>
                  <button type="button" onClick={this.clearBoard} className="btn btn-default">重新开始</button>
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
