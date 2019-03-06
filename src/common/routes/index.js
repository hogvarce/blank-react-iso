import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '@/common/App';
import Home from '@/common/components/Home';
import Userlist from "@/common/components/Userlist";
import AdminsList from '@/common/components/AdminsList';
import ErrorPage from '@/common/components/ErrorPage';

export default () => (
    <App>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Userlist} />
            <Route path="/admins" component={AdminsList} />
            <Route component={ErrorPage} />
        </Switch>
    </App>
);
