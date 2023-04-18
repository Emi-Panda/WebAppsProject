import React from 'react'
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

const ProtectedRoutes = ({ children }) => {


    const { user } = UserAuth();
    if (!user) {
        switch (children.props.destination) {
            case 'dashboard':
            case 'preferences':
                return <Navigate to="/login" />
            default:
                break;
        };
    } 
    return children;
}

export default ProtectedRoutes