import React from 'react'
import SignInUser from '../pages/auth/SignInUser'
import {Link, Outlet, Route, Routes} from 'react-router-dom'
import SignUpStudent from '../pages/auth/SignUpStudent'

const Auth = () => {
  return (
    <div>
        <div className='bg-light-blue-bg min-h-screen flex m-auto justify-center items-center'>
          
        <Link to="/" className="btn btn-sm btn-circle btn-neutral absolute right-6 top-6">✕</Link>

          <div className='flex items-center justify-center'>
              <div className="card lg:w-[800px] bg-light-bg shadow-xl my-10">
                <Outlet/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Auth