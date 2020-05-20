import React , { useEffect, useState } from 'react';
import Layout from '../components/layout';
import Profile from '../components/profile';
import { Router } from '@reach/router';
import RouteBase from "../components/route-base";
import RouteSecret from "../components/route-sercet";
import RouteLogin from '../components/route-login';
import { navigate } from 'gatsby';
import IndentifyModal from "react-netlify-identity-widget";


import 'react-netlify-identity-widget/styles.css';
import PrivateRoute from '../components/private-route';

const Dashboard = ({location}) => {

    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        if (location.pathname.match(/^\/dashboard\/?$/)) {
            navigate('dashboard/login', {replace: true});
        }
    }, [location.pathname])

    const showModal = () => setVisible(true);

    return (
        <Layout>
            <Profile />
            <Router>
                <PrivateRoute component={RouteBase} path="/dashboard/base" />
                <PrivateRoute component={RouteSecret} path="/dashboard/secret" />
                <RouteLogin path="/dashboard/login"  showModal={showModal} />
            </Router>
            <IndentifyModal showDialog={isVisible} onCloseDialog={() => setVisible(false)}/>
        </Layout>
    )
}

export default Dashboard;