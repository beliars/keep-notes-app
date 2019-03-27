import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = (props: any) => {
    const {location} = props;
    return (
        <div style={{width: '100%', textAlign: 'center'}}>
            <h3>
                404 - Not found!
            </h3>
            <p>No match for <code>{location.pathname}</code></p>
            <p><Link to="/">Return to Home Page</Link></p>
        </div>
    );
};

export default NotFound;
