import React from 'react';
import { Navigate } from 'react-router-dom';
import Detail from '../component/detail/detail';

const PrivateRoute = ({ authenticate }) => {
	return authenticate ? <Detail /> : <Navigate to='/login' />;
};
export default PrivateRoute;
