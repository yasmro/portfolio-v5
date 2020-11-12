import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from '../../lib'

import {Paper} from '@material-ui/core'

import fetch from "isomorphic-unfetch";


import Title from "../../components/Title"
import ListCard from "../../components/ListCard"

const Index = (props) => {
    return(
        <>
            <Head>
                <title>Works - Yu Ohno's site 2020</title>
            </Head>
            <div>
                <Title title="Works" description="" />
                
                <div className="container">
                    <div className="row row-40">
                
                        {props.shows ? 
                            props.shows.map((show, idx) => (
                                
                                <div className="col-md-6 col-lg-4 g-3">
                                    <ListCard title={show.fields.title}  thumbnail={show.fields.thumbnail} slug={show.fields.slug} />
                                </div>
                            
                            
                        )) : <h1>null</h1>}
                    
                    </div>
                </div>
            </div>
        </>
    )
};

Index.getInitialProps = async function() {
    const res = await getAllPosts();
    console.log(res)
    // console.log(`Show data fetched. Count: ${data.length}`);

    return {shows: res};
};

export default Index;