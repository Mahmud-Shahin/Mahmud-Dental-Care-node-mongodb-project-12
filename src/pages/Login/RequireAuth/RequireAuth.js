import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAuth = ({ children }) => {
    // const [user] = useAuthState(auth);
    // const location = useLocation()
    // if (!user) {
    //     return <Navigate to="/login" state={{ from: location }} replace />;
    // }

    // return children;
    const [user, loading] = useAuthState(auth);
    console.log('inside require auth', user);
    const location = useLocation()
    if(loading){
        return
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;