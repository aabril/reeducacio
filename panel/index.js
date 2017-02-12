import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Dashboard from './components/pages/Dashboard';
import UserProfile from './components/pages/UserProfile';
import Tables from './components/pages/TableList';
import Typography from './components/pages/Typography'
import Icons from './components/pages/Icons';
import Notifications from './components/pages/Notifications';

import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';

// css required for the dashboard
require('bootstrap/dist/css/bootstrap.css');
require('./styles/Roboto.css');
require('./styles/light-bootstrap-dashboard.scss');
require('pixeden-stroke-7-icon/pe-icon-7-stroke/dist/pe-icon-7-stroke.css');
require('font-awesome/css/font-awesome.css');

var mountNode = document.getElementById('app');

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route name="dashboard" path="/dashboard" component={Dashboard} />
            <Route name="userprofile" path="/userprofile" component={UserProfile} />
            <Route name="tables" path="/tables" component={Tables} />
            <Route name="typography" path="/typography" component={Typography} />
            <Route name="icons" path="/icons" component={Icons} />
            <Route name="notifications" path="/notifications" component={Notifications} />
            <IndexRoute component={Dashboard} />
            <IndexRedirect to="dashboard" />
        </Route>
    </Router>
);

ReactDOM.render(routes, mountNode);
