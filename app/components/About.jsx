var React = require('react');


var About = (props) => {
  return (
    <div>
    <h1 className="text-center">Welcome to the about page</h1>
    <p>This is a weather application build on React</p>
    <p>Here are some of the tools I used:</p>
    <ul>
      <li>
        <a href="https://facebook.github.io/react">React</a>
      </li>
      <li>
        <a href="http://openweathermap.org">Weather API</a>
      </li>
    </ul>
    </div>
  )
};
module.exports = About;
