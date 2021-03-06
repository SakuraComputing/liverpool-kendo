import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AboutPage from '../components/About';
import LinkPage from '../components/Link';
import PhotoPage from '../components/PhotoPage';
import Video from '../components/Video';
import KendoStudy from '../components/KendoStudy';
import Events from '../components/Events';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <PrivateRoute path="/about" component={AboutPage}/>
                <PrivateRoute path="/kendolink" component={LinkPage} />
                <PrivateRoute path="/photo" component={PhotoPage} />
                <PrivateRoute path="/video" component={Video}/>
                <PrivateRoute path='/study' component={KendoStudy}/>
                <PrivateRoute path='/events' component={Events}></PrivateRoute>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
