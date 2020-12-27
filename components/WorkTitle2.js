
import React from 'react'
import styled from 'styled-components'

import { motion, AnimatePresence } from "framer-motion"

import Header from './Header'

const variants = {
  hidden: { opacity: 0, x: 5, duration: 2},
  visible: { opacity: 1, x: 0, duration: 2 },
  hide: { opacity: 0, x: 5, duration: 2},
  transition: { duration: 2 }
}

const WorkTitle2 = ({index=0, length=0, title, description="", category="", tags=[], abstract=""}) => (
  <>
  {/* style={{background: "linear-gradient(45deg, var(--primary), rgba(201, 0, 118, 1))", background: "linear-gradient(45deg, var(--primary), rgba(201, 0, 118, 1))"}} */}
  <div className="jumbotron jumbotron-fluid py-5 mb-5 bg-light" >
    <AnimatePresence exitBeforeEnter>
      <motion.div initial="hidden" animate="visible" transition="transition" exit="hide" variants={variants} className="container">
        <div className="row row-20">
          <div className="col-md-3 d-inline-flex d-md-inline mb-3">
            <div className="rounded-0  position-relative shadow-lg mr-3 " style={{width: "70px", height: "70px", backgroundColor: "rgba(0,0,0, 0)"}}>
              <span className="h1 text-shadow position-absolute text-center text-light" style={{ fontSize:"50px", top: "-2px", left: "10px" }}>{index + 1}</span>
              <span className="position-absolute bottomRight" style={{bottom: "0px", right: "0px" }}></span>
              <span className="text-dark position-absolute text-right" style={{ bottom: "0px", right: "5px" }}>{length}</span>
            </div>

            <div className="mt-0 mt-md-3">
              <span className="badge bg-black shadow rounded-0"><span className="">{category}</span></span>
          
                {tags.length > 0 &&
                  <>
                    <br />
                    {
                      tags.map( tag =>
                      // <span className="mr-1 badge border border-white shadow  rounded-0"><span className="">{tag.fields.name}</span></span>
                      <span key={`${tag}`} className="mr-1 badge bg-light  shadow text-dark rounded-0"><span className="">{tag.fields.name}</span></span>
                      )
                    }
                  </>
                }
            </div>
          </div>
          
          <div className="col-md-9">

            <h1 className="display-2 text-shadow" >{title}</h1>
            <p className="mt-3">{abstract}</p>
          </div> 
        </div>   
      </motion.div>
    </AnimatePresence>
  </div>
  </>
)

export default WorkTitle2
