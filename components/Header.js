
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// import { AppBar, Toolbar, IconButton, MenuIcon, Typography, Button } from '@material-ui/core';

// import { socialMedia } from '../data/socialMedia'
import { routes } from '../data/routes'


const Header = ({ href, children }) => {
    const router = useRouter();
    const [isToggle, setIsToggle] = useState(false);


    return(
    <nav className={"navbar navbar-expand-lg navbar-light bg-red-800 scrolling-navbar p-4  " + (router.pathname.replace("/[id]", "") === "/" ? "" : "" )}>
      <div className="container">
        <Link href="/">
            <a className="navbar-brand waves-effect">
            {/* <img src="https://mdbootstrap.com/wp-content/uploads/2018/06/logo-mdb-jquery-small.png" alt="Logo" /> */}
            Yu Ohno
            </a>
        </Link>
        
        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text-dark"></span>
        </button>

        <div className="d-lg-none d-inline">
          <div className={"button_container " + (isToggle ? "toggle-active" : "")} id="toggle" onClick={() => setIsToggle(!isToggle)}>
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
          </div>


          <div className={"overlay " + (isToggle ? "open" : "")} id="overlay">
            <nav className="overlay-menu">
              <ul>
              {
                  routes.map( route => (
                    <li className="nav-item p-3 align-items-stretch" key={`header-menu-${route.name}`}>
                        <Link href={route.link} className="nav-link waves-effect">
                        <a className={"nav-link waves-effect " + (router.pathname.replace("/[id]", "") === route.link ? "active" : "" )} onClick={() => setIsToggle(!isToggle)}>{route.name}</a>
                        </Link>
                    </li>
                ))
              }
              </ul>
              <div className="overflow-hidden ml-0 pl-0" style={{left:0}}>
              </div>
            </nav>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          </ul>
          <ul className="navbar-nav" id="header-menu">
              {
                  routes.map( route => (
                    <li className="nav-item p-3 align-items-stretch" key={`header-navbar-${route.name}`}>
                        <Link href={route.link} className="nav-link waves-effect">
                        <a className={"nav-link waves-effect " + (router.pathname.replace("/[id]", "") === route.link ? "active" : "" )} >{route.name}</a>
                        </Link>
                    </li>
                ))
              }
          </ul>

        </div>

      </div>
    </nav>
    
    )
}


export default Header