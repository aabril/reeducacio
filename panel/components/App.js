var React = require('react');
import Sidebar from './dashboard/Sidebar';
import NavTop from './dashboard/NavTop';

var App = React.createClass({

    render: function() {

    return (
          <div className="wrapper">
              <Sidebar bgcolor="purple" title="vIDM Approval"/>
              <div className="main-panel">
                  <NavTop rout={this.props.routes}/>

                  <div className="content">
                      <div className="container-fluid">
                          <div className="row">
                              {this.props.children}
                          </div>
                      </div>
                  </div>

              </div>
          </div>
    );
  }

});

module.exports = App;
