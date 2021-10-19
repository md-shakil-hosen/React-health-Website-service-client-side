import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className='my-5'>
                <span>Loading..</span>
            </div>
        );
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.displayName ? (
                children
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                />
            )
            }
        />
    );
};

export default PrivateRoute;