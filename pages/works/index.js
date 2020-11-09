import Link from "next/link";
import { getAllPosts } from '../../lib'

import {Paper} from '@material-ui/core'

import fetch from "isomorphic-unfetch";

const Index = (props) => {
    return(
        <div>
            <h1>Works</h1>
            <div className="container">
                <div className="row row-30">

            
                    {props.shows ? 
                        props.shows.map((show, idx) => (
                            <div className="col-md-4 g-3">
                                <div className="card">
                                    <div className="bg-image hover-overlay ripple" data-ripple-color="light">
                                    <img
                                        src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                                        className="img-fluid"
                                    />
                                    <Link href="/works/[id]" as={`/works/${show.fields.slug}`}>
                                        <div className="mask" Style="background-color: rgba(251, 251, 251, 0.15)"></div>
                                    </Link>
                                    </div>
                                    <div className="card-body">
                                    <h5 className="card-title">{show.fields.title}</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </p>
                                    
                                    </div>
                                </div>
                            </div>
                        
                        
                    )) : <h1>null</h1>}
                
                </div>
            </div>
            
        </div>
    )
};

Index.getInitialProps = async function() {
    const res = await getAllPosts();
    console.log(res)
    // console.log(`Show data fetched. Count: ${data.length}`);

    return {shows: res};
};

export default Index;