
import React from 'react'
import Link from 'next/link'

import styled from 'styled-components'

const ListCard = ({title, description="", thumbnail={}, slug}) => (
    <Link href="/works/[id]" as={`/works/${slug}`}>
        <div className="card card-hover border waves-effect ripple">
            <div className="bg-image hover-overlay ripple" data-ripple-color="light">
                <img
                    src={thumbnail !== {} ? thumbnail.fields.file.url : "https://source.unsplash.com/random/1600x900/"}
                    className="img-fluid"
                />
                
                </div>
                <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">
                    
                </p>
            
            </div>
        </div>
    </Link>
)

export default ListCard
