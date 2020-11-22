
import React from 'react'
import styled from 'styled-components'

const WorkTitle = ({title, description="", category="", tags=[], abstract=""}) => (
  <div class="jumbotron jumbotron-fluid py-5 mb-5 text-light" style={{background: "linear-gradient(45deg, var(--primary), rgba(201, 0, 118, 1))", background: "linear-gradient(45deg, var(--primary), rgba(201, 0, 118, 1))"}} >
    <div class="container text-center">
      <h1 class="display-2 quotation font-weight-bold " >{title}</h1>        
      <p class="mt-3 lead">{abstract}</p>
      <span class="mr-3 badge bg-black shadow rounded-0"><span className="h6">{category}</span></span>
      <span class="mr-3">／</span>
      {tags &&
          tags.map( tag =>
          <span className="mr-2 badge bg-light shadow text-dark rounded-0"><span className="h6">{tag.fields.name}</span></span>
          )
      }
      
    </div>
  </div>
)

export default WorkTitle
