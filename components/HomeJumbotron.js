
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
// import Link from 'next/link'
import { motion } from "framer-motion"

import { routes } from '../data/routes' 

const variants = {
  hidden: { opacity: 0, y: 20},
  visible: { opacity: 1, y: 0},
  transition: { duration: 0.8 }
}

const Title = ({name="", quickWord=""}) => {
  const router = useRouter();
    return(
    <div initial="hidden" animate="visible" transition="transition" variants={variants} className="home-jumbotron jumbotron jumbotron-fluid py-4 mb-5 jumbotron-minwidth" style={{height: "calc(100vh - 90px)", minHeight: "540px", color: "white"}}>
      <div className="container" >
        <div className="text-center" style={{marginTop: "18vh"}}>
          <div className="quotation p-5 " style={{ margin: "auto 0"}}>
            <h1 className="display-1"><span className="font-weight-bold">{name.split(' ')[0].toUpperCase()}</span>{name.split(' ')[1].toUpperCase()}</h1>
            <span className="lead">I'm working as</span><br />
            <span className="display-6">Engineer</span><br />
            <span className="display-6">Artist</span><span className="lead"> and <br /></span>
            <span className="display-6">Calligrapher.</span>
            {/* <img src={require('../data/images/Toplogo.svg')} className="" id="toplogo" alt="Yu-logo"/> */}
          </div>
        </div>
      </div>

    </div>
  )
}


export default Title