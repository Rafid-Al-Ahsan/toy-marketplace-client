import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className='text-center mt-[10%] '>
                <progress className="progress w-56 bg-[#a3174f]
                "></progress>
            </div>
        );

    }

    if (user) return children;

    return <Navigate state={{from: location}} to="/login" replace></Navigate>
};

export default PrivateRoute;