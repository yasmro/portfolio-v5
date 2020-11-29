import Head from "next/head";
import Link from "next/link";

import {useState, useEffect} from 'react'

import { getAllPosts, getPostBySlug } from '../../lib'
import ReactMarkdown from 'react-markdown'
import Slider from "react-slick";

import WorkTitle from '../../components/WorkTitle'
import WorkTitle2 from '../../components/WorkTitle2'
import ListCard from '../../components/ListCard'


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Post = props => {
  const [carouselIndex, setCarouselIndex] = useState(0)
const [length, setLength] = useState(0)

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
  //   <div style={{ position: "absolute",  top:-40 + 'px', right: 0 + 'px' }}>
  //     <ul style={{ margin: "0px" }}> {dots} </ul>
  //   </div>
  // ),
  // customPaging: i => (
  //   <div
  //     style={{
  //       width: "30px",
  //       color: "blue",
  //       border: "1px blue solid"
  //     }}
  //   >
  //     {i + 1}
  //   </div>
  // )
};

return(
  <>
  <Head>
    <title>{props.show.fields.title} - Yu Ohno's site 2020</title>
  </Head>
  <div>

    <WorkTitle2 index={props.index.presence} length={props.shows.length} title={props.show.fields.title} category={props.show.fields.category.fields.name} tags={props.show.fields.tags} abstract={props.show.fields.abstract} />
    
    <div className="container mt-5 ">
      <div className="row row-40">
      <div className={props.show.fields.description ? "col-lg-4" : "d-lg-none"}>
          {
            (props.show.fields.photos) &&
            <div className="d-inline d-lg-none">
              <div className="">
                  <span className="h3">{carouselIndex + 1}</span>/{props.show.fields.photos.length}
                  <p>{props.show.fields.photos[carouselIndex].fields.title} {props.show.fields.photos[carouselIndex].fields.description}</p>
              </div>
              <Slider {...settings}>
                {
                  props.show.fields.photos.map( (photo, idx) => (
                    <div className="w-100 mb-0" Style="padding:0 auto;" key={`slide-sm-${idx}`}>
                      <div className="" Style="">
                        <img className="align-item-center img-fluid border" width={photo.fields.file.details.image.width} height={photo.fields.file.details.image.height} src={photo.fields.file.url ? photo.fields.file.url : "https://source.unsplash.com/random/1600x900/"} alt="" />
                      </div>
                    </div>
                  ))
                }
              </Slider>
            </div>
          }
        <div className="mt-5 mt-lg-0">
          <ReactMarkdown children={props.show.fields.description} />
        </div>
      </div>

      <div className={props.show.fields.description ? "col-lg-8" : "col-lg-6 offset-lg-3"}>
        {
            (props.show.fields.photos) &&
            <div className="d-none d-lg-inline">
              <div className="d-flex mb-3 position-relative">
                <div className="bg-dark rounded-0 pt-1 position-relative shadow" style={{width: "60px", height: "60px"}}>
                  <span className="h1 position-absolute text-center text-light" style={{ fontSize:"40px", top: "-2px", left: "10px" }}>{carouselIndex + 1}</span>
                  <span className="position-absolute bottomRight" style={{bottom: "1px", right: "1px" }}></span>
                  <span className="position-absolute text-right" style={{ bottom: "0px", right: "5px" }}>{props.show.fields.photos.length}</span>
                </div>
                <div className="position-absolute align-middle" style={{top: "1px", left: "75px"}}>
                <span className="h4">{props.show.fields.photos[carouselIndex].fields.title}</span>
                <p>{props.show.fields.photos[carouselIndex].fields.description}</p>
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
          {/* <h2 className="square">Other Works</h2> */}
          <div className="row row-40">
            {/* {props.shows ? 
                  props.shows.map((show, idx) => (
                      
                      <div className="col-md-4 col-lg-3 g-3" onClick={() => setCarouselIndex(0)} key={`worklist-${show.fields.slug}`}>
                          <ListCard title={show.fields.title}  thumbnail={show.fields.thumbnail} slug={show.fields.slug} />
                      </div>
                  
                  
              )) : <h1>null</h1>} */}
              {/* <div className="col-6 g-3" onClick={() => setCarouselIndex(0)} key={`worklist-${props.prevShow.fields.slug}`}>
                <ListCard title={`< PREV ${props.prevShow.fields.title}`}  thumbnail={props.prevShow.fields.thumbnail} slug={props.prevShow.fields.slug} />
              </div>
              <div className="col-6 g-3" onClick={() => setCarouselIndex(0)} key={`worklist-${props.nextShow.fields.slug}`}>
                <ListCard title={`${props.nextShow.fields.title} NEXT >`}  thumbnail={props.nextShow.fields.thumbnail} slug={props.nextShow.fields.slug} />
              </div> */}

              <div className="col-4 g-3" onClick={() => setCarouselIndex(0)} style={{ cursor: "pointer"}}>
                <Link href="/works/[id]" as={`/works/${props.prevShow.fields.slug}`}>
                  <div className="w-100 position-relative">
                    <h1 className="position-absolute display-1 font-weight-bold" style={{"top": "-18%", "left": "3%", "color": "rgba(0,0,0, 0.1)"}}>{('0' + (props.index.prev + 1).toString()).slice(-2)}</h1>
                    <h2 className="h2 font-weight-bold">&lt; PREV</h2>
                    <span className="h6 counter">{props.prevShow.fields.title}</span>
                  </div>
                </Link>
              </div>
              <div className="col-4 pt-1 g-3 text-center" onClick={() => setCarouselIndex(0)} >
              <Link href="/works">
                  <button type="button" class="btn btn-outline-dark btn-lg rounded-0" data-ripple-color="dark">All Works</button>
                </Link>
              </div>
              <div className="col-4 g-3" onClick={() => setCarouselIndex(0)} style={{ cursor: "pointer"}}>
                <Link href="/works/[id]" as={`/works/${props.nextShow.fields.slug}`} >
                    <div className="w-100 position-relative text-right">
                      <h1 className="position-absolute display-1 font-weight-bold" style={{"top": "-18%","right": "3%", "color": "rgba(0,0,0, 0.1)"}}>{('0' + (props.index.next + 1).toString()).slice(-2)}</h1>
                      <h2 className="h2 font-weight-bold">NEXT &gt;</h2>
                      <span className="h6">{props.nextShow.fields.title}</span>
                    </div>
                </Link>
              </div>
        
          </div>
          

          <div className="mt-5 d-none">
            <Link href="/works">
              <button type="button" class="btn btn-outline-dark btn-lg rounded-0" data-ripple-color="dark">View All Works</button>
            </Link>
          </div>
      </div>

    </div>
     
  </div>
  </>
)};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", padding: '40px 0' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", padding: '40px 0' }}
      onClick={onClick}
    />
  );
}

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await getAllPosts();
  
  const slugs = res.map( r => r.fields.slug)
  const presenceIndex = slugs.indexOf(id)
  const prevIndex = (presenceIndex - 1 + slugs.length) % (slugs.length) 
  const nextIndex = (presenceIndex + 1 + slugs.length) % (slugs.length) 

  return { shows: res, index:{prev:prevIndex, presence:presenceIndex, next:nextIndex}, show: res[presenceIndex], prevShow: res[prevIndex], nextShow: res[nextIndex] };
};

export default Post;