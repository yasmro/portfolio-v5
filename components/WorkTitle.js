
import React from 'react'
import Link from 'next/link'

import styled from 'styled-components'

const WorkTitle = ({title, description="", category="", tags=[]}) => (
  <div class="jumbotron jumbotron-fluid py-5" >
    <div class="container text-center">
      <h1 class="display-4 quotation">{title}</h1>        
      <p class="lead">{description}</p>
      <span class="mr-3 badge bg-light text-dark rounded-0"><span className="h6">{category}</span></span>
      <span class="mr-3">／</span>
      {tags &&
          tags.map( tag =>
          <span className="mr-2 badge bg-black rounded-0"><span className="h6">{tag.fields.name}</span></span>
          )
      }
    </div>
  </div>
)

export default WorkTitle
