
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { AppBar, Toolbar, IconButton, MenuIcon, Typography, Button } from '@material-ui/core';

import { socialMedia } from '../data/socialMedia'
import { routes } from '../data/routes'


const Header = ({ href, children }) => {
    const router = useRouter();
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-red-800 scrolling-navbar p-4">
      <div className="container">
        <a className="navbar-brand waves-effect" href="#">
          {/* <img src="https://mdbootstrap.com/wp-content/uploads/2018/06/logo-mdb-jquery-small.png" alt="Logo" /> */}
          Yu Ohno
        </a>
        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text-dark"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item">
              <a className="nav-link waves-effect" href="https://mdbootstrap.com/docs/jquery/" target="_blank">jQuery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link waves-effect" href="https://mdbootstrap.com/docs/angular/" target="_blank">Angular</a>
            </li>
            <li className="nav-item">
              <a className="nav-link waves-effect" href="https://mdbootstrap.com/docs/react/" target="_blank">React</a>
            </li>
            <li className="nav-item">
              <a className="nav-link waves-effect" href="https://mdbootstrap.com/docs/vue/" target="_blank">Vue</a>
            </li> */}
          </ul>
          <ul className="navbar-nav" >
              {
                  routes.map( route => (
                    <li className="nav-item p-3 align-items-stretch">
                        <Link href={route.link} className="nav-link waves-effect">
                        <a className={"nav-link waves-effect " + (router.pathname.replaceAll("/[id]", "") === route.link ? "active" : "" )}>{route.name}</a>
                        </Link>
                    </li>
                ))
              }
            {/* <li className="nav-item">
              <a href="https://www.facebook.com/mdbootstrap" className="nav-link waves-effect" target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li> 
            <li className="nav-item">
              <a href="https://twitter.com/MDBootstrap" className="nav-link waves-effect" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="https://github.com/mdbootstrap/bootstrap-material-design" className="nav-link waves-effect"
                target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="https://mdbootstrap.com/docs/jquery/newsletter/"
                className="nav-link border border-light rounded waves-effect mr-2" target="_blank">
                <i className="fas fa-envelope mr-1"></i>Newsletter
              </a>
            </li> */}
          </ul>

        </div>

      </div>
      {/* <AppBar position="static">
        <Toolbar>
            <IconButton edge="start" className="" color="inherit" aria-label="menu">
            Yu Ohno
            </IconButton>
            
            {
                routes.map( route => (
                    <Link href={route.link}>
                        <Button color="inherit">
                            {route.name}
                        </Button>
                    </Link>
                ))
            }
        </Toolbar>
    </AppBar> */}
    </nav>
    
    )
}


export default Header