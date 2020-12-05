
import React from 'react'
import Link from 'next/link'

import { useRouter } from 'next/router'

// import { AppBar, Toolbar, IconButton, MenuIcon, Typography, Button } from '@material-ui/core';

import { myself } from '../data/about'

import { socialMedia } from '../data/socialMedia'
import { routes } from '../data/routes'


const Footer = () => {
    const router = useRouter();
    return(
            <footer className="position-absolute w-100 page-footer text-light pink pt-4 skewedArea bg-dark">
                <div className="container text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <p className="h5 text-uppercase">{myself.name}</p>
                            <p>{myself.quickWord}</p>
                        </div>
                        
                        <hr className="d-inline-flex d-md-none mt-3 mb-4 bg-dark"/>

                        <div className="col-md-6 mb-md-0 mb-3">

                            <p className="h5 text-uppercase">Socials</p>
                            <ul className="d-inline-flex text-center list-unstyled">
                            {
                                socialMedia.map( media => (
                                    <li key={`footer-media-${media.name}`}>
                                        <a className="nav-link text-light" rel="noreferrer" href={`${media.href}`} target="_blank"><i className={`${media.icon} fa-2x`}></i><span className="d-none">{`${media.href}`}</span></a>
                                        {/* <a className="nav-link waves-effect" href="https://mdbootstrap.com/docs/angular/" target="_blank">Angular</a> */}
                                    </li>
                                ))
                            }
                            </ul>

                            <p className="h5 text-uppercase">PAGES</p>
                            <ul className="d-inline-flex list-unstyled">
                            {
                                routes.map( route => (
                                    <li className="nav-item" key={`footer-route-${route.name}`}>
                                        <Link href={route.link}>
                                            <a className={"nav-link waves-effect link-hover text-white " + (router.pathname.replace("/[id]", "") === route.link ? "active" : "" )}>{route.name}</a>
                                        </Link>
                                    </li>
                                ))
                            }
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">
                        Copyright &copy; {new Date().getFullYear()} Yu Ohno "Yasumaro" All rights reserved.
                </div>
        </footer>
    )
}


export default Footer