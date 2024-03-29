import {　createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
      font-family: 'Karla',HiraginoSans-W3,'Noto Sans JP',  'Noto Serif JP',   sans-serif;
      
      font-style: italic !important; 
      font-weight: 400;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-feature-settings: "palt";
      
    }

    // .display-2, h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6{
    //   font-family: a-otf-ud-shin-go-pr6n,  neue-haas-grotesk-display, ff-dax-pro, sans-serif;
    //   // corporate-a, din-2014, astoria-sans, toppan-bunkyu-mincho-pr6n, fot-rodin-pron,
    // }

    .japanese, .japanese p, .japanese h4, .japanese h5, .japanese h6, .japanese span, .japanese a, .japanese ul, .japanese li{
      font-family: 'Noto Sans JP', sans-serif !important;
      font-style: normal !important;
      font-weight: 300;
      font-feature-settings: "palt";
    }

    // @media (min-width: 768px) { 
    //   .japanese, .japanese p, .japanese h4, .japanese h5, .japanese h6, .japanese span, .japanese a, .japanese ul, .japanese li{
    //     font-family: HiraginoSans-W2,HiraginoSans-W3, 'Noto Sans JP', sans-serif;
    //   }
    // }

    @media (max-width: 767px) { 
      p.japanese, .japanese p, .japanese a, .japanese ul, .japanese li{
        font-size: 0.9rem;
      }

       .japanese h4, .japanese h5, .japanese h6{
        font-weight: bold;
      }
    }




    .btn, .btn span{
      text-transform: none;
      font-weight: bold;
    }
        
    i, .slick-arrow, .slick-dots button, .form-control{
      font-style: normal !important;
    }

    .badge span{
      font-weight: 400;

    }


    button:focus {
        outline:0;
    }

    [class*=btn-outline-]{
      border-width: .1rem;
    }

    .center-middle{
      position: absolute;
      top: 50%;
      left: 50%;
      transform:translate(-50%,-50%);
    }


    :root {
      --primary1: #640125 !important;
      --primary: #B1063A !important;

      --secondary: rgba(254,175,110,1) !important;
      --gradient: -webkit-linear-gradient(135deg, var(--primary1),  var(--primary))!important;
    }

    #kyoshindohaku{
      --cardShadow: 10px 10px 3px rgba(108,92,48,.15);

      -webkit-filter: invert(95%) drop-shadow(var(--cardShadow));
      -moz-filter: invert(95%) drop-shadow(var(--cardShadow));
      -ms-filter: invert(95%) drop-shadow(var(--cardShadow));
      -o-filter:invert(95%)  drop-shadow(var(--cardShadow));
      filter: invert(95%)  drop-shadow(var(--cardShadow));
      

      // background: ;
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
      
      will-change: filter;
    }

    

    .gradient_text{
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      padding: 3px;
      // filter: drop-shadow(0.25rem .25rem 2rem var(--primary))!important;
      // text-shadow: 0.25rem .25rem 10rem var(--primary)!important;
    }

    html {
      -webkit-overflow-scrolling: touch;
      // will-change: transform;
    }
    html:focus-within {
      scroll-behavior: smooth;
    }

    html {
      // visibility: hidden;
    }

    html.wf-active, html.loading-delay {

      visibility: visible;
      transition: 0.3s;
    }
    
    html, body{
      // background-image:
      //   repeating-linear-gradient(
      //     -23.4deg,
      //     #fafafa,#fafafa 10px,
      //     rgba(0 0 0 / 0) 0,
      //     rgba(0 0 0 / 0) 20px
      //   );

      background: #fafafa;
      // background: #262626!important;
      // color: white;
      

      // background: #0a0a0a;
      // color: #fafafa;

      background-image: linear-gradient(23.4deg, rgba(250,250,250,0.95) 0%, rgba(250,250,250,0.999) 20%),
      url( '/static/images/pattern_black.png');
    }

    .jumbotron{
      background: var(--gradient);
      color: white;
    }

    

    

    .home-jumbotron{        
        background: #fafafa;
        // background: linear-gradient(23.4deg, rgba(147,163,207,0.2) 0%, rgba(228,239,233,0.2) )!important;
        
        // background-image:
        //   repeating-linear-gradient(
        //     -23.400001deg,
        //     #eee,#eee 20px,
        //     rgba(0 0 0 / 0) 0,
        //     rgba(0 0 0 / 0) 40px
        //   );
    }
        
    .topLeft{
        background:
          linear-gradient(to top left, rgba(255,255,255,0) 50%, #f00 50.5%) no-repeat top left/100% 100%
    }
    // .bottomRight{
    //     background:
    //       linear-gradient(to bottom right, rgba(255,255,255,0) 50%, #f00 50.5%) no-repeat top left/100% 100%
    // }
     
    .bottomRight{
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0 35px 35px;
      border-color: transparent transparent #fafafa transparent;
      line-height: 0px;
      _border-color: #000000 #000000 #fafafa #000000;
      _filter: progid:DXImageTransform.Microsoft.Chroma(color='#000000');
    }

    .skewedArea1::before{
      content: "";
      position: absolute;
      top: 0; bottom: 0; left: 0; right: 0;
      z-index: -1;
      background-color: var(--bs-dark);
      transform: skewY(-3deg);
    }

    nav.navbar-common{
      backdrop-filter: grayscale(0.33) blur(8px);
      -webkit-backdrop-filter: blur(8px);
      // background-image: linear-gradient(23.4deg,  rgba(255,255,255,0.80) 0%,  rgba(255,255,255,0.3)),
      background-image: linear-gradient(23.4deg,  rgba(247,227,224, 0.1),rgba(247,227,224, 0.65) ),
      url( '/static/images/pattern_white.png');
      // mistyrose
      background-blend-mode:lighten;
    }

    footer{
      // background-image: linear-gradient(156.6deg,  rgba(38,38,38,0.96) 80%,  rgba(38,38,38,0.9)),
      // url( '/static/images/pattern_black.png');
      // // mistyrose
      // background-blend-mode:lighten;
    }

    // .jumbotron{
    //   background-image: linear-gradient(45deg,  rgba(255,255,255,0.8) 60%,  rgba(255,255,255,0.65)),
    //   url( '/static/images/pattern_white.png');
    //   // mistyrose
    //   background-blend-mode:lighten;
    // }

    footer .nav-link{
      opacity: 0.5;
      transition: 0.3s;
    }

    footer .nav-link:hover{
      opacity: 1;
      transition: 0.3s;
    }

    .active, .nav-link.active{
      // background-color: var(--primary)!important;
      background: var(--gradient);
      color: white!important;
      font-weight: 700;
      // border-bottom: solid 2px var(--primary)!important;
      opacity: 1;
    }

    .text-shadow{
      text-shadow: 0 .5rem .75rem rgba(0,0,0,.15)!important;
    }

    .square {
      position: relative;
      padding: 0.75em 1em;
      
    }

    .square:before, .square:after {
      margin: 0.2em 0.5em;
      background: #000;
      content: "";
      height: 15px;
      width: 15px;
      display: inline-block;
    }

    .square:before{
      background: var(--secondary);
    }
    .square:after{
      background: var(--secondary);
    }

    h2.square:before, h2.square:after{
      height: 10px;
      width: 10px;
      background: var(--primary);
    }

    .sq{
      position: relative;
      line-height: 1.4;
      padding:0.5em 1em;
      display: inline-block;
    }

    .quotation{
      position: relative;
      line-height: 1.4;
      padding:0.5em 1em;
      display: inline-block;
    }

    .quotation:before, .quotation:after {
      content:'';
      width: 30px;
      height: 30px;
      position: absolute;
      display: inline-block;
    }

    .quotation:before {
      border-left: solid 3px var(--secondary);
      border-top: solid 3px var(--secondary);
      top:0;
      left: 0;
    }
    
    .quotation:after {
      border-right: solid 3px var(--secondary);
      border-bottom: solid 3px var(--secondary);
      bottom:0;
      right:0;
    }


      .card{
        // box-shadow: none;
        // background-color: rgba(255,255,255,0.6)!important;
        // background: linear-gradient(23.4deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.1) )!important;
        // background-color:rgba(228,239,233,0.2)!important;
        // border: 1px solid rgba(200,200,200,0.2);

        background: linear-gradient(23.4deg, rgba(147,163,207,0.2) 0%, rgba(228,239,233,0.2) )!important;
        

        --cardShadow: 0px 5px 2px rgba(147,163,207,.15);

        -webkit-filter: drop-shadow(var(--cardShadow));
        -moz-filter: drop-shadow(var(--cardShadow));
        -ms-filter: drop-shadow(var(--cardShadow));
        -o-filter: drop-shadow(var(--cardShadow));
        filter: drop-shadow(var(--cardShadow));
        text-align: justify;

        border-radius: 0px;
        box-shadow: var(--cardShadow);
        // border: 2px rgba(255,255,255,0.4) solid;
        // border-bottom: 2px rgba(40,40,40,0.35) solid;
        // border-right: 2px rgba(40,40,40,0.35) solid;
      }

      @media (max-width: 767px) { 
        .card{
          -webkit-filter: none;
          -moz-filter: none;
          -ms-filter: none;
          -o-filter: none;
          filter: none;
        }
      }



      .card-black{
        background: linear-gradient(23.4deg, rgba(67,67,67,0.8) 0%, rgba(0,0,0,0.4) )!important;
        color: white!important;
        --cardShadow: 5px 5px 2px rgba(147,163,207,.85);
        
        box-shadow:none;
      }

      .card-primary{
        // border: 2px solid rgba(180,180,180,0.8);
        // background: var(--gradient)!important;
        // background: linear-gradient(23.4deg, rgba(250,250,250,0.4) 0%, rgba(250,250,250,0.29) 80%),
      url( '/static/images/pattern_white.png')!important;
        
        color: rgba(60,60,60,0.95);
        --cardShadow: 10px 10px 2.5px rgba(147,163,207,.95);
        box-shadow:none;
      }

      .card .badge{
        border-color: #aaa !important;
      }

      // .card::after{
      //   position: absolute;
      //   top:0;
      //   left: 0;
      //   z-index: -1;
      //   content: "";
      //   width: 100%;
      //   height: 100%;
      //   background: linear-gradient(23.4deg, rgba(147,163,207,0.1) 0%, rgba(228,239,233,0.1) )!important;
      //   filter: blur(15px);
      //   -webkit-filter: blur(15px);
      //   will-change: filter, -webkit-filter;
      // }

    .card-hover{
      transition: ease 0.1s;
    }
    .card-hover img{
      -webkit-filter: grayscale(100%);
      -moz-filter: grayscale(100%);
      -ms-filter: grayscale(100%);
      -o-filter: grayscale(100%);
      filter: grayscale(100%);
      transition: all 0.3s;
    }



    .card-hover:hover{
      // border:  1px solid rgba(180,180,180,0.2);!important;
      // background-color: var(--primary)!important;
      // border: none;
      background: var(--gradient)!important; 
      color: white;
      
      // filter: drop-shadow(0 10px 20px 0  var(--primary));
      // transform: translateY(-5px);
      transform: scale(1.02);
      transition: ease 0.3s;
      cursor: pointer;
    }

    .card-hover:hover img {
      -webkit-filter: grayscale(0);
      -moz-filter: grayscale(0);
      -ms-filter: grayscale(0);
      -o-filter: grayscale(0);
      filter: grayscale(0);
      transition: all 0.3s;
      }

    @media (max-width: 767px) { 
      .card-hover img{
        -webkit-filter: grayscale(0%);
        -moz-filter: grayscale(0%);
        -ms-filter: grayscale(0%);
        -o-filter: grayscale(0%);
        filter: grayscale(0%);
      }

      .card-hover:hover{
        transform: translateY(0px);
      }
    }

    .card .japanese p, .detailCms p.japanese{
      line-height: 1.85;
    }


    .whatICanDo{
      position: relative;
       padding: 0.5rem 0.5rem 0rem 70px;
       margin-bottom: auto;
      //  border-bottom: 3px solid #000;
       min-height: 210px;
     }

     .whatICanDo span.skillNumber {
      //  font-family:toppan-bunkyu-mincho-pr6n, astoria-sans, a-otf-ud-shin-go-pr6n;
      font-size: 10rem;
      line-height: 1;
      position: absolute;
      bottom: -1.55rem; //-1.1rem
      left: -7px; // -1px
      opacity: 0.25;
      font-weight:400;
    }

    .myMasonryGrid{
      display: flex,
      margin-left: -30px;
      width: auto;
    },
    .myMasonryGridColumn {
      padding-left: 30px;

    }

    .slick-prev:before, .slick-next:before {
      font-family: 'slick';
      font-size: 20px;
      line-height: 1;
      opacity: .75;
      color: black;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .slick-dots li.slick-active button:before {
      color: var(--primary);
      opacity: 1;
    }

    .pageButton{
      width: 9px; 
      height: 9px;
      transform: rotateZ(45deg);
      background: #ffffff;
      border: 1px solid #aaaaaa ;
      transition: all 0.3s;
    }

    .pageButton:hover{
      background: #aaaaaa;
      transition: all 0.3s;
    }

    .pageButton.active{
      background: var(--primary);
      border: var(--primary);
      transform: rotateZ(90deg);
      transition: all 0.3s;
    }

    // .hover-page.hover-page-prev{
    //   transition: all 0.3s;
    // }

    .hover-page.hover-page-prev:hover{
      // transform: translateY(-5px);
      // transition: all 0.3s;
      // background: red;
    }

    .detailCms h4{
      margin-top: 30px;
    }
    

    .detailCms a{
      color: var(--primary);
    }
    .detailCms a:hover{
      background: var(--primary);
      color: white;
    }

    /* button */
.button_container {
  position: fixed;
  bottom: 33px;
  right: 40px;
  height: 27px;
  width: 35px;
  cursor: pointer;
  z-index: 100;
  transition: opacity 0.25s ease;
}

.button_container:hover {
  opacity: 0.7;
}
.button_container.toggle-active .top {
  transform: translateY(11px) translateX(0) rotate(45deg);
  // background: #FFF;
}
.button_container.toggle-active .middle {
  opacity: 0;
  // background: #FFF;
}
.button_container.toggle-active .bottom {
  transform: translateY(-11px) translateX(0) rotate(-45deg);
  // background: #FFF;
}
.button_container span {
  background: #343a40;
  filter: invert(50%) grayscale(100%);
  border: 1px solid black;
  height: 3px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.35s ease;
  cursor: pointer;
}
.button_container span:nth-of-type(2) {
  top: 11px;
}
.button_container span:nth-of-type(3) {
  top: 22px;
}
/* Open menu */
.overlay {
  z-index: 20;
  position: fixed;
  background: rgb(10,10,10) ;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  -ms-webkit-backdrop-filter: blur(8px);
  -moz-webkit-backdrop-filter: blur(8px);
  -o-webkit-backdrop-filter: blur(8px);

  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.35s, visibility 0.35s, height 0.35s;
  overflow: hidden;
}
.overlay.open {
  opacity: 0.9;
  visibility: visible;
  height: 100%;
}
.overlay.open li {
  animation: fadeInRight 0.5s ease forwards;
  animation-delay: 0.35s;
}
.overlay.open li:nth-of-type(2) {
  animation-delay: 0.4s;
}
.overlay.open li:nth-of-type(3) {
  animation-delay: 0.45s;
}
.overlay.open li:nth-of-type(4) {
  animation-delay: 0.5s;
}
.overlay nav {
  position: relative;
  height: 70%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 40px;
  
  
  text-align: center;
}
.overlay ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: inline-block;
  position: relative;
  height: 100%;
}
.overlay ul li {
  display: block;
  height: 25%;
  height: calc(100% / 4);
  min-height: 50px;
  position: relative;
  opacity: 0;
}
.overlay ul li a {
  display: block;
  position: relative;
  color: #FFF;
  text-decoration: none;
  overflow: hidden;
}
.overlay ul li a:hover:after, .overlay ul li a:focus:after, .overlay ul li a:active:after {
  width: 100%;
}
.overlay ul li a:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0%;
  transform: translateX(-50%);
  height: 3px;
  background: #FFF;
  transition: 0.35s;
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    left: 20%;
  }
  100% {
    opacity: 1;
    left: 0;
  }
}


.form-control:focus{
  border-color: var(--primary)!important;
  box-shadow: inset 0 0 0 1px var(--primary)!important;
}

    ::selection{
      background: var(--primary1)!important;
      color: #fff;
      -webkit-text-fill-color: white;
    }


    


    /* scroll bar */
    ::-webkit-scrollbar{
      display: none;
      width: 6px;
      background: rgba(0,0,0,0); 
    }

    #fontplus-trial-banner{
      display: none;
    }

`