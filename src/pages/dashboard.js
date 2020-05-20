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

const Dashboard = ({location}) => {

    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        if (location.pathname.match(/^\/dashboard\/?$/)) {
            navigate('dashboard/login', {replace: true});
        }
    }, [location.pathname])

    const toggleModal = () => setVisible(!isVisible);

    return (
        <Layout>
            <Profile />
            <Router>
                <RouteBase path="/dashboard/base" />
                <RouteSecret path="/dashboard/secret" />
                <RouteLogin path="/dashboard/login"  toggleModal={toggleModal} />
            </Router>
            <IndentifyModal showDialog={isVisible} onCloseDialog={() => setVisible(false)}/>
        </Layout>
    )
}

export default Dashboard;