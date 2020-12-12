import Head from "next/head"
import Link from "next/link";
// import * as mdb from 'mdb-ui-kit'; // lib
// import { Input } from 'mdb-ui-kit'; // module
// import Button from '@material-ui/core/Button';
import { getAllPosts } from '../lib'
// import fetch from "isomorphic-unfetch";

import { myself } from '../data/about'

import HomeJumbotron from '../components/HomeJumbotron'
import Title from '../components/Title'
import ListCard from '../components/ListCard'

const Index = (props) => {
    return(
        <>
            <Head>
            <title>Home - Yu Ohno's site 2020</title>
            </Head>
            <div className="">
                <div className="skewedArea">
                    <HomeJumbotron name={myself.name} quickWord={myself.quickWord}/>
                </div>
                                
                {/* <Title title="Works" description="" /> */}
                <div className="container">
                    <div className="row row-40">
                        {props.shows ? 
                            props.shows.map((show, idx) => (
                                
                                <div className="col-6 col-lg-4 g-3" key={`card-${idx}`}>
                                    <ListCard title={show.fields.title} category={show.fields.category.fields.name} thumbnail={show.fields.thumbnail} slug={show.fields.slug} />
                                </div>
                            
                            
                        )) : <h1>null</h1>}
                    
                    </div>
                </div>
                
            </div>
        </>
    )
};

Index.getInitialProps = async function() {
    const res2 = await getAllPosts();
    console.log(res2)
    // console.log(`Show data fetched. Count: ${data.length}`);

    return { shows: res2};
};

export default Index;