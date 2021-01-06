
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
// import Link from 'next/link'
import { motion } from "framer-motion"

import { routes } from '../data/routes' 

import Header from './Header'
// import ShuffleText from 'react-shuffle-text';

const variants = {
  hidden: { opacity: 0, y: 20},
  visible: { opacity: 1, y: 0},
  transition: { duration: 0.8 }
}

const Title = ({name="", quickWord=""}) => {
  const router = useRouter();
    return(
    <> 
    <div  className="home-jumbotron jumbotron jumbotron-fluid py-4 mb-5" style={{height: "calc(100vh - 0px)", marginTop: "-90px", minHeight: "540px", color: "white"}}>
      <div className="container" >
        <div className="text-center" style={{alignItems: "center"}}>
          <div className="quotation p-5 " style={{ margin: "auto 0"}}>
            <motion.div initial="hidden" animate="visible" transition="transition" variants={variants} className="text-shadow">
            <h1 className="display-1"><span className="font-weight-bold">{name.split(' ')[0].toUpperCase()}</span><span style={{fontWeight:200, fontSize:"108%"}}>{name.split(' ')[1].toUpperCase()}</span></h1>
            <span style={{fontWeight:200}} className="lead">I'm working as</span><br />
            <span style={{fontWeight:200}} className="display-6" >Engineer</span><br />
            <span style={{fontWeight:200}} className="display-6">Artist</span><span style={{fontWeight:200}} className="lead"> and <br /></span>
            <span style={{fontWeight:200}} className="display-6">Calligrapher.</span>
            </motion.div>
            {/* <img src={require('../data/images/Toplogo.svg')} className="" id="toplogo" alt="Yu-logo"/> */}
          </div>
        </div>
      </div>

    </div>
    </>
  )
}


export default Title