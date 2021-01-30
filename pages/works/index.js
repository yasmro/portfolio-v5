import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from '../../lib'

import { useState } from 'react';

import { motion } from "framer-motion"
import Slider from "react-slick";

import dynamic from 'next/dynamic'

const Title = dynamic(
  () => import('../../components/Title'),
  { loading: () => <div><h1>LOADING</h1></div>}
)

import ListCard from "../../components/ListCard"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const variants = {
    hidden: { opacity: 0, y: 0, duration: 2},
    visible: (custom) => ({
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.3, delay: 0}
    }),
  }

const Index = (props) => {
    const [workIndex, setWorkIndex] = useState(0);
    var settings = {
        className: "",
        dots: true,
        lazyLoad: true,
        infinite: true,
        touchMove: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        centering: true,
        beforeChange: (current, next) => setWorkIndex(next),
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        
        customPaging: i => (
          <div
            // style={{
            //   width: "30px",
            //   height: "30px",
            //   color: (i === carouselIndex ? "var(--primary)": "black")
            // }}
            style={{marginTop: "12px"}}
            className={"pageButton " + (i === workIndex ? "active": "") }
            
          >
          </div>
        )
      };

    return(
        <>
            <Head>
                <title>Works - Yu Ohno's site 2020</title>
            </Head>
            <div>
                <Title title="Works" description="" />
                
                <div className="container">
                    {/* style={{columnCount: "3"}} */}
                    <div className="d-none d-md-inline">
                        <div className="row row-40" >
                    
                            {props.shows ? 
                                props.shows.map((show, index) => (
                                    // style={{breakInside:"avoid !important"}} 
                                    <>
                                        <Link href="/works/[id]" as={`/works/${show.fields.slug}`}>
                                            <motion.div initial="hidden" animate="visible" transition="transition" custom={index} variants={variants} className="col-md-6 col-lg-4 g-3" Style="align-items: stretch;" key={`worklist-${show.fields.slug}`} >
                                                <ListCard index={index} locale={props.locale} title={show.fields.title} jaTitle={show.fields.jaTitle} category={show.fields.category.fields.name} thumbnail={show.fields.thumbnail} slug={show.fields.slug} />
                                            </motion.div>
                                        </Link>
                                    </>
                            )) : <h1>null</h1>}
                        </div>
                    </div>

                    <div className="d-inline d-md-none">
                        <div className="mb-3">
                            <span className="h3">{workIndex + 1}</span>/{props.shows.length}
                            {/* <p className="japanese"><span className="japanese font-weight-bold">aaa</span> ss</p> */}
                        </div>
                        <Slider {...settings}>
                            {props.shows ? 
                                props.shows.map((show, index) => (
                                    // style={{breakInside:"avoid !important"}} 
                                    <>
                                        <Link href="/works/[id]" as={`/works/${show.fields.slug}`}>
                                            <div className="col-md-6 col-lg-4 g-3" Style="align-items: stretch;" key={`worklist-${show.fields.slug}`} >
                                                <ListCard index={index} title={show.fields.title} locale={props.locale} jaTitle={show.fields.jaTitle} category={show.fields.category.fields.name} thumbnail={show.fields.thumbnail} slug={show.fields.slug} />
                                            </div>
                                        </Link>
                                    </>
                            )) : <h1>null</h1>}
                        </Slider>
                    </div>   
                </div>
            </div>
        </>
    )
};

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className={"btn rounded-0"}
        style={{ ...style, padding:"8px 14px", position: "absolute", top: "-53px", right: 0 }}
        onClick={onClick}
        aria-label="NEXT"
      ><i className="fa fa-angle-right"></i></button>
    );
  }
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
        className={"btn rounded-0"}
        style={{ ...style, padding:"8px 14px", position: "absolute", top: "-53px", right: "45px" }}
        onClick={onClick}
        aria-label="PREVIOUS"
        
        ><i className="fa fa-angle-left"></i></button>
    );
}


// export async function getStaticPaths() {
//     const paths =  [
//         { locale: 'en-US' },
//         { locale: 'ja' },
//       ]
//     return { paths, fallback: true }
// }

export async function getStaticProps ({ locale })  {
    const shows = await getAllPosts(locale);
    return { 
        props: {
            shows,
            locale
        },
    };
};

// Index.getInitialProps = async function() {
//     const res = await getAllPosts();
//     // console.log(res)
//     // console.log(`Show data fetched. Count: ${data.length}`);

//     return {shows: res};
// };

export default Index;