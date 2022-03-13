import { useAuth } from '../Context/AuthContext'
import React from 'react'

const ProtectedRoute = () => {

  const { loggedIn, role } = useAuth()

  return (
    <Route
    {...rest}
    render={(props) => {
      if (loggedIn && role === admin) {
        return <Redirect to={{ pathname: "/" }} />;
      }

      if (loggedIn) {
        return <Component {...props} />;
      }

      return <Redirect to={{ pathname: "/" }} />;
    }}
  />
  )
}

export default ProtectedRoute