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
  hidden: { opacity: 0, y: 5, duration: 2},
  visible: (custom) => ({
    opacity: 1, 
    y: 0, 
    duration: 2,
    transition: { delay: custom * 0.2 }
  }),
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
                    <motion.div custom={0} className="card" initial="hidden" animate="visible" transition="transition" variants={variants}>
                        <div className="row g-0">
                            <div className="col-lg-4 bg-dark" key="shodo_name">
                                <div className="w-100 text-center" style={{minHeight: "300px"}} >
                                    <img src="/static/images/toplogo.svg"   loading="lazy" alt="Yu Ohno" width={65} height={300} />
                                </div>
                            </div>
                            <div className="col-lg-8" key="intro">
                                <div className="card-body">
                                    <div className="h3 card-title">{myself.name}</div>
                                    <div className="card-text">
                                        <ReactMarkdown children={props.about[0].fields.about}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="mt-4">
                        <h2 className="text-center square">What I Can Do</h2>
                        <div className="row row-40">
                            {
                                props.whatICanDo.map( (skill, index) =>
                                    <motion.div initial="hidden" animate="visible" transition="transition" custom={index} variants={variants} className="col-md-6 col-lg-4 g-3" key={`skill-${index}`}>
                                        <div className="card whatICanDo h-100">
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
                                                                    {/* <span>{skill.fields.relatedWork.fields.title}</span> */}
                                                                </a>
                                                            </Link>
                                                        </div>    
                                                    }           
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
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
    console.log(resWhatICanDo)
    return { about: resAbout, whatICanDo: resWhatICanDo};
};

export default About;