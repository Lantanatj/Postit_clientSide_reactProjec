import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Styles/signin.css'

const Signup = (props) => {
  
    // let [authMode, setAuthMode] = useState("signin")
  
    // const changeAuthMode = () => {
    //   setAuthMode(authMode === "signin" ? "signup" : "signin")
    // }
  
    // if (authMode === "signin") {
    //   return (
    //     <div className="Auth-form-container">
    //       <form className="Auth-form">
    //         <div className="Auth-form-content">
    //           <h3 className="Auth-form-title">Sign In</h3>
    //           <div className="text-center">
    //             Not registered yet?{" "}
    //             <span className="link-primary" onClick={changeAuthMode}>
    //                 <Link to="/signup">Sign Up</Link>
    //             </span>
    //           </div>
    //           <div className="form-group mt-3 text-center">
    //             <label>Email address</label>
    //             <input
    //               type="email"
    //               className="form-control mt-1"
    //               placeholder="Enter email"
    //             />
    //           </div>
    //           <div className="form-group mt-3 text-center">
    //             <label>Password</label>
    //             <input
    //               type="password"
    //               className="form-control mt-1"
    //               placeholder="Enter password"
    //             />
    //           </div>
    //           <div className="d-grid gap-2 mt-3">
    //             <button type="submit" className="btn btn-primary mx-auto" onClick="">
    //               Submit
    //             </button>
    //           </div>
    //           <p className="text-center mt-2 text-center">
    //             Forgot <Link to="/changepassword">password?</Link>
    //           </p>
    //         </div>
    //       </form>
    //     </div>
    //   )
    // }

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit= async (e)=>{
      e.preventDefault()
      const data = {email, username, password}
      
      const response = await fetch('http://localhost:5000/', {
        method: 'POST', 
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
      })
      const result = await response.json()
      console.log(result);
      setEmail('')
      setPassword('')
      setUsername('')
      //navigate('/signin')
      navigate(result.redirect)

    }
  
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary" >
              <Link to="/:id">Sign In</Link>
              </span>
            </div>
            <div className="form-group mt-3 text-center">
              <label>Username</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="full name"
                value={username}
                onChange= {(e)=>setUsername(e.target.value)}
              />
            </div>
            <div className="form-group mt-3 text-center">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
                value={email}
                onChange= {(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3 text-center">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                value={password}
                onChange= {(e)=>setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3 ">
              <button  type="submit" className="btn btn-sm btn-block btn-primary formbtn mx-auto">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Already have an account? <Link to="/:id">Sign In</Link>
            </p>
          </div>
        </form>
      </div>
    )
}

export default Signup