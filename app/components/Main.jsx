var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <div>
        <Nav/>
          <div>
            <p>Hello Timer World</p>
            {props.children}
          </div>
      </div>
    </div>
  );
}

module.exports = Main;
