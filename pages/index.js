import Head from "next/head"
import Link from "next/link";
// import * as mdb from 'mdb-ui-kit'; // lib
// import { Input } from 'mdb-ui-kit'; // module
import Button from '@material-ui/core/Button';
import { getAllPosts } from '../lib'
import fetch from "isomorphic-unfetch";

import Title from '../components/Title'
import ListCard from '../components/ListCard'

const Index = (props) => {
    return(
        <>
            <Head>
            <title>Home - Yu Ohno's site 2020</title>
            </Head>
            <div>
                <h1>Top</h1>
                <Title title="About Me" description="" />
                <div className="container">
                <div className="card border">
                    <div className="bg-image hover-overlay ripple" data-ripple-color="light">
                        {/* <img
                            src={thumbnail !== {} ? thumbnail.fields.file.url : "https://source.unsplash.com/random/1600x900/"}
                            className="img-fluid"
                        /> */}
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Yu Ohno</h4>
                        <div className="card-text">
                            <p>My name is Yu Ohno born in Nara, Japan on 1996.</p>
                            <p>I've learned Information Technology in National Information Technology, Nara College, Japan for seven years(2012 – 2019) and joined Zoho Japan corp in April 2019. I'm taking care of supporting queries from Japanese customers, developers, and reseller partners. I support in the range of ten products:  Zoho CRM (Customer Relationship Management), Zoho Campaigns (provides email marketing application), Zoho SalesIQ (Web visitors' tracking, live chat, and chatbot platform on the Web page), Zoho Deluge (which we can develop Zoho services' customization with low-code programming language) and API integrations.</p>
                            <p>My hobby is art calligraphy and Web development. I post works of art calligraphy and Web pages to Instagram. I would like to work as an art calligrapher and/or a Web developer, and I hope to make audiences impressive :) </p>
                        
                        </div>
                
                    </div>
                </div>
                </div>


                <Title title="Works" description="" />
                <div className="container">
                    <div className="row row-40">
                        {props.shows ? 
                            props.shows.map((show, idx) => (
                                
                                <div className="col-md-4 col-lg-3 g-3">
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
    const res2 = await getAllPosts();
    console.log(res2)
    // console.log(`Show data fetched. Count: ${data.length}`);

    return { shows: res2};
};

export default Index;