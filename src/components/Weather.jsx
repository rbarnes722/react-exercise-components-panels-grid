var React = require('react');

var Weather = React.createClass ({

  render: function() {

      var divStyle = {
        marginTop:10
      }

      var headingStyle = {
        height:150,
        textAlign: 'center',
        color: 'white'

      }

      if (this.props.headingColor) {
          headingStyle.background = this.props.headingColor;
      }

    return (

        <div style={divStyle}>
            <div style={headingStyle} className="panel panel-primary">
                <h1>18&deg;</h1>
                <p>Paris</p>
            </div>
        </div>

    );

  }

});

module.exports = Weather;
