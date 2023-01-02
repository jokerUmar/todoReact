import React from 'react'
import "./sidebar.css"
import logo from "../../assets/images/Logo.png"
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div className='sidebar'>
      <a href="#" className='sidebar-logo'>
        <img src={logo} width={"38.59px"} height={"38.59px"} alt="" />
      </a>
    
      <div className="line"></div>

    <ul className='sidebar-list'>
      <li className='sidebar-list__item'><Link className='link' to={"/"}>NAME</Link></li>
      <li className='sidebar-list__item'><Link className='link' to={"/apiList"}>API</Link></li>
      
    </ul>

    </div>
  )
}

export default Sidebar