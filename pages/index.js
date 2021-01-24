import Head from "next/head"
import Link from "next/link";
// import * as mdb from 'mdb-ui-kit'; // lib
// import { Input } from 'mdb-ui-kit'; // module
// import Button from '@material-ui/core/Button';
import { getAllPosts, getData } from '../lib'
// import fetch from "isomorphic-unfetch";

import { myself } from '../data/about'

import HomeJumbotron from '../components/HomeJumbotron'
import Title from '../components/Title'
import ListCard from '../components/ListCard'


import { motion, AnimatePresence } from "framer-motion"

const variants = {
  hidden: { opacity: 0, duration: 2},
  visible: { opacity: 1,  duration: 2 },
  hide: { opacity: 0,  duration: 2},
  transition: { duration: 2 }
}

const Index = (props) => {
    return(
        <>
            <Head>
            <title>Home - Yu Ohno's site 2020</title>
            </Head>
            <div style={{ marginBottom: "-96px"}}>
                
                {/* <HomeJumbotron name={myself.name} quickWord={myself.quickWord}/> */}
                <div  className="home-jumbotron jumbotron jumbotron-fluid py-4 mb-5 d-flex" style={{height: "calc(100vh - 90px)", marginTop: "0px", minHeight: "540px", color: "white"}}>
                    <div className="container text-center h-100" >
                        <motion.div initial="hidden" animate="visible" transition="transition" variants={variants} className="center-middle p-5 mt-5">
                
                            <div className="quotation p-5 " style={{ margin: "auto 0"}}>
                                <div className="text-shadow">
                                <h1 className="display-1"><span className="font-weight-bold">{myself.name.split(' ')[0].toUpperCase()}</span><span style={{fontWeight:200, fontSize:"100%"}}>{myself.name.split(' ')[1].toUpperCase()}</span></h1>
                                <span style={{fontWeight:200}} className="lead">I'm working as</span><br />
                                <span style={{fontWeight:200}} className="display-6" >Engineer</span><br />
                                <span style={{fontWeight:200}} className="display-6">Artist</span><span style={{fontWeight:200}} className="lead"> and <br /></span>
                                <span style={{fontWeight:200}} className="display-6">Calligrapher.</span>
                                </div>
                                {/* <img src={require('../data/images/Toplogo.svg')} className="" id="toplogo" alt="Yu-logo"/> */}
                            </div>
              
                        </motion.div>
                    </div>

                </div>
                
                                
                {/* <Title title="Works" description="" /> */}
                {/* <div className="container"> */}
                    {/* <div className="row row-40  d-none d-md-flex">
                        <div className="col-6 col-lg-4 g-3" key={`card-title`}>
                            
                            <div className="card shadow-0 h-100 align-items-center">
                                <div className="display-2 text-center" style={{ margin: "auto 0"}}><span className="quotation">Works</span></div>
                            </div>
                        </div>
                        {props.shows ? 
                            props.shows.map((show, idx) => (
                                <div className="col-6 col-lg-4 g-3" key={`card-${idx}`}>
                                    <ListCard index={idx} title={show.fields.title} category={show.fields.category.fields.name} thumbnail={show.fields.thumbnail} slug={show.fields.slug} />
                                </div>
                        )) : <h1>null</h1>}
                    </div> */}
                    
                    {/* <div className="mt-4">
                        <h2 className="text-center square">What I Can Do</h2>
                        <div className="row row-40">
                            {props.whatICanDo ? 
                                    props.whatICanDo.map((skill, index) => (
                                        <div className="col-md-6 col-lg-4 g-3">
                                            <div className="card whatICanDo h-100" key={`${index}`}>
                                                <div className="card-body">
                                                    <div className="card-title h3"><span className="skillNumber black">{index + 1}</span>{skill.fields.title}</div>
                                                    <div className="card-text">
                                                        <p>{skill.fields.description}</p>
                                                        <div className="mb-4">
                                                        {   
                                                            skill.fields.relatedSkills &&
                                                            skill.fields.relatedSkills.map( tag =>
                                                            <span tag={`skill-${index}-${tag}`} className="mr-2 badge border text-dark rounded-0"><span>{tag}</span></span>
                                                            )
                                                        }
                                                        </div>
                                                        {
                                                            skill.fields.relatedWork &&
                                                            <div className="mt-3 link rounded-0 text-right position-absolute" style={{ bottom: "10px", "right": "10px"}}>
                                                                <Link href="/works/[id]" as={`/works/${skill.fields.relatedWork.fields.slug}`}>
                                                                    <a className="btn btn-black rounded-0">
                                                                        <div className=""><i className="fas fa-arrow-right mr-2"></i>View Work</div>
                                                                    </a>
                                                                </Link>
                                                            </div>    
                                                        } 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                )) : <h1>null</h1>
                            }
                        </div> */}
                    {/* </div> */}
                {/* </div> */}
                
            </div>
        </>
    )
};

Index.getInitialProps = async function() {
    // const res2 = await getAllPosts();
    // const resWhatICanDo = await getData("whatICanDo","fields.order");
    return { res: ""};
};

export default Index;