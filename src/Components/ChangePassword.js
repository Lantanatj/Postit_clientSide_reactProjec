import React from 'react'
import '../Styles/signin.css'


const ChangePassword = () => {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Change Password</h3>
          <p className='text-center mb-5'>Please input your desired password!</p>
          
          
          <div className="form-group mt-3 text-center">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group mt-3 text-center">
            <label>Repeat Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-sm btn-block btn-primary formbtn mx-auto" >
              Submit
            </button>
          </div>
          
        </div>
      </form>
    </div>
  )
}


export default ChangePassword