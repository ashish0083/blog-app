'use client'
import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import Login from '../Login/page'

const Header = () => {
  const {status, data:session} = useSession();

  return (
    <div className="navbar bg-base-900">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">My Blog App</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Your Blogs</a></li>
      {/* <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li> */}
      {/* <li><a>Browse</a></li> */}
    </ul>
  </div>
  <div className="navbar-end space-x-3">
    {status === 'authenticated' && 
    
    <div>{session.user!.name}
    <Link href="api/auth/signout" className="btn bg-blue-700 ml-5">Sign Out</Link>  
    </div>}
    {status === 'unauthenticated' && <Link href="/api/auth/signin" className="btn">Sign in </Link>}
    {status === 'unauthenticated' && <Link href="/Signup" className="btn bg-blue-700">Sign Up</Link>}
  </div>
</div>
  )
}

export default Header;