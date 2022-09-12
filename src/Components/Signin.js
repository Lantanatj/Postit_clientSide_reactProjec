import React from 'react'
import '../Styles/signin.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  

  const navigate = useNavigate()
  function handleRedirect(){
    navigate("/welcome")
  }
  


  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Welcome Back!</h3>
          <p className='text-center mb-5'>Please sign in!</p>
          
          <div className="form-group mt-3 text-center">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              
            />
          </div>
          <div className="form-group mt-3 text-center">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-sm btn-block btn-primary formbtn mx-auto" onclick={handleRedirect()} >
              Continue
            </button>
          </div>
          <p className="forgot-password text-center mt-2">
            No account? <Link to="/signup">Sign Up!</Link>
          </p>
        </div>
      </form>
    </div>
  )
}


export default Signin