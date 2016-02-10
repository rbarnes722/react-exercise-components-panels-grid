var React = require('react');
var ReactDOM = require('react-dom');
var Revenue = require('./components/Revenue.jsx');
var Image = require('./components/Image.jsx');
var Weather = require('./components/Weather.jsx');
var WebStats = require('./components/WebStats.jsx');

// ReactDOM.render(<List />, document.getElementById('ingredients'));
ReactDOM.render(<Revenue followers="20" monthIncome="$ 1250" yearIncome="$ 13865" />, document.getElementById('revenue'));
ReactDOM.render(<Image headingColor="blue" shotViews="15080" likes="12000" comments="5100"/>, document.getElementById('image'));
ReactDOM.render(<Image headingColor="purple" shotViews="15080" likes="12000" comments="5100"/>, document.getElementById('image2'));
ReactDOM.render(<Weather headingColor="orange"/>, document.getElementById('weather'));
ReactDOM.render(<WebStats headingColor="blue" title="New Visitors" webStat="1.5k"/>, document.getElementById('visitors'));
ReactDOM.render(<WebStats headingColor="purple" title="Bounce Rate" webStat="50%"/>, document.getElementById('bounce'));
ReactDOM.render(<WebStats headingColor="red" title="Searches" webStat="28%"/>, document.getElementById('search'));
ReactDOM.render(<WebStats headingColor="green" title="Traffic" webStat="140.5 kb"/>, document.getElementById('traffic'));
