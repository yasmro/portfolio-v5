import Head from "next/head";
import Link from "next/link";
import Image from 'next/image'
import {useRouter} from 'next/router'

import { getAbout, getData } from '../../lib'

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

import dynamic from 'next/dynamic'

const DynamicComponentWithCustomLoading = dynamic(
  () => import('../../components/Title'),
  { loading: () => <div><h1>LOADING</h1></div>}
)

const sentence = {
    whatICanDoTitle: {
        'en-US': 'What I Can Do',
        'ja': 'できること'
    }
}

const About = (props) => {
    const router = useRouter();
    const { locale, locales, defaultLocale } = router
    return(
        <>
            <Head>
                <title>About - Yu Ohno's site 2020</title>
            </Head>
            <div>
            <DynamicComponentWithCustomLoading title="About" />
                {/* <Title title="About" /> */}
                <div className="container">
                    <motion.div custom={0} className="card" initial="hidden" animate="visible" transition="transition" variants={variants}>
                        <div className="row g-0">
                            <div className="col-lg-4 bg-dark" key="shodo_name" style={{minHeight: "350px"}}>
                                <div className="position-relative w-100 h-100" >
                                    <img src="/static/images/toplogo.png"   loading="lazy" alt="Yu Ohno" width={71} height={245} className="position-absolute" style={{objectFit: "scale-down", top:"50%", left:"50%", transform: "translateY(-52%) translateX(-50%)"}} />
                                </div>
                            </div>
                            <div className="col-lg-8" key="intro">
                                <div className="card-body">
                                    <div className={"h3 card-title " + (locale==="ja" ? "japanese" : "")}>{myself.name}</div>
                                    <div className="card-text">
                                        <ReactMarkdown className={locale==="ja" ? "japanese" : ""} children={props.about[0].fields.about}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="mt-4">
                        <motion.h2 custom={0} initial="hidden" animate="visible" transition="transition" variants={variants} className={"text-center square "+ (locale==="ja" ? "japanese" : "")}>{sentence.whatICanDoTitle[locale]}</motion.h2>
                        <div className="row row-40">
                            {
                                props.about[0].fields.whatICanDo.map( (skill, index) =>
                                    <motion.div initial="hidden" animate="visible" transition="transition" custom={index} variants={variants} className="col-md-6 col-lg-4 g-3" key={`skill-${index}`}>
                                        <div className="card whatICanDo h-100">
                                            <div className="card-body">
                                                <div className="card-title h3">
                                                    <span className="skillNumber black">{index + 1}</span>
                                                    <span className={locale==="ja" ? "japanese" : ""}>{skill.fields.title}</span>
                                                </div>
                                                <div className={"card-text " + (locale==="ja" ? "japanese" : "")}>
                                                    <p>{skill.fields.description}</p>
                                                    <div className="mb-4">
                                                    {   
                                                        skill.fields.relatedSkills?.map( tag =>
                                                        <span tag={`skill-${index}-${tag}`} className="mr-2 badge border text-dark rounded-0"><span>{tag}</span></span>
                                                        )
                                                    }
                                                    </div>
                                                    {
                                                        skill.fields.relatedWork &&
                                                        <div className="mt-3 link rounded-0 text-right position-absolute" style={{ bottom: "10px", "right": "10px"}}>
                                                            <Link href="/works/[id]" as={`/works/${skill.fields.workSlug}`}>
                                                                <a className="btn btn-black rounded-0">
                                                                    <div className=""><i className="fas fa-arrow-right mr-2"></i><span>View Work</span></div>
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

export async function getStaticProps ({ locale })  {
    const about = await getData("about", "", locale);
    return { 
        props: {
            about,
            locale
        },
    };
};

// About.getInitialProps = async ({locales}) => {
//     console.log("LOCAL")
//     const resAbout = await getData("about", "", locale);
//     console.log(resAbout)
//     // const resWhatICanDo = await getData("whatICanDo","fields.order");
//     return { about: resAbout};
// };

export default About;