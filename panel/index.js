import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';

import Sidebar from './components/Sidebar';


import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Articles from './pages/Articles';
import Rewards from './pages/Rewards';
import Settings from './pages/Settings';



class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
          <div>
              <Sidebar/>
              {this.props.children}
          </div>
        );
    }
}



const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route name="dashboard" path="/dashboard" component={Dashboard} />
            <Route name="users" path="/users" component={Users} />
            <Route name="articles" path="/articles" component={Articles} />
            <Route name="rewards" path="/rewards" component={Rewards} />
            <Route name="settings" path="/settings" component={Settings} />
            
            <IndexRoute component={Dashboard} />
            <IndexRedirect to="dashboard" />
        </Route>
    </Router>
);

// class Panel extends React.Component {
//   render() {
//     return (
//       <h3>panel</h3>
//     );
//   }
// }

ReactDOM.render(routes, document.getElementById('panelApp'));