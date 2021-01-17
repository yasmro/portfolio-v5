
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styled from 'styled-components'

const ListCard = ({title, jptitle="", index=0, description="", thumbnail={}, category="", slug}) => (
        <div className="card card-hover">
            <div className="bg-light hover-overlay ripple position-relative" style={{ height: "250px"}}data-ripple-color="light">
                <img
                    src={thumbnail !== {} ? thumbnail.fields.file.url : ""}
                    height={250}
                    width={thumbnail !== {} ? thumbnail.fields.file.details.image.width : "0"}
                    className="img-fluid"
                    style={{height: "250px", objectFit: "scale-down"}}
                    alt={title}
                    loading="lazy"
                    
                />
                <span className="badge bg-black rounded-0 shadow position-absolute" style={{bottom:"10px", left: "10px"}}>
                    <span className="h6">{category}</span>
                </span>
            </div>
            <div className="card-body">
                <p className="h4 card-title">{title}</p>
                <span className="japanese" style={{fontSize: "90%"}}>日本語タイトル{jptitle}</span>
                <div className="d-flex d-md-none position-absolute" style={{bottom:"22px", right:"20px"}}>
                    <Link href="/works/[id]" as={`/works/${slug}`}>
                        <span><i className="mr-2 fa fa-angle-right"></i><span>To Detail</span></span>
                    </Link>
                </div>

                {/* <span className="position-absolute" style={{bottom:"-60px", right: "0px"}}>
                    <span style={{fontSize: "150px", filter: "invert(100%)", opacity: "0.5"}}>{('0' + (index + 1).toString()).slice(-2)}</span>
                </span> */}
            </div>
        </div>
)

export default ListCard
