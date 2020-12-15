
import React from 'react'
import styled from 'styled-components'

const WorkTitle1 = ({title, description="", category="", tags=[], abstract=""}) => (
  <div className="card active text-white shadow rounded-0 bg-light  mb-lg-0" style={{backgroundColor: "var(--primary)"}}>
    <div className="card-body">
    <div class="h2 rounded-0 w-100 text-shadow" >{title}</div>
    {/* <h2 className="h4 card-title">カクテルアプリ</h2>        */}
    <p class="text-align-justify">{abstract}</p>
    <span class="mr-2 badge bg-black shadow rounded-0"><span className="">{category}</span></span>
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
