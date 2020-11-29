
import React from 'react'
import Link from 'next/link'

import styled from 'styled-components'

const ListCard = ({title, description="", thumbnail={}, slug}) => (
    <Link href="/works/[id]" as={`/works/${slug}`}>
        <div className="card card-hover border waves-effect ripple">
            <div className="bg-light hover-overlay ripple" style={{ height: "250px"}}data-ripple-color="light">
                <img
                    src={thumbnail !== {} ? thumbnail.fields.file.url : "https://source.unsplash.com/random/1600x900/"}
                    height={thumbnail !== {} ? thumbnail.fields.file.details.image.height : "0"}
                    width={thumbnail !== {} ? thumbnail.fields.file.details.image.width : "0"}
                    className="img-fluid"
                    style={{width: "100%", height: "100%", objectFit: "scale-down"}}
                    alt={title}
                />
                
                </div>
                <div className="card-body">
                <p className="h4 card-title text-center">{title}</p>
                <p className="card-text">
                    
                </p>
            
            </div>
        </div>
    </Link>
)

export default ListCard
