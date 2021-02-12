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
  hidden: { opacity: 0, y: 5},
  visible: (custom) => ({
    opacity: 1, 
    y: 0, 
    transition: {duration: 0.3,  delay:  0}
  }),
}

import dynamic from 'next/dynamic'

const DynamicComponentWithCustomLoading = dynamic(
  () => import('../../components/Title'),
  { loading: () => <div>...</div>}
)

const sentence = {
    whatICanDoTitle: {
        'en-US': 'What I Can Do',
        'ja': 'できること'
    },
    whatIWantTitle: {
        'en-US': 'What I Want',
        'ja': 'やりたいこと'
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
                <motion.div className="container" custom={0} initial="hidden" animate="visible" variants={variants}>
                    <div custom={0} className="card px-3" initial="hidden" animate="visible" variants={variants}>
                        <div className="row align-items-center">
                            <div className="col-lg-4 " key="shodo_name" style={{minHeight: "350px"}}>
                                <div className="position-relative w-100 h-100" >
                                    <img src="/static/images/toplogo.png" loading="lazy" alt="Yu Ohno" width={71} height={245} className="position-absolute" style={{objectFit: "scale-down", top:"50%", left:"50%", transform: "translateY(16%) translateX(-50%)", filter: "invert(1)", WebkitFilter: "invert(1)"}} />
                                </div>
                            </div>
                            <div className="col-lg-8 " key="intro">
                                <div className={"card-body " + (locale==="ja" ? "japanese" : "")}>
                                    <div className={"h3 card-title " + (locale==="ja" ? "japanese" : "")}>{myself.name}</div>
                                    <div className="card-text">
                                        <ReactMarkdown  children={props.introduction}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <div className="mt-4">
                        <h2 custom={1} initial="hidden" animate="visible" transition="transition" variants={variants} 
                            className={"text-center square "+ (locale==="ja" ? "japanese" : "")}>
                            {sentence.whatICanDoTitle[locale]}
                        </h2>
                        <div className="row row-40">
                            {
                                props.whatICanDo.map( (skill, index) =>
                                    <div initial="hidden" animate="visible" transition="transition" custom={index+2} variants={variants} className="col-lg-6 g-3" key={`skill-${index}`}>
                                        <div className="card p-3 h-100">
                                            <div className="card-body">
                                                <div className={"card-title h3 d-flex align-items-center " + (locale==="ja" ? "japanese" : "")}>
                                                    <div className={"bg-dark d-flex align-items-center justify-content-center mr-3 text-white text-center " } style={{width: "33px", height: "33px"}}>
                                                        <span>{index + 1}</span>
                                                    </div>
                                                    
                                                    <span>{skill.title}</span>
                                                </div>
                                                <div className={"card-text " + (locale==="ja" ? "japanese" : "")}>
                                                    <p>{skill.description}</p>
                                                    <div className="mb-4">
                                                    {   
                                                        skill.relatedSkills?.map( tag =>
                                                        <span tag={`skill-${index}-${tag}`} className="mr-2 badge border border-dark text-dark rounded-0"><span>{tag}</span></span>
                                                        )
                                                    }
                                                    </div>
                                                    {
                                                        skill.workSlug &&
                                                        <div className="mt-3 link rounded-0 text-right " >
                                                            <Link href="/works/[id]" as={`/works/${skill.workSlug}`}>
                                                                <a className="btn btn-black rounded-0">
                                                                    <div className=""><i className="fas fa-arrow-right mr-2"></i><span>View Work</span></div>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    }           
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>     
                    </div>

                    <div className="mt-5">
                        <h2 custom={5} initial="hidden" animate="visible" transition="transition" variants={variants} 
                            className={"text-center square "+ (locale==="ja" ? "japanese" : "")}>
                            {sentence.whatIWantTitle[locale]}
                        </h2>
                        <div custom={6} className="card card-black p-3" initial="hidden" animate="visible" transition="transition" variants={variants}>
                            <div className="row align-items-center g-4" >
                                <div className="col-lg-4 position-relative" key="kh" style={{minHeight: "350px"}}>
                                    <img src='/static/images/kyo_shin_do_haku.png' style={{position: "absolute", objectFit: "scale-down", top:"50%", left:"50%", transform: "translateY(-50%) translateX(-50%)", }} height="270" width="240" id="kyoshindohaku" alt="Yu-logo"/>
                                </div>
                                <div className="col-lg-8 " key="kh_intro">
                                    <div className={"card-body " + (locale==="ja" ? "japanese" : "")}>
                                        <div className="card-text">
                                            <ReactMarkdown  children={props.whatIWant}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </motion.div>
               </div>
        </>
    )
};

export async function getStaticProps ({ locale })  {
    const about = await getData("about", "", locale);
    const introduction = about[0].fields.about
    const whatIWant = about[0].fields.whatIWant

    const whatICanDo = about[0].fields.whatICanDo.map( skill => {
        return(
            {title: skill.fields.title, description:skill.fields.description, 
                 workSlug: (skill.fields.workSlug === undefined) ? "" : skill.fields.workSlug,
                 relatedSkills:skill.fields.relatedSkills,}
        )
        // relatedSkills:skill.fields.relatedSkills,
    })
    return { 
        props: {
            introduction,
            whatICanDo,
            whatIWant,
            locale,
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