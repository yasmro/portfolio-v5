
import React from 'react'
import styled from 'styled-components'

const WorkTitle2 = ({index=0, length=0, title, description="", category="", tags=[], abstract=""}) => (
  // style={{background: "linear-gradient(45deg, var(--primary), rgba(201, 0, 118, 1))", background: "linear-gradient(45deg, var(--primary), rgba(201, 0, 118, 1))"}}
  <div class="jumbotron jumbotron-fluid py-5 mb-5 bg-light"  >
    <div class="container">
      
      <div className="row row-20">
        <div className="col-md-3  d-inline-flex d-md-inline mb-3">
          <div className="rounded-0 pt-1 position-relative shadow mr-3" style={{width: "60px", height: "60px"}}>
            <span className="h1 position-absolute text-center text-light" style={{ fontSize:"40px", top: "-2px", left: "10px" }}>{index + 1}</span>
            <span className="position-absolute bottomRight" style={{bottom: "1px", right: "1px" }}></span>
            <span className="text-dark position-absolute text-right" style={{ bottom: "0px", right: "5px" }}>{length}</span>
          </div>
          <p className="d-none"><span className="display-3">{index + 1}</span><span className="h5">／{length}</span></p>
          <hr className="d-none" />
          <div className="mt-0 mt-md-3">
            <span class="badge bg-black shadow rounded-0"><span className="">{category}</span></span>
        
              {tags.length > 0 &&
                <>
                  <br />
                  {
                    tags.map( tag =>
                    <span className="mr-1 badge bg-light shadow text-dark rounded-0"><span className="">{tag.fields.name}</span></span>
                    )
                  }
                </>
              }
          </div>
        </div>
        
        <div className="col-md-9">

          <h1 class="display-2  font-weight-bold text-shadow" >{title}</h1>
          <p class="mt-3 lead">{abstract}</p>
        </div> 
      </div>

      
      
      
      
      
    </div>
  </div>
)

export default WorkTitle2
