import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { authenticate, isAuthenticated } from '../../api/auth'

const NavAdmin = () => {
  const { user } = isAuthenticated()
  if (user) {
    if (user.role == 1) {
      return (
        <div>
          <div class="position-sticky pt-3 ">
            <ul class="nav flex-column">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                  Dashboard
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/admin/list">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/admin/listCategory">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                  Category
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  User
                </Link>
              </li>

            </ul>

          </div>
        </div>
      )
    } else {
      return <Redirect to='/user/dashboard' />
    }
  } else {
    return <Redirect to="/website/signin" />
  }

}

export default NavAdmin
