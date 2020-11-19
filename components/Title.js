
import React from 'react'
// import Link from 'next/link'
import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0, y: 20},
  visible: { opacity: 1, y: 0},
  transition: { duration: 0.8 }
}

const Title = ({title, description}) => (
  <motion.div initial="hidden" animate="visible" transition="transition" variants={variants} className="jumbotron jumbotron-fluid py-5 text-center" >
    <div className="container">
        
        <h1 className="square display-4 font-weight-bold">{title}</h1>
        <p className="lead">{description}</p>
        
    </div>
  </motion.div>
)


export default Title