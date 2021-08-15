import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';

import HomePage from './page/home'
import Add from './page/admin/add';
import List from './page/admin/list';
import LayoutAdmin from './layouts/admin'
import LayoutWebsite from './layouts/website';
import ProductPage from './page/website/productPage';
import ProductDetail from './page/website/productDetail';
import Dashboard from './page/admin/Dashboard';
import NavAdmin from './page/admin/NavAdmin';
import Signup from './page/website/signup';
import Signin from './page/website/signin';
import Edit from './page/admin/edit';
import News from './page/website/news';
import Contact from './page/website/contact';
import Category from './page/website/categoryPage';
import AddCategory from './page/admin/addCategory';
import EditCategory from './page/admin/editCategory';
import ListCategory from './page/admin/listCategory';
import PrivateRoute from './api/privateRoute';
import UserDashboard from './page/website/userDashboard';
import AdminRoute from './api/adminRoute';
import AdminDashboard from './page/website/adminDashboard';
import DetailCate from './page/admin/detailCate';


const Routers = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/admin/:path?/:path?'>
          <LayoutAdmin >
            <Switch>
              <Route exact path="/admin">
                <Dashboard />
              </Route>
              <Route path='/admin/NavAdmin'>
                <NavAdmin />
              </Route>
              <Route exact path="/admin/add">
                <Add {...props} />
              </Route>
              <Route exact path="/admin/edit/:id">
                <Edit {...props} />
              </Route>
              <Route exact path='/admin/list'>
                <List {...props} />
              </Route>

              <Route exact path="/admin/addCategory">
                <AddCategory {...props} />
              </Route>
              <Route exact path="/admin/edit-cate/:id">
                <EditCategory {...props} />
              </Route>
              <Route exact path='/admin/listCategory'>
                <ListCategory {...props} />
              </Route>
              <Route exact path="/admin/category/:id">
                <DetailCate {...props} />
              </Route>

            </Switch>
          </LayoutAdmin>

        </Route>

        <Route>

          <LayoutWebsite >
            <Switch className="border-t border-blue-500">
              <Route exact path="/" >
                <HomePage />
              </Route>
              <Route path="/list" >
                <ProductPage {...props} />
              </Route>
              <Route path="/products/:id" >
                <ProductDetail {...props} />
              </Route>
              <Route path="/website/signup">
                <Signup />
              </Route>
              <Route path="/website/signin">
                <Signin />
              </Route>
              <Route path="/website/news">
                <News />
              </Route>
              <Route path="/website/contact">
                <Contact />
              </Route>
              <Route exact path="/website/categoryPage/:id">
                <Category {...props} />
              </Route>
              <PrivateRoute exact path="/user/dashboard">
                <UserDashboard />
              </PrivateRoute>
              {/* <AdminRoute exact path="/admin/dashboard">
                <AdminDashboard />
              </AdminRoute> */}
            </Switch>
          </LayoutWebsite>

        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routers
