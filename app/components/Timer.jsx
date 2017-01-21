var React = require('react'),
    Link  = require('react-router'),
    Clock = require('Clock');

var Timer = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="text-center page-title">Timer Page!</h1>
      </div>
    );
  }
});

module.exports = Timer;
