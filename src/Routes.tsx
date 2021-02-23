import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './components/core/Home'
import Shop from './components/core/Shop'
import Login from './components/core/Login'
import Register from './components/core/Register'
import PrivateRoute from './components/admin/PrivateRoute'
import Dashboard from './components/admin/Dashboard'
import AdminRoute from './components/admin/AdminRoute'
import AdminDashboard from './components/admin/AdminDashboard'
const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/user/dashboard" component={Dashboard} />
        <AdminRoute path="/admin/dashboard" component={AdminDashboard} />
      </Switch>
    </HashRouter>
  )
}

export default Routes
