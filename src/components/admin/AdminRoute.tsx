import React, { FC } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { isAuth } from '../../helpers/auth'
import { Jwt } from '../../store/models/auth'
interface AdminRouteProps extends RouteProps {
  component: React.ComponentType<any>
}

const AdminRoute: FC<AdminRouteProps> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        const auth = isAuth()
        if (auth) {
          const {
            user: { role },
          } = auth as Jwt
          return role === 1 ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
        return <Redirect to="/login" />
      }}
    />
  )
}

export default AdminRoute
