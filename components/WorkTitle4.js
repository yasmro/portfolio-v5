
import React from 'react'
import styled from 'styled-components'

import { motion, AnimatePresence, VisibilityAction } from "framer-motion"

import Header from './Header'

const variants = {
  hidden: { opacity: 0, x: 5, duration: 2},
  visible: { opacity: 1, x: 0, duration: 2 },
  hide: { opacity: 0, x: 0, duration: 2},
  transition: { duration: 2 }
}

const WorkTitle4 = ({index=0, length=0, title, locale="", jaTitle="", description="", category="", tags=[], abstract="", thumbnail={}}) => (
  <>
  {/* style={{background: "linear-gradient(45deg, var(--primary), rgba(201, 0, 118, 1))", background: "linear-gradient(45deg, var(--primary), rgba(201, 0, 118, 1))"}} */}
  <div className="jumbotron-fluid mb-5 py-0 py-lg-0" style={{backgroundColor: "#ecf2f2", height: "40vh", minHeight: "500px"}}>
    <AnimatePresence exitBeforeEnter>
      <motion.div initial="hidden" animate="visible" transition="transition" exit="hide" variants={variants} key={`${title}-title`} className="container h-100">
        <div className="row row-20 d-flex h-100" >
          <div className="col-lg-6 d-flex align-items-center justify-content-center" >
            <div>
              <div className="text-center text-lg-left">
                <h1 className="display-2 gradient_text text-shadow font-weight-bold" style={{letterSpacing: "-3px"}} >{title}</h1>
                {locale==="ja" && 
                <h2 className="h4 gradient_text text-shadow font-weight-bold japanese">{jaTitle}</h2>
                }
                <p className={"mb-5 lead1 " + (locale==="ja" ? "japanese" : "")}>{abstract}</p>
              </div>
              <div className="d-flex mb-2 justify-content-center justify-content-lg-start">
                <div>
                  <div className="rounded-0  position-relative shadow-lg mr-3 active" style={{width: "70px", height: "70px", backgroundColor: "rgba(0,0,0, 0)"}}>
                    <span className="h1 text-shadow position-absolute  text-center text-light" style={{ fontSize:"50px", top: "-2px", left: "10px" }}>{index + 1}</span>
                    <span className="position-absolute bottomRight " style={{bottom: "0px", right: "0px" }}></span>
                    <span className="text-dark position-absolute text-right " style={{ bottom: "0px", right: "5px" }}>{length}</span>
                  </div>
                </div>

                <div className={(locale==="ja" ? "japanese" : "")}>
                  <span className={"badge bg-black shadow rounded-0 " }><span className="font-weight-bold">{category}</span></span>
              
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
              
            
            
            </div>
          </div>
          
          <div className="col-lg-6 d-none d-lg-flex">
            
            <img
                    src={thumbnail !== {} ? thumbnail.fields.file.url : ""}
                    height={thumbnail !== {} ? 320 : "0"}
                    width={thumbnail !== {} ? thumbnail.fields.file.details.image.width : "0"}
                    className="img-fluid my-auto mx-auto shadow"
                    style={{maxHeight: "320px", width: thumbnail.fields.file.details.image.width * (320 /thumbnail.fields.file.details.image.height) }}
                    loading="lazy"
                    
                />
          </div> 
        </div>   
      </motion.div>
    </AnimatePresence>
  </div>
  </>
)

export default WorkTitle4
