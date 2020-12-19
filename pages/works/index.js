import Head from "next/head";
// import Link from "next/link";
import { getAllPosts } from '../../lib'

// import {Paper} from '@material-ui/core'
// import fetch from "isomorphic-unfetch";

import { motion } from "framer-motion"

const variants = {
    hidden: { opacity: 0, y: 5, duration: 2},
    visible: (custom) => ({
      opacity: 1, 
      y: 0, 
      duration: 2,
      transition: { delay: custom * 0.1 }
    }),
    transition: { duration: 2 }
  }

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
                    {/* style={{columnCount: "3"}} */}
                    <div className="row row-40" >
                
                        {props.shows ? 
                            props.shows.map((show, index) => (
                                // style={{breakInside:"avoid !important"}} 
                                <>
                                <motion.div initial="hidden" animate="visible" transition="transition" custom={index} variants={variants} className="col-md-6 col-lg-4 g-3" Style="align-items: stretch;" key={`worklist-${show.fields.slug}`} >
                                    <ListCard index={index} title={show.fields.title} category={show.fields.category.fields.name} thumbnail={show.fields.thumbnail} slug={show.fields.slug} />
                                </motion.div>
                                
                                </>
                            
                            
                        )) : <h1>null</h1>}
                    
                    </div>
                </div>
            </div>
        </>
    )
};

Index.getInitialProps = async function() {
    const res = await getAllPosts();
    // console.log(res)
    // console.log(`Show data fetched. Count: ${data.length}`);

    return {shows: res};
};

export default Index;