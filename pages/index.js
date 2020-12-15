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
                        <div className="col-6 col-lg-4 g-3" key={`card-${0}`}>
                            
                            <div className="card h-100 active">
                                <div className="display-2 text-center" style={{ margin: "auto 0"}}>Works</div>
                            </div>
                        </div>
                        {props.shows ? 
                            props.shows.map((show, idx) => (
                                <div className="col-6 col-lg-4 g-3" key={`card-${idx}`}>
                                    <ListCard title={show.fields.title} category={show.fields.category.fields.name} thumbnail={show.fields.thumbnail} slug={show.fields.slug} />
                                </div>
                        )) : <h1>null</h1>}
                    </div>

                    <h2 className="text-center square">What I Can Do...?</h2>
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
                        )) : <h1>null</h1>}

                        
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