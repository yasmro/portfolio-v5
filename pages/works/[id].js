import Head from "next/head";
import Link from "next/link";

import {useState, useEffect} from 'react'
import fetch from "isomorphic-unfetch";

import { getAllPosts, getPostBySlug } from '../../lib'
import ReactMarkdown from 'react-markdown'
import Image from 'react-image-resizer'
import Slider from "react-slick";

import WorkTitle from '../../components/WorkTitle'
import ListCard from '../../components/ListCard'


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Post = props => {
  const [carouselIndex, setCarouselIndex] = useState(0)
const [length, setLength] = useState(0)

var settings = {
  className: "center",
  dots: true,
  lazyLoad: true,
  infinite: true,
  touchMove: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
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

    <WorkTitle title={props.show.fields.title} category={props.show.fields.category.fields.name} tags={props.show.fields.tags} />
    
    <div className="container">
      <div className="row">
      <div className="col-lg-4">
        <ReactMarkdown children={props.show.fields.description} />
      {props.show.image ? <img src={props.show.image.medium} /> : null}

      </div>

      <div className="col-lg-8">
        {
            (props.show.fields.photos) &&
            <>
              <div className="">
                  <p><span className="h3">{carouselIndex + 1}</span>/{props.show.fields.photos.length} {props.show.fields.photos[carouselIndex].fields.title} {props.show.fields.photos[carouselIndex].fields.description}</p>
                  
              </div>
              <Slider {...settings}>
                
                {
                  props.show.fields.photos.map( photo => (
                    <div className="w-75 text-center" Style="margin:0 auto;" >
                      <img className="align-item-center img-fluid" src={photo.fields.file.url ? photo.fields.file.url : "https://source.unsplash.com/random/1600x900/"} alt="" />
                    </div>
                  ))
                }
              </Slider>
            </>
          }

      </div>
      </div>

      <hr className="my-5"/>

      <div className="mt-3 text-center">
          <h2 className="square">Other Works</h2>
          <div className="row row-40">
            {props.shows ? 
                  props.shows.map((show, idx) => (
                      
                      <div className="col-md-4 col-lg-3 g-3">
                          <ListCard title={show.fields.title}  thumbnail={show.fields.thumbnail} slug={show.fields.slug} />
                      </div>
                  
                  
              )) : <h1>null</h1>}
          </div>
          <div className="mt-5">
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
  const res2 = await getPostBySlug(id);
    console.log(res2)
    // console.log(`Show data fetched. Count: ${data.length}`);

    return { shows: res, show: res2};
};

export default Post;