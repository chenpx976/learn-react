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
      row: 12,
      col: 12
    };
  },
  onClick: function (elem) {
    var newBoard = this.state.board;
    var x = elem.x;
    var y = elem.y;
    if (!elem.item) {
      newBoard[x][y] = this.state.flag ? '1' : '2';
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
        return <div onClick={self.onClick.bind(self, {x: x, y: y, item: elem})} className="GameBtn">{showText}</div>;
      });

      });
    var styleObj = {
      width: 40 * this.props.col,
      height: 40 * this.props.row,
    };
    return (
        <div className="GoGame container">
                  <button type="button" onClick={this.clearBoard} className="btn btn-default">重新开始</button>

                <div className="game-board" style={styleObj}>
                {GameBtn}
                </div>
        </div>
      );
  }
});

module.exports = GoGame;
