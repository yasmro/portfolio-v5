import Head from "next/head";
import Link from "next/link";
import {useRouter} from 'next/router'
import {useState} from 'react'

import { getAllPosts, getPostBySlug } from '../../lib'
import ReactMarkdown from 'react-markdown'
import Slider from "react-slick";


// import WorkTitle2 from '../../components/WorkTitle2'
// import WorkTitle3 from '../../components/WorkTitle3'
import WorkTitle4 from '../../components/WorkTitle4'
import WorkTitle5 from '../../components/WorkTitle5'

import { motion, AnimatePresence } from "framer-motion"

const variants = {
  hidden: { opacity: 0, y: 5, duration: 2},
  visible: { opacity: 1, y: 0, duration: 2 },
  hide: { opacity: 0, y: 5, duration: 2},
  transition: { duration: 2 }
}


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Post = props => {
  // var idx = props.index?.presence 
  const [carouselIndex, setCarouselIndex] = useState(0)
const [length, setLength] = useState(0)

const router = useRouter();
const { locale, locales, defaultLocale } = router

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
  beforeChange: (current, next) => setCarouselIndex(next),
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  // appendDots: dots => (
  //   <div>
  //     {/* style={{ position: "absolute",  top:-40 + 'px', right: 0 + 'px' }}> */}
  //     <ul style={{ margin: "-10px" }}> {dots} </ul>
  //   </div>
  // ),
  customPaging: i => (
    <div
      // style={{
      //   width: "30px",
      //   height: "30px",
      //   color: (i === carouselIndex ? "var(--primary)": "black")
      // }}
      style={{marginTop: "12px"}}
      className={"pageButton " + (i === carouselIndex ? "active": "") }
      
    >
    </div>
  )
};

const sentence = {
  abstract:{
    'en-US': 'Abstract',
    'ja': '概要'
  }
}

