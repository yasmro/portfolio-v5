
import React from 'react'
import styled from 'styled-components'

const WorkTitle1 = ({title, description="", category="", tags=[], abstract=""}) => (
  <div className="card rounded-0 text-white mb-3 mb-lg-0" style={{background: "var(--primary)"}}>
    <div className="card-body">
    <h1 class="display-2 rounded-0 w-100 font-weight-bold text-shadow" >{title}</h1>
    {/* <h2 className="h4 card-title">カクテルアプリ</h2>        */}
    <p class="mt-3 text-align-justify">{abstract}</p>
    <span class="mr-3 badge bg-black shadow rounded-0"><span className="">{category}</span></span>
    {tags.length > 0 &&
        <>
          {
            tags.map( tag =>
            <span className="mr-2 badge bg-light shadow text-dark rounded-0"><span className="">{tag.fields.name}</span></span>
            )
          }
        </>
      }
    </div>

  </div>
)

export default WorkTitle1
