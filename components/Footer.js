
import React from 'react'
import Link from 'next/link'

import { useRouter } from 'next/router'

import { AppBar, Toolbar, IconButton, MenuIcon, Typography, Button } from '@material-ui/core';

import { myself } from '../data/about'

import { socialMedia } from '../data/socialMedia'
import { routes } from '../data/routes'


const Footer = () => {
    const router = useRouter();
    return(
            <footer className="mt-5 position-absolute w-100 page-footer bg-dark text-light pink pt-4">
                <div className="container text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase">{myself.name}</h5>
                            <p>{myself.quickWord}</p>
                        </div>
                        

                        <div className="col-md-6 mb-md-0 mb-3">

                            <h5 className="text-uppercase">Socials</h5>
                            <ul className="d-inline-flex text-center list-unstyled">
                            {
                                socialMedia.map( media => (
                                    <li>
                                        <a className="nav-link waves-effect text-light" rel="noreferrer" href={`${media.href}`} target="_blank"><i className={`${media.icon} fa-2x`}></i></a>
                                        {/* <a className="nav-link waves-effect" href="https://mdbootstrap.com/docs/angular/" target="_blank">Angular</a> */}
                                    </li>
                                ))
                            }
                            </ul>

                            <h5 className="text-uppercase">PAGES</h5>

                            <ul className="d-inline-flex list-unstyled">
                            {
                                routes.map( route => (
                                    <li className="nav-item text-white">
                                        <Link className="text-white" href={route.link}>
                                            <a className={"nav-link waves-effect text-white " + (router.pathname.replace("/[id]", "") === route.link ? "active" : "" )}>{route.name}</a>
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