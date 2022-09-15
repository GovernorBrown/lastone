import "./NavbarStyles.css"
import { Link } from "react-router-dom"
import React from 'react'

const Navbar = () => {
  return (
    <div className="header">
        <Link to={"/"}>
            <h1>FoodieFriends</h1>
        </Link>
        <ul className="nav-menu">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li> 
                <Link to="/friends">Friends</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar