import Head from "next/head";
import Link from "next/link";
import Image from 'next/image'

import { getData, getAllPosts } from '../../lib'
import fetch from "isomorphic-unfetch";

import ReactMarkdown from 'react-markdown'

import { myself } from '../../data/about'
import Title from "../../components/Title"

import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0, y: 30, duration: 2},
  visible: { opacity: 1, y: 0, duration: 2 },
  transition: { duration: 2 }
}

const About = (props) => {
    return(
        <>
            <Head>
                <title>About - Yu Ohno's site 2020</title>
            </Head>
            <div>
                <Title title="About" />
                <div className="container">
                    <div className="card border" initial="hidden" animate="visible" transition="transition" variants={variants}>
                        <div className="row g-0">
                            <div className="col-lg-4 bg-dark position-relative">
                                <div className="w-100 hover-overlay ripple text-center" style={{minHeight: "300px", marginTop: "0%"}} >
                                    <img src="https://yasmro.github.io/portfolio/static/media/topName.eb906793.svg"   loading="lazy" alt="Yu Ohno" width={65} height={300} />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="card-body">
                                    <div className="h3 card-title">{myself.name}</div>
                                    <div className="card-text">
                                        <ReactMarkdown children={props.about[0].fields.about}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <h2 className="text-center square">What I Can Do</h2>
                        <div className="row row-40">
                            {
                                props.whatICanDo.map( (skill, index) =>
                                    <div className="col-md-6 col-lg-6 g-3" key={`skill-${index}`}>
                                        <div className="card border whatICanDo h-100">
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
                                    </div>
                                )
                            }
                        </div>     
                    </div>
               </div>
               </div>
        </>
    )
};

About.getInitialProps = async function() {
    const resAbout = await getData("about");
    const resWhatICanDo = await getData("whatICanDo","fields.order");
    return { about: resAbout, whatICanDo: resWhatICanDo};
};

export default About;