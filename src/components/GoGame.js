'use strict';

var React = require('react/addons');


require('styles/GoGame.less');

var GoGame = React.createClass({
  mixins: [],
  getInitialState: function() {
    var state = this.init();
    return state;
  },
  getDefaultProps: function() {
    return {
      row: 12,
      col: 12,
    };
  },
  onClick: function (elem) {
    var newBoard = this.state.board;
    var x = elem.x;
    var y = elem.y;
    if (!elem.item) {
      newBoard[x][y] = this.state.flag ? '1' : '2';
      // 胜负判断
      var isWin = this.isWin(x, y, newBoard);
      if (isWin) {
        this.setState({
          board: this.state.board,
        });
      } else{
        this.setState({
          board: newBoard,
          flag: !this.state.flag,
          step: this.state.step + 1,
        });
      }
    }
  },
  isWin: function (x, y, board) {
    if (this.state.step > 8) {
      board.forEach(function (col) {
        console.log(col);
      });
    }
    // console.dir(board);

  },
  init: function () {
    var initboard = [];
    for (var i = 0; i < this.props.row; i++) {
      initboard[i] = [];
      for (var j = 0; j < this.props.col; j++) {
        initboard[i][j] = 0;
      }
    }
    return {
      board: initboard,
      flag: true,
      step: 0,
    };
  },
  clearBoard: function () {
    var state = this.init();
    this.setState(state);
  },
  componentWillMount: function() {},
  componentDidMount: function() {},
  // shouldComponentUpdate: function(nextProps, nextState) {},
  // componentDidUpdate: function() {},
  componentWillUnmount: function() {},

  render: function () {
    var self = this;
    var nextStep = this.state.flag ? '1' : '2';
    var GameBtn = this.state.board.map(function(item, x) {
      return item.map(function(elem, y) {
        var showText = '十';
        if (elem) {
          showText = elem;
        }
        return <div onClick={self.onClick.bind(self, {x: x, y: y, item: elem})} className="GameBtn">{showText}</div>;
      });

      });
    var styleObj = {
      width: 40 * this.props.col,
      height: 40 * this.props.row,
    };
    return (
        <div className="GoGame container">
          <button className="btn btn-default">轮到{nextStep}</button>
          <button className="btn btn-default">第几步{this.state.step}</button>
          <button type="button" onClick={this.clearBoard} className="btn btn-default">重新开始</button>
          <div className="game-board" style={styleObj}>
          {GameBtn}
          </div>
        </div>
      );
  }
});

module.exports = GoGame;
