import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const location = useLocation();
    const { user } = useContext(AuthContext)
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>
};

export default PrivateRoutes;