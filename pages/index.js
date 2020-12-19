import Head from "next/head"
import Link from "next/link";
// import * as mdb from 'mdb-ui-kit'; // lib
// import { Input } from 'mdb-ui-kit'; // module
// import Button from '@material-ui/core/Button';
import { getAllPosts, getData } from '../lib'
// import fetch from "isomorphic-unfetch";

import { myself } from '../data/about'

// import HomeJumbotron from '../components/HomeJumbotron'
import Title from '../components/Title'
import ListCard from '../components/ListCard'

import { motion, AnimatePresence } from "framer-motion"

const variants = {
  hidden: { opacity: 0, y: 5, duration: 2},
  visible: { opacity: 1, y: 0, duration: 2 },
  hide: { opacity: 0, y: 5, duration: 2},
  transition: { duration: 2 }
}

const Index = (props) => {
    return(
        <>
            <Head>
            <title>Home - Yu Ohno's site 2020</title>
            </Head>
            <div className="">
                <div className="skewedArea">
                    {/* <HomeJumbotron name={myself.name} quickWord={myself.quickWord}/> */}
                    <div  className="home-jumbotron jumbotron jumbotron-fluid py-4 mb-5 jumbotron-minwidth" style={{height: "calc(100vh - 90px)", minHeight: "540px", color: "white"}}>
                        <div className="container" >
                            <div className="text-center" style={{marginTop: "18vh"}}>
                            <div className="quotation p-5 " style={{ margin: "auto 0"}}>
                                <motion.div initial="hidden" animate="visible" transition="transition" variants={variants} className="text-shadow">
                                <h1 className="display-1"><span className="font-weight-bold">{myself.name.split(' ')[0].toUpperCase()}</span><span style={{fontWeight:200, fontSize:"108%"}}>{myself.name.split(' ')[1].toUpperCase()}</span></h1>
                                <span style={{fontWeight:200}} className="lead">I'm working as</span><br />
                                <span style={{fontWeight:200}} className="display-6" >Engineer</span><br />
                                <span style={{fontWeight:200}} className="display-6">Artist</span><span style={{fontWeight:200}} className="lead"> and <br /></span>
                                <span style={{fontWeight:200}} className="display-6">Calligrapher.</span>
                                </motion.div>
                                {/* <img src={require('../data/images/Toplogo.svg')} className="" id="toplogo" alt="Yu-logo"/> */}
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                                
                {/* <Title title="Works" description="" /> */}
                <div className="container">
                    <div className="row row-40">
                        <div className="col-6 col-lg-4 g-3" key={`card-${0}`}>
                            
                            <div className="card h-100 active">
                                <div className="display-2 text-center" style={{ margin: "auto 0"}}>Works</div>
                            </div>
                        </div>
                        {props.shows ? 
                            props.shows.map((show, idx) => (
                                <div className="col-6 col-lg-4 g-3" key={`card-${idx}`}>
                                    <ListCard index={idx} title={show.fields.title} category={show.fields.category.fields.name} thumbnail={show.fields.thumbnail} slug={show.fields.slug} />
                                </div>
                        )) : <h1>null</h1>}
                    </div>

                    {/* <h2 className="text-center square">What I Can Do...?</h2>
                    {props.whatICanDo ? 
                            props.whatICanDo.map((skill, index) => (
                                <div className="card border whatICanDo h-100" key={`${index}`}>
                                    <div className="card-body">
                                        <div className="card-title h3"><span className="skillNumber black">{index + 1}</span>{skill.fields.title}</div>
                                        <div className="card-text">
                                            <p>{skill.fields.description}</p>
                                            {   
                                                skill.fields.relatedSkills &&
                                                skill.fields.relatedSkills.map( tag =>
                                                <span tag={`skill-${index}-${tag}`} className="mr-2 badge border text-dark rounded-0"><span>{tag}</span></span>
                                                )
                                            }
                                                
                                        </div>
                                    </div>
                                </div>
                        )) : <h1>null</h1>
                    } */}

                        
                </div>
                
            </div>
        </>
    )
};

Index.getInitialProps = async function() {
    const res2 = await getAllPosts();
    const resWhatICanDo = await getData("whatICanDo","fields.order");
    return { shows: res2, whatICanDo: resWhatICanDo};
};

export default Index;