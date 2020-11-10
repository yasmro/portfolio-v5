import Link from "next/link";
import { getAllPosts } from '../../lib'

import {Paper} from '@material-ui/core'

import fetch from "isomorphic-unfetch";

const Index = (props) => {
    return(
        <div>
            <div class="jumbotron jumbotron-fluid py-5" >
                <div class="container">
                    <span className="topLeft" />
                    <h1 class="display-4">Works</h1>
                    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>
            
            <div className="container">
                <div className="row row-30 masonry cols">

            
                    {props.shows ? 
                        props.shows.map((show, idx) => (
                            
                            <div className="col-md-6 col-lg-4 g-3">
                                <Link href="/works/[id]" as={`/works/${show.fields.slug}`}>
                                <div className="card waves-effect">
                                    <div className="bg-image hover-overlay ripple" data-ripple-color="light">
                                    <img
                                        src={show.fields.thumbnail ? show.fields.thumbnail.fields.file.url : "https://source.unsplash.com/random/1600x900/"}
                                        className="img-fluid"
                                    />
                                    <Link href="/works/[id]" as={`/works/${show.fields.slug}`}>
                                        <div className="waves-effect" Style="background-color: rgba(251, 251, 251, 0.15)"></div>
                                    </Link>
                                    </div>
                                    <div className="card-body">
                                    <h4 className="card-title">{show.fields.title}</h4>
                                    <p className="card-text">
                                        <span className="badge bg-black rounded-0">Category</span>
                                    </p>
                                    
                                    </div>
                                </div>
                                </Link>
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