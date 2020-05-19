import React , { useEffect } from 'react';
import Layout from '../components/layout';
import Profile from '../components/profile';
import { Router } from '@reach/router';
import RouteBase from "../components/route-base";
import RouteSecret from "../components/route-sercet";
import RouteLogin from '../components/route-login';
import { navigate } from 'gatsby';

const Dashboard = ({location}) => {
    useEffect(() => {
        if (location.pathname.match(/^\/dashboard\/?$/)) {
            navigate('dashboard/login', {replace: true});
        }
    }, [location.pathname])
    return (
        <Layout>
            <Profile />
            <Router>
                <RouteBase path="/dashboard/base" />
                <RouteSecret path="/dashboard/secret" />
                <RouteLogin path="/dashboard/login" />
            </Router>
        </Layout>
    )
}

export default Dashboard;