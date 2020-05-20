import React from 'react';
import { navigate } from 'gatsby';
import { useIdentityContext } from 'react-netlify-identity';

const PrivateRoute = ({component: Component, location, ...rest}) => {
    const identiy = useIdentityContext();
    const isLoggedIn = identiy && identiy.isLoggedIn;

    if (!isLoggedIn && location.pathname !== '/dashboard/login') {
        navigate('/dashboard/login', {replce: true});
        return null;
    }

    return (
        <Component {...rest} />
    );
}

export default PrivateRoute;