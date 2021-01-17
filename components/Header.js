
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

// import { AppBar, Toolbar, IconButton, MenuIcon, Typography, Button } from '@material-ui/core';

// import { socialMedia } from '../data/socialMedia'
import { routes } from '../data/routes'
import { VisibilityAction } from 'framer-motion'

const Header = ({ href, children }) => {
    const router = useRouter();
    const { locale, locales, defaultLocale } = router

    const [isToggle, setIsToggle] = useState(false);
    // const [windowpageYOffset, setWindowpageYOffset] = useState(window.pageYOffset);


    return(
      <>
      <nav
      className={"navbar-common d-flex d-lg-none w-100 p-4 " + (router.pathname.replace("/[id]", "") === "/" ? "" : "" )}
      style={{ zIndex: 1, top: 0}}
      >
        <div className="container d-flex">
          <div className="mr-auto">
          <Link href="/" >
              <a className="navbar-brand waves-effect pr-3" style={{mixBlendMode: "multiply"}}>
                <img src="/static/images/name.png" loading="lazy" alt="Yu Ohno" width={120} height={32} />
              </a>
          </Link>
          </div>        
          <li className="nav-item pl-4 align-items-stretch d-flex" key={`lang`}>
              <Link href={router.asPath} locale="en">
                <a className={"nav-link waves-effect " + (router.locale === "en" ? "active" : "" )}>en</a>
              </Link>
              <span className={"nav-link waves-effect"} >/</span>
              <Link href={router.asPath} locale="ja">
                <a className={"nav-link waves-effect " + (router.locale === "ja" ? "active" : "" )}>ja</a>
              </Link>
            </li>
        </div>
      
      </nav>

    <nav
      className={"navbar-common navbar navbar-expand-lg navbar-light d-none d-lg-flex position-sticky w-100 p-4 " + (router.pathname.replace("/[id]", "") === "/" ? "" : "" )}
      style={{ zIndex: 1, top: 0, backgroundColor: "rgba(255,255,255, 0.45)"}}
      >
      <div className="container">
        <Link href="/">
            <a className="navbar-brand waves-effect pr-3" style={{mixBlendMode: "multiply"}}>
              <img src="/static/images/name.png" loading="lazy" alt="Yu Ohno" width={120} height={32} />
            </a>
        </Link>        

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          </ul>
          <ul className="navbar-nav" id="header-menu">
              {
                  routes.map( route => (
                    <li className="nav-item pl-4 align-items-stretch" key={`header-navbar-${route.name}`}>
                        <Link href={route.link} className="nav-link waves-effect">
                        <a className={"nav-link waves-effect " + (router.pathname.replace("/[id]", "") === route.link ? "active" : "" )} >{route.name}</a>
                        </Link>
                    </li>
                ))
              }
              <li className="nav-item pl-4 align-items-stretch d-flex" key={`lang`}>
                <Link href={router.asPath} locale="en">
                  <a className={"nav-link waves-effect " + (router.locale === "en" ? "active" : "" )}>en</a>
                </Link>
                <span className={"nav-link waves-effect"} >/</span>
                <Link href={router.asPath} locale="ja">
                  <a className={"nav-link waves-effect " + (router.locale === "ja" ? "active" : "" )}>ja</a>
                </Link>
              </li>              
          </ul>
          
        </div>

      </div>
      
    </nav>

      <div className="d-lg-none d-inline">
        <div className={" button_container " + (isToggle ? "toggle-active" : "")} id="toggle" onClick={() => setIsToggle(!isToggle)}>
          <span className="top"></span>
          <span className="middle"></span>
          <span className="bottom"></span>
        </div>


        <div className={"overlay " + (isToggle ? "open" : "")} style={{visibility: (isToggle ? "visible" : "hidden")}}  id="overlay">
          <nav className="overlay-menu">
            <ul>
            {
                routes.map( route => (
                  <li className="nav-item p-3 align-items-stretch " key={`header-menu-${route.name}`}>
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
      </>
    
      )
}


export default Header