import React from 'react'
import NavAdmin from './NavAdmin'
import { isAuthenticated } from '../../api/auth'
import { Redirect } from 'react-router-dom';
const Dashboard = () => {
    // const { user } = isAuthenticated();
    return (
        <div>
            ok ok
            {/* {user === undefined ? <Redirect to="/website/signin" /> : 'ok'} */}
        </div>
    )
}

export default Dashboard
