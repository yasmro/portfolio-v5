import Head from "next/head";
import Link from "next/link";
import Image from 'next/image'

import { getAllPosts } from '../../lib'
import fetch from "isomorphic-unfetch";

import { myself } from '../../data/about'
import Title from "../../components/Title"

import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0, y: 30, duration: 2},
  visible: { opacity: 1, y: 0, duration: 2 },
  transition: { duration: 2 }
}

const About = (props) => {
    console.log(props)
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
                                    <h3 className="card-title">{myself.name}</h3>
                                    <div className="card-text">
                                        <p>My name is Yu Ohno born in Nara, Japan on 1996.</p>
                                        <p>I've learned Information Technology in National Information Technology, Nara College, Japan for seven years(2012 – 2019) and joined Zoho Japan corp in April 2019. I'm taking care of supporting queries from Japanese customers, developers, and reseller partners. I support in the range of ten products:  Zoho CRM (Customer Relationship Management), Zoho Campaigns (provides email marketing application), Zoho SalesIQ (Web visitors' tracking, live chat, and chatbot platform), Zoho Deluge (which we can develop Zoho services' customization with low-code programming language) and API integrations.</p>
                                        <p>My hobby is art calligraphy and Web development. I post works of art calligraphy and Web pages to Instagram. I would like to work as an art calligrapher and/or a Web developer, and I hope to make audiences impressive :) </p>
                                    
                                    </div>
                            
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>

                    <div className="mt-4">
                        <h2 className="text-center square">What I Can Do</h2>
                        <div className="row row-40">
                            {
                                myself.whatICanDo.map( (skill, index) =>
                                    <div className="col-md-6 col-lg-6 g-3" key={`skill-${index}`}>
                                        <div className="card border whatICanDo h-100">
                                            <div className="card-body">
                                                <h3 className="card-title"><span className="skillNumber black">{index + 1}</span>{skill.title}</h3>
                                                <div className="card-text">
                                                    <p>{skill.description}</p>
                                                    {   
                                                        skill.skills &&
                                                        skill.skills.map( tag =>
                                                        <span className="mr-2 badge border text-dark rounded-0"><span>{tag}</span></span>
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
    const res2 = await getAllPosts();
    // console.log(res2)
    // console.log(`Show data fetched. Count: ${data.length}`);

    return { shows: res2};
};

export default About;