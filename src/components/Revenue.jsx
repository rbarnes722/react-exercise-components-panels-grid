var React = require('react');

var Revenue = React.createClass({
  render: function() {

      var divStyle = {
          marginTop: 10
      }

      var divStyle2 = {
          fontWeight: 'bold',
      }



      var headingStyle = {

      }

      if (this.props.headingColor) {
          headingStyle.background = this.props.headingColor;
      }

      return (

        <div style={divStyle}>
               <div className="col-sm-4">
                 <div className="panel panel-default">
                     <div style={headingStyle} className="panel-heading">
                         <h3 style={divStyle2}>{this.props.followers}</h3>
                         <p>New followers added this month</p>
                     </div>
                 </div>
               </div>
               <div className="col-sm-4">
                 <div className="panel panel-default">
                     <div style={headingStyle} className="panel-heading">
                         <h3 style={divStyle2}>{this.props.monthIncome}</h3>
                         <p>Average Monthly Income</p>
                     </div>
                </div>
               </div>
               <div className="col-sm-4">
                 <div className="panel panel-default">
                     <div style={headingStyle} className="panel-heading">
                         <h3 style={divStyle2}>{this.props.yearIncome}</h3>
                         <p>Average Yearly Income</p>
                     </div>
                 </div>
               </div>
        </div>

            );
        }

});

module.exports = Revenue;
