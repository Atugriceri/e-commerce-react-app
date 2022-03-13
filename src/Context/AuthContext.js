import { createContext, useState, useEffect, useContext } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from "../Firebase"

const AuthContext = createContext()

const AuthProvider = ({children}) => {

  const [currentUser, setCurrentUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)
  const [role, setRole] = useState("")

  const signup = (email, password) => {
    setLoggedIn(true)
    return (
      createUserWithEmailAndPassword(auth, email, password)
    )
  }

  const login = (email, password) => {
    setLoggedIn(true)
    return (
      signInWithEmailAndPassword(auth, email, password)
    )
  }

  const logout = () => {
    setLoggedIn(false)
    return (
      signOut(auth)
    )
  }

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      localStorage.setItem("userUid", user?.uid)
      localStorage.getItem("userUid") === "YdZ05iQ6BChuwOdggeYM0bbkqaA3" && loggedIn ? setRole('admin') : setRole('simpleUser')
      setCurrentUser(user)
      setLoading(false)
      user ? setLoggedIn(true) : setLoggedIn(false)
    })
    
    return () => unsubscribe()

  }, [])

  const value = {
    currentUser,
    loggedIn,
    login,
    signup,
    logout,
    role,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }