import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from '../../lib'
import fetch from "isomorphic-unfetch";

import { myself } from '../../data/about'
import Title from "../../components/Title"

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
                    <div className="card border">

                        <div className="row g-0">
                            <div className="col-md-4 bg-danger">
                                <div className="bg-dark hover-overlay ripple" data-ripple-color="light">
                                    {/* <img
                                        src={thumbnail !== {} ? thumbnail.fields.file.url : "https://source.unsplash.com/random/1600x900/"}
                                        className="img-fluid"
                                    /> */}
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h3 className="card-title">{myself.name}</h3>
                                    <div className="card-text">
                                        <p>My name is Yu Ohno born in Nara, Japan on 1996.</p>
                                        <p>I've learned Information Technology in National Information Technology, Nara College, Japan for seven years(2012 – 2019) and joined Zoho Japan corp in April 2019. I'm taking care of supporting queries from Japanese customers, developers, and reseller partners. I support in the range of ten products:  Zoho CRM (Customer Relationship Management), Zoho Campaigns (provides email marketing application), Zoho SalesIQ (Web visitors' tracking, live chat, and chatbot platform on the Web page), Zoho Deluge (which we can develop Zoho services' customization with low-code programming language) and API integrations.</p>
                                        <p>My hobby is art calligraphy and Web development. I post works of art calligraphy and Web pages to Instagram. I would like to work as an art calligrapher and/or a Web developer, and I hope to make audiences impressive :) </p>
                                    
                                    </div>
                            
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>

                    <div className="">
                        <h2 className="text-center square">What I Can Do</h2>
                        <div className="row row-40">
                            {
                                myself.whatICanDo.map( (skill, index) =>
                                    <div className="col-md-6 g-3">
                                        <div className="card whatICanDo">
                                            <div className="card-body">
                                                <h3 className="card-title"><span className="black">{index + 1}</span>{skill.title}</h3>
                                                <div className="card-text">
                                                    <p>{skill.description}</p>
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
    console.log(res2)
    // console.log(`Show data fetched. Count: ${data.length}`);

    return { shows: res2};
};

export default About;