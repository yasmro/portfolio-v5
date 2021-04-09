
import React from 'react'
import Link from 'next/link'

import { useRouter } from 'next/router'

import { myself } from '../data/about'

import { socialMedia } from '../data/socialMedia'
import { routes } from '../data/routes'



const Footer = () => {
    const router = useRouter();
    const { locale, locales, defaultLocale } = router


    const sentence = {
        socials: {
            'en-US': 'SOCIALS',
            'ja': 'SNS'
        },
        pages: {
            'en-US': 'PAGES',
            'ja': 'サイトマップ'
        },
    }

    const colors = [
        '#aa0000',
        '#ccdd00',
        '#c870c8',
        '#555',
        '#f0f0f0',
        '#880088',
        '#cc5500',
        '#00cc55',
        '#0055cc',
    ]

    return(
            <footer className="position-absolute w-100 page-footer text-light pink pt-4 skewedArea bg-dark">
                <div className="container text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <img src="/static/images/name.png" className="mb-2" style={{filter: "invert(1)", WebkitFilter: "invert(1)"}} loading="lazy" alt="Yu Ohno" width={120} height={32} />
                            <p className="h5 text-uppercase mb-2">{myself.name}</p>
                            <p>{myself.quickWord}</p>
                        </div>
                        
                        <hr className="d-inline-flex d-md-none mt-3 mb-4 bg-dark"/>

                        <div className="col-md-6 mb-md-0 mb-3">

                            <p className={(locale==="ja" ? "h6 japanese" : "h5")}>{sentence.socials[locale]}</p>
                            <ul className="d-inline-flex text-center list-unstyled">
                            {
                                socialMedia.map( media => (
                                    <li key={`footer-media-${media.name}`}>
                                        <a className="nav-link text-light" rel="noreferrer" href={`${media.href}`} aria-label={`${media.name}`} target="_blank"><i className={`${media.icon} fa-2x`}></i><span className="d-none">{`${media.href}`}</span></a>
                                    </li>
                                ))
                            }
                            </ul>

                            <p className={(locale==="ja" ? "h6 japanese" : "h5")}>{sentence.pages[locale]}</p>
                            <ul className="d-inline-flex list-unstyled">
                            {
                                routes.map( route => (
                                    <li className="nav-item" key={`footer-route-${route.name}`}>
                                        <Link href={route.link}>
                                            <a className={"nav-link waves-effect link-hover text-white " + (router.pathname.replace("/[id]", "") === route.link ? "active shadow shadow-white " : "" )}>{route.name}</a>
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

                {/* <div className="d-flex align-items-center justify-content-end">
                    {colors.map(color => 
                            <div style={{height: "2px", width:"16px", backgroundColor: color}}> </div>
                        // <div style={{height: "5px", width:"10px", backgroundImage: `linear-gradient(0deg, transparent 49%, ${color} 49%, ${color} 52%, transparent 52%, transparent)`}}> </div>
                    )}                    
                </div> */}
        </footer>
    )
}


export default Footer