import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../Context/AuthContext'

const Signup = () => {

  const { currentUser, signup, logout, setCurrentUser  } = useAuth()

  const emailRef = useRef()
  const passwordRef = useRef()
  
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  

  const handleSignUp = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
        alert("Error!")
    }
    setLoading(false)
  }

  const handleLogout = async () => {
    setLoading(true)
    try { 
      await logout()
    } catch {
      alert("Error")
    }
    setLoading(false)
  }

  return (
    <div>
      <p>{currentUser?.email}</p>
      <h1>Sign Up</h1>
      <form 
        autoComplete="off"
        onSubmit={handleSignUp}
      >

        <label>Full Name</label>
        <input 
          type="text" 
          className="border-2" 
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          required
        />

        <label>Email</label>
        <input 
          type="email" 
          className="border-2" 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          ref={emailRef}
          required
        />

        <label>Password</label>
        <input 
          type="Password" 
          className="border-2"
          onChange={(e) => setPassword(e.target.value)}
          value={password} 
          ref={passwordRef}
          required
        />

        <label>Password Confirm</label>
        <input 
          type="Password" 
          className="border-2"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm} 
          required
        />

        <div>
          <span>Already have an account? <Link to="/signin">Login</Link></span>
          <button disabled={loading || currentUser} type="submit">Sign Up</button>

          <button disabled={loading || !currentUser} onClick={handleLogout}>Logout</button>
        </div>
      </form>
    </div>
  )
}

export default Signup