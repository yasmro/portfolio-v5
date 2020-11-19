
import React from 'react'
// import Link from 'next/link'
import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0, y: 20},
  visible: { opacity: 1, y: 0},
  transition: { duration: 0.8 }
}

const Title = ({name="", quickWord=""}) => (
  <div initial="hidden" animate="visible" transition="transition" variants={variants} className="home-jumbotron jumbotron jumbotron-fluid py-5 mb-5 vh-100 jumbotron-minwidth" style={{backgroundColor: "var(--primary)", color: "white"}}>
    <div className="container" >
      <h1 className="display-1"><span className="font-weight-bold">{name.split(' ')[0].toUpperCase()}</span>{name.split(' ')[1].toUpperCase()}</h1>
      <p>{quickWord}</p>
      {/* <img src={require('../data/images/Toplogo.svg')} className="" id="toplogo" alt="Yu-logo"/> */}
    </div>
  </div>
)


export default Title