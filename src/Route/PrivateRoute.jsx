import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);

    if (loading) {
        return <div className='min-h-screen flex justify-center items-center'><span className="loading loading-spinner text-primary"></span></div>
    }
    return (
        user ? children : <Navigate to={'/signin'} />
    );
};

export default PrivateRoute;