import { createContext, useState, useEffect, useContext } from 'react'
import {useNavigate } from 'react-router-dom'

const AuthContext = createContext()

const defaultUser = JSON.parse(localStorage.getItem('user')) || {}
const defaultUsers = JSON.parse(localStorage.getItem('users')) || []

const AuthProvider = ({children}) => {
  const [users, setUsers] = useState(defaultUsers)
  const [currentUser, setCurrentUser] = useState(defaultUser)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [errors, setErrors] = useState({})

  

  const signup = (currentUser) => {
    if(Object.keys(errors).length === 0) {
      setUsers([currentUser, ...users])
      
      setLoggedIn(true)
    }
  }

  const login = () => {
    setLoggedIn(true)

  }

  const logout = () => {
    localStorage.removeItem('user')
    setLoggedIn(false)
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')) || {}
    
    if(!Object.values(user).every(item => !item.length && users.some((item) => item.email === currentUser.email))) {
      setCurrentUser(user)
      setUsers([...users, currentUser])
      setLoggedIn(true)
    }
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setLoggedIn(true)
    }

  }, [errors])


  const value = {
    currentUser,
    setCurrentUser,
    users,
    loggedIn,
    signup,
    errors,
    loggedIn,
    setErrors,
    setIsSubmitting,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }