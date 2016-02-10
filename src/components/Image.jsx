var React = require('react');


var Image = React.createClass({

  render: function() {

      var divStyle = {
        marginTop:10,
      }

      var divStyle2 = {
        backgroundColor: 'black',
        color: 'white',
        marginTop: 198


      }

      var divStyle3 = {
        backgroundColor: 'black',
        color: 'white',
        float: 'bottom',
      }


      var headingStyle = {
        height: 300,
        textAlign: 'center',
      }

      if (this.props.headingColor) {
          headingStyle.background = this.props.headingColor;
      }

      return (
          <div style={divStyle} className="col-xs-12">
            <div style={headingStyle} className="panel panel-primary">
              <div className="row panel-body">
                  <div style={divStyle2} className="col-xs-4">
                      <h3>{this.props.shotViews}</h3>
                      <p>Shot Views</p>
                  </div>
                  <div style={divStyle2} className="col-xs-4">
                      <h3>{this.props.likes}</h3>
                      <p>Likes</p>
                  </div>
                  <div style={divStyle2} className="col-xs-4">
                      <h3>{this.props.comments}</h3>
                      <p>Comments</p>
                  </div>
              </div>
            </div>

          </div>

      );


  }

});

module.exports = Image;
