var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div className='text-center page-title'>
      <h1 className='text-center'>About</h1>
      <p className='text-center'>Made in 2017 on a React Course</p>
      <p className='text-center'><a href="https://github.com/stanislawcronberg/WeatherApp" target='_blank'>GitHub Repo</a></p>
      <p><Link to='/'>Return Home</Link></p>
    </div>
  )
};

module.exports = About;
