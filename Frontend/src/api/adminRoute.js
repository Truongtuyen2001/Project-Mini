import React from 'react'
import { Redirect, Route } from 'react-router'
import { isAuthenticated, authenticate } from './auth'

const AdminRoute = ({ children }) => {
    return (
        <h2> ok ok </h2>

        // <Route render={() => {
        //     return authenticate() && authenticate().user.role == 1 ? children : <Redirect to={{ pathname: '/website/signin' }} />
        // }} />

    )
}

// export default AdminRoute
