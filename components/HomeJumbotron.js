
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
// import Link from 'next/link'
import { motion } from "framer-motion"

import { routes } from '../data/routes' 

// import ShuffleText from 'react-shuffle-text';

const variants = {
  hidden: { opacity: 0,},
  visible: { opacity: 1,  transition: { duration: 0.5 }},
 
}

const Title = ({name="", quickWord=""}) => {
  const router = useRouter();
    return(
    <>
    <div  className="home-jumbotron jumbotron jumbotron-fluid py-4 mb-5 d-flex position-relative" style={{height:"calc(100vh - 80px)", marginTop: "0px", minHeight: "540px"}}>
        <div className="container text-center h-100" >
            <motion.div initial="hidden" animate="visible" transition="transition" variants={variants} 
                className="card active p-5" style={{ position: "absolute", top: "45vh", left:"50%", transform:"translate(-50%,-50%)"}}>
                <div className="quotation p-5" >
                    <div className="text-shadow gradient_text">
                    <h1 className="display-1"><span className="font-weight-bold">{name.split(' ')[0].toUpperCase()}</span><span style={{fontWeight:200, fontSize:"108%"}}>{name.split(' ')[1].toUpperCase()}</span></h1>
                    <span style={{fontWeight:400}} className="lead">I'm working as</span><br />
                    <span style={{fontWeight:400}} className="display-6" >Engineer</span><br />
                    <span style={{fontWeight:400}} className="display-6">Artist</span><span style={{fontWeight:400}} className="lead"> and <br /></span>
                    <span style={{fontWeight:400}} className="display-6">Calligrapher.</span>
                    </div>
                    
                </div>
                
            </motion.div>
            {/* <img src='/static/images/kyo_shin_do_haku_color.png' height="450" width="400" id="kyoshindohaku" alt="Yu-logo"/> */}
        </div>
        

    </div> 
    </>
  )
}


export default Title