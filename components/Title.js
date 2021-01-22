
import React from 'react'
// import Link from 'next/link'
import { motion } from "framer-motion"

// import ShuffleText from 'react-shuffle-text';

const variants = {
  hidden: { opacity: 0, y: 5, duration: 2},
  visible: { opacity: 1, y: 0, duration: 2 },
  transition: { duration: 2 }
}

const Title = ({title, description, locale="", jaTitle="日本語テスト"}) => (
  <div className="jumbotron jumbotron-fluid py-5 text-center bg-light mb-5" >
    <motion.div initial="hidden" animate="visible" transition="transition" variants={variants} className="container" >
        <h1 className="quotation display-2 text-shadow">
          {/* <ShuffleText content={title} charFrameTime={35} charFrames={21} /> */}
          {title}
          {/* <span className="japanese h4" style={{marginTop: "-40px"}}>{jaTitle}</span> */}
        </h1>
        <p className="lead">{description}</p>
        {/* <h1 className="display-2 position-relative">
          <span className="shadow font-weight-bold px-4 position-absolute" Style="color: rgba(0,0,0,0); background: linear-gradient(45deg, var(--primary), var(--primary1))!important " >{title}</span>
          <span className="shadow font-weight-bold px-4 text-white position-absolute" Style="background: linear-gradient(45deg, var(--primary), var(--primary1))!important" >{title}</span>
        </h1> */}
        
    </motion.div>
  </div>
)


export default Title