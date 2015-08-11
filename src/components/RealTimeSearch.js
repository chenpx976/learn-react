'use strict';

var React = require('react/addons');


require('styles/RealTimeSearch.less');
var RealTimeSearch = React.createClass({
  mixins: [],
  getInitialState: function() {
    return {
      searchString: ''
    };
  },
  handleChange: function (e) {
    this.setState({
      searchString: e.target.value
    });
  },
  getDefaultProps: function() {
    return {
      items: [

          { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
          { name: 'AngularJS', url: 'https://angularjs.org/'},
          { name: 'jQuery', url: 'http://jquery.com/'},
          { name: 'Prototype', url: 'http://www.prototypejs.org/'},
          { name: 'React', url: 'http://facebook.github.io/react/'},
          { name: 'Ember', url: 'http://emberjs.com/'},
          { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
          { name: 'Dojo', url: 'http://dojotoolkit.org/'},
          { name: 'Mootools', url: 'http://mootools.net/'},
          { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
          { name: 'Lodash', url: 'http://lodash.com/'},
          { name: 'Moment', url: 'http://momentjs.com/'},
          { name: 'Express', url: 'http://expressjs.com/'},
          { name: 'Koa', url: 'http://koajs.com/'}
      ]
    };
  },
  componentWillMount: function() {},
  componentDidMount: function() {},
  componentWillUnmount: function() {},

  render: function () {
    var libraries = this.props.items;
    var searchString = this.state.searchString.trim().toLowerCase();
    if (searchString.length > 0) {
      libraries = libraries.filter(function(elem) {
        return elem.name.toLowerCase().match(searchString);
      });
    };
    return (
        <div className="RealTimeSearch">
          <p>Content for RealTimeSearch</p>
          <div className="input-group">
            <input type="text" className="form-control" value={this.state.searchString} onChange={this.handleChange} />
            <span className="input-group-btn">
              <button type="button" className="btn btn-default">Go!</button>
            </span>
          </div>
          <ul className="list-group">
            {
              libraries.map(function(elem, index) {
                return <li className="list-group-item" key={index} >{elem.name} <a href="{elem.url}">{elem.url}</a> </li>;
              })
            }

          </ul>
        </div>
      );
  }
});

module.exports = RealTimeSearch;
