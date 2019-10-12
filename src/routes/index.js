import React from 'react'
import { Switch, Route } from 'react-router-dom'

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}
export const getRoutes = routes => (
  <Switch>
    {
      routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))
    }
  </Switch>
)