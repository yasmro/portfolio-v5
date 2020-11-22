
import React from 'react'
// import Link from 'next/link'
import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0, y: 20},
  visible: { opacity: 1, y: 0},
  transition: { duration: 0.8 }
}

const Title = ({title, description}) => (
  <div className="jumbotron jumbotron-fluid py-5 text-center bg-white" >
    <motion.div initial="hidden" animate="visible" transition="transition" variants={variants} className="container">
        
        <h1 className="square display-2 font-weight-bold shadow-text">{title}</h1>
        <p className="lead">{description}</p>
        
    </motion.div>
  </div>
)


export default Title