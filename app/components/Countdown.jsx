var React = require('react'),
    Link  = require('react-router'),
    Clock = require('Clock');

var Countdown = React.createClass({
  render: function() {
    return (

      <div calassName="text-center">
        <h1 className="text-center page-title">Countdown Page!</h1>
        <Clock totalSeconds={129}/>
        <Controls/>
      </div>
    );
  }
});

module.exports = Countdown;
