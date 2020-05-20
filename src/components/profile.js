import React from 'react';
import { Link } from 'gatsby';
import { useIdentityContext } from 'react-netlify-identity';

const Profile = ({ showModal }) => {
    const identity = useIdentityContext();
    const isLoggedIn = identity && identity.isLoggedIn;

    console.log(identity);
    const name = identity &&
        identity.user &&
        identity.user.user_metadata &&
        identity.user.user_metadata.full_name ?
         identity.user.user_metadata.full_name : 
         null;
    return isLoggedIn && (
        <div className="dashboard-header">
            <nav>
                <Link to="/dashboard/secret" activeClassName="active">Secret stuff</Link>
                <Link to="/dashboard/base" activeClassName="active">See your base</Link>
            </nav>
            <span>Logged in as {name}</span>
        </div>
    )
}

export default Profile;