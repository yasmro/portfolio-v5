
import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0, y: 20},
  visible: { opacity: 1, y: 0},
  transition: { duration: 0.8 }
}

const Title = ({name="", quickWord=""}) => (
  <div initial="hidden" animate="visible" transition="transition" variants={variants} className="jumbotron jumbotron-fluid py-5 vh-100 jumbotron-minwidth" >
    <div className="container">
      <h1 className="display-1">{name}</h1>
      <p>{quickWord}</p>
      {/* <img src={require('../data/images/Toplogo.svg')} className="" id="toplogo" alt="Yu-logo"/> */}
    </div>
  </div>
)


export default Title