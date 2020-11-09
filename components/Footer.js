
import React from 'react'
import Link from 'next/link'
import { AppBar, Toolbar, IconButton, MenuIcon, Typography, Button } from '@material-ui/core';

import { socialMedia } from '../data/socialMedia'
import { routes } from '../data/routes'


const Footer = () => (
    <footer className="mt-5 position-absolute w-100 page-footer font-small bg-dark text-light pink pt-4">
        <div className="container text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase">Yu Ohno</h5>
                    <p>Here you can use rows and columns to organize your footer content.</p>
                </div>
                

                <div className="col-md-3 mb-md-0 mb-3">

                    <h5 className="text-uppercase">Socials</h5>
                    <ul className="d-flex list-unstyled nav-item">
                    {
                        socialMedia.map( media => (
                            <li>
                                <a className="nav-link waves-effect" href={`${media.href}`} target="_blank"><i className={media.icon}></i></a>
                                {/* <a className="nav-link waves-effect" href="https://mdbootstrap.com/docs/angular/" target="_blank">Angular</a> */}
                            </li>
                        ))
                    }
                    </ul>

                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">PAGES</h5>

                    <ul className="list-unstyled">
                    {
                        routes.map( route => (
                            <li className="">
                                <Link href={route.link}>{route.name}</Link>
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


export default Footer