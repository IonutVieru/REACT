var React = require('react');
var {link} = require('react-router');

var Examples = (props) =>{
  return (
    <div>
    <h1 className="text-center">Examples</h1>
    <p>Here are a few example locations to try out:</p>
    <ol>
      <li>
        <link to='/?location=Vaslui'>Vaslui, VS</link>
      </li>
      <li>
        <link to='/?location=Bucharest'>Bucharest, B</link>
      </li>
    </ol>
    </div>
  )
};
module.exports = Examples;
