var React = require('react');

var WebStats = React.createClass({

  render: function() {

        var divStyle = {
          marginTop: 10,

        }

        var divStyle2 = {
          height: 30
        }

        var divStyle3 = {
          marginTop: -13,
          fontWeight: 'bold',
          fontSize: 26
        }

        var headingStyle = {

        }

        if (this.props.headingColor)  {
            headingStyle.background = this.props.headingColor;
        }


        return (

            <div style={divStyle}>
              <div className="panel panel-primary">
                <div style={headingStyle} className="panel panel-heading">
                    <p>{this.props.title}</p>
                    <p style={divStyle3}>{this.props.webStat}</p>
                </div>
              <div style={divStyle2} className="panel panel-body"></div>
              </div>

            </div>

        );

      }

});

module.exports = WebStats;