return(
  <>
  <Head>
    <title>{props.show?.fields.title} - Yu Ohno's site 2020</title>
  </Head>
  { props.show ?
  <div>
    {/* <WorkTitle4 thumbnail={props.show.fields.thumbnail} index={props.index.presence} length={props.shows.length} title={props.show.fields.title} jaTitle={props.show.fields.jaTitle} locale={locale} category={props.show.fields.category.fields.name} tags={props.show.fields.tags} abstract={props.show.fields.abstract} locale={props.locale}/> */}
    <WorkTitle5 thumbnail={props.show.fields.thumbnail} index={props.index.presence} length={props.shows.length} title={props.show.fields.title} jaTitle={props.show.fields.jaTitle} locale={locale} category={props.show.fields.category.fields.name} tags={props.show.fields.tags} abstract={props.show.fields.abstract} locale={props.locale}/>
    <AnimatePresence exitBeforeEnter>
    <motion.div initial="hidden" animate="visible" exit="hide" transition="transition" variants={variants} key={props.show.fields.title} className="container mt-5 ">
      <div className="row">
      <div className={props.show.fields.description ? "col-lg-4" : "col-lg-6"}>
          {
            (props.show.fields.photos) &&
            <div className="d-inline d-lg-none">
              <div className="">
                  <span className="h3">{carouselIndex + 1}</span>/{props.show.fields.photos.length}
                  <p className={props.locale==="ja" ? "japanese" : ""}><span className="japanese font-weight-bold">{props.show.fields.photos[carouselIndex].fields.title}</span> {props.show.fields.photos[carouselIndex].fields.description}</p>
              </div>
              <Slider {...settings}>
                {
                  props.show.fields.photos.map( (photo, idx) => (
                    <div className="w-100 mb-0" style={{padding:"0 auto"}} key={`slide-sm-${idx}`}>
                      <div className="">
                        <img className="align-item-center img-fluid border" width={photo.fields.file.details.image.width} height={photo.fields.file.details.image.height} src={photo.fields.file.url ? photo.fields.file.url : "https://source.unsplash.com/random/1600x900/"} alt="" />
                      </div>
                    </div>
                  ))
                }
              </Slider>
            </div>
          }
        <div className="mt-5 mt-lg-0 detailCms position-sticky" style={{  top: "120px"}}>
          {/* <WorkTitle1 index={props.index.presence} length={props.shows.length} title={props.show.fields.title} category={props.show.fields.category.fields.name} tags={props.show.fields.tags} abstract={props.show.fields.abstract} /> */}
          <div className="mt-0 p-0">
            <div className="d-none d-lg-inline">
              <div className={"h4 " + (props.locale==="ja" && "japanese")}>{props.show.fields.title}</div>
              {props.locale==="ja" && <p className="japanese">{props.show.fields.jaTitle}</p>}
              <hr />
            </div>
            {/* <div className={"h4 " + (props.locale==="ja" && "japanese")}>{sentence.abstract[props.locale]}</div> */}
            <p className={props.locale==="ja" && "japanese"}>{props.show.fields.abstract}</p>
            <ReactMarkdown className={props.locale==="ja" && "japanese"} children={props.show.fields.description} />
          </div>
          
        </div>
      </div>

      <div className={props.show.fields.description ? "col-lg-8" : "col-lg-6"}>
        {
            (props.show.fields.photos) &&
            <div className="d-none d-lg-inline">
              <div className="d-flex mb-3 position-relative">
                <div className="bg-dark rounded-0 pt-1 position-relative" style={{width: "60px", height: "60px"}}>
                  <span className="h1 position-absolute text-center text-light" style={{ fontSize:"40px", top: "-2px", left: "10px" }}>{carouselIndex + 1}</span>
                  <span className="position-absolute bottomRight" style={{bottom: "1px", right: "1px" }}></span>
                  <span className="position-absolute text-right" style={{ bottom: "0px", right: "5px" }}>{props.show.fields.photos.length}</span>
                </div>
                <div className="position-absolute align-middle" style={{top: "1px", left: "75px"}}>
                <span className={"h4 " + (props.locale==="ja" ? "japanese" : "")}>{props.show.fields.photos[carouselIndex].fields.title}</span>
                <p className={ (props.locale==="ja" ? "japanese" : "")}>{props.show.fields.photos[carouselIndex].fields.description}</p>
                </div>
                
              </div>
              <Slider {...settings} className="">
                
                {
                  props.show.fields.photos.map( (photo, idx) => (
                    <div className="w-100"  key={`slide-sm-${idx}`}>
                        <img className="align-item-center img-fluid border" width={photo.fields.file.details.image.width} height={photo.fields.file.details.image.height} src={photo.fields.file.url ? photo.fields.file.url : "https://source.unsplash.com/random/1600x900/"} alt="" />
                    </div>
                  ))
                }
              </Slider>
            </div>
          }

      </div>
      </div>

      <hr className="my-5"/>

      <div className="mt-3">
          <div className="row row-40">
              <div className="col-4 g-3 hover-page hover-page-prev" onClick={() => setCarouselIndex(0)} style={{ cursor: "pointer"}}>
                <Link href="/works/[id]" as={`/works/${props.prevShow.fields.slug}`}>
                  <div className="w-100 position-relative ">
                    <h1 className="position-absolute display-1" style={{"top": "-18%", "left": "1%", "color": "rgba(0,0,0, 0.1)"}}>{('0' + (props.index.prev + 1).toString()).slice(-2)}</h1>
                    <h2 className="h2 font-weight-bold">&lt; PREV</h2>
                    <span className="h6 counter">{props.prevShow.fields.title}</span>
                  </div>
                </Link>
              </div>

              <div className="offset-4 col-4  g-3" onClick={() => setCarouselIndex(0)} style={{ cursor: "pointer"}}>
                <Link href="/works/[id]" as={`/works/${props.nextShow.fields.slug}`} >
                    <div className="position-relative text-right hover-page hover-page-next">
                      <h1 className="position-absolute display-1" style={{"top": "-18%","right": "1%", "color": "rgba(0,0,0, 0.1)"}}>{('0' + (props.index.next + 1).toString()).slice(-2)}</h1>
                      <h2 className="h2 font-weight-bold">NEXT &gt;</h2>
                      <span className="h6">{props.nextShow.fields.title}</span>
                    </div>
                </Link>
              </div>
        
          </div>
          
          <div className="d-none mt-5 text-center">
            <Link href="/works">
              <button type="button" className="btn btn-outline-dark btn-lg rounded-0" data-ripple-color="dark">View All Works</button>
            </Link>
          </div>
      </div>

    </motion.div>
    </AnimatePresence>
  </div>
  : <p>...</p>}
  </>
)};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={"btn btn-outline-dark rounded-0"}
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
      className={"btn btn-outline-dark rounded-0"}
      style={{ ...style, padding:"8px 14px", position: "absolute", top: "-53px", right: "45px" }}
      onClick={onClick}
      aria-label="PREVIOUS"
    ><i className="fa fa-angle-left"></i></button>
  );
}

export async function getStaticPaths({ locales }) {
  const res = await getAllPosts();

  const paths = locales.reduce(
    (acc, next) => [
      ...acc,
      ...res.map((r) => ({
        params: {
          id:`${r.fields.slug}`,
        },
        locale: next,
      })),
    ],
    []
  );
  // res?.map((r) => `/works/${r.fields.slug}`) ?? []
  return { paths: paths, fallback: false }
}

export async function getStaticProps ({params={id:""}, locale=""})  {
  const id = params.id;

  const shows = await getAllPosts();
  const show = await getPostBySlug(id, locale);
  
  const slugs = shows.map( r => r.fields.slug)
  const presenceIndex = slugs.indexOf(id)
  const prevIndex = (presenceIndex - 1 + slugs.length) % (slugs.length) 
  const nextIndex = (presenceIndex + 1 + slugs.length) % (slugs.length)
  return { 
      props: {
          shows,
          show,
          index:{prev:prevIndex, presence:presenceIndex, next:nextIndex},
          prevShow: shows[prevIndex], nextShow: shows[nextIndex],
          locale
      },
  };
};

// Post.getInitialProps = async function(context) {
//   const { id } = context.query;
//   const res = await getAllPosts();
//   const res2 = await getPostBySlug(id);
  
//   const slugs = res.map( r => r.fields.slug)
//   const presenceIndex = slugs.indexOf(id)
//   const prevIndex = (presenceIndex - 1 + slugs.length) % (slugs.length) 
//   const nextIndex = (presenceIndex + 1 + slugs.length) % (slugs.length) 

//   return { shows: res, index:{prev:prevIndex, presence:presenceIndex, next:nextIndex}, show: res2, prevShow: res[prevIndex], nextShow: res[nextIndex] };
// };





export default Post;