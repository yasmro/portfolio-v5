import {　createGlobalStyle } from 'styled-components';



export default createGlobalStyle`
    // @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    // @import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    // @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap');


    button:focus {
        outline:0;
    }

    :root {
      --primary2: rgba(201, 0, 118, 1)!important;
      --primary1: rgba( 227, 66, 51, 1)!important;
      --primary: rgba(192, 12, 53, 1)!important;
      --secondary: rgba(197,179,88, 1)!important;
    }
    
    // html, body{
    //   background-image:
    //     repeating-linear-gradient(
    //       -23.4deg,
    //       #fafafa,#fafafa 10px,
    //       rgba(0 0 0 / 0) 0,
    //       rgba(0 0 0 / 0) 20px
    //     );
    // }

    .jumbotron{
      background: -webkit-linear-gradient(45deg, var(--primary), var(--primary1)) !important;
      color: white;
    }

    .card{
      backdrop-filter: saturate(180%) blur(20px);
      background-color: rgba(255,255,255,0.3)!important;
      border-radius: 0;
    }

    .home-jumbotron{
        // background-image:
        //   repeating-linear-gradient(
        //     -23.4deg,
        //     rgba(0,0,0,0.1), rgba(0,0,0,0.1), 40px,
        //     rgba(0 0 0 / 0) 0,
        //     rgba(0 0 0 / 0) 80px
        //   );

        background: -webkit-linear-gradient(45deg, var(--primary), var(--primary1)) !important;
        // background-color: var(--primary);
      //   background-image:
      // -webkit-linear-gradient(
      // 45deg,
      // rgba(0,0,0,0.15) 25%, rgba(0,0,0,0.15) 25%,
      // transparent 25%, transparent 75%,
      // rgba(0,0,0,0.15) 75%, rgba(0,0,0,0.15) 75%),
      
      // -webkit-linear-gradient(
      // 135deg,
      // rgba(0,0,0,0.15) 25%, rgba(0,0,0,0.15) 25%,
      // transparent 25%, transparent 75%,
      // rgba(0,0,0,0.15) 75%, rgba(0,0,0,0.15) 75%);
      
      // background-image:
      //   linear-gradient(
      //   45deg,
      //   rgba(0,0,0,0.15) 25%, rgba(0,0,0,0.15) 25%,
      //   transparent 25%, transparent 75%,
      //   rgba(0,0,0,0.15) 75%, rgba(0,0,0,0.15) 75%),
      //   linear-gradient(
      //   -45deg,
      //   rgba(0,0,0,0.15) 25%, rgba(0,0,0,0.15) 25%,
      //   transparent 25%, transparent 75%,
      //   rgba(0,0,0,0.15) 75%, rgba(0,0,0,0.15) 75%);
      background-size: 40px 40px;
    }

    

    *{
        font-family:ff-dax-pro,'Noto Sans JP', sans-serif;
        // font-family: a-otf-ud-shin-go-pr6n, astoria-sans, toppan-bunkyu-mincho-pr6n, dnp-shuei-gothic-kin-std, toppan-bunkyu-mincho-pr6n, din-2014,corporate-a, dnp-shuei-gothic-kin-std, a-otf-gothic-bbb-pr6n, 'Karla', sans-serif !important;
        // font-style: italic !important; 
        font-weight: 300;
      }

      .display-2{
        font-family:  ff-dax-compact-pro, niagara-engraved;
      }
    
      // h1, h2, h3, h4, h5, h6{
      //   font-family: ff-dax-pro, sans-serif;
      //   // corporate-a, din-2014, astoria-sans, toppan-bunkyu-mincho-pr6n, fot-rodin-pron, 
      // }

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
      border-color: transparent transparent #ffffff transparent;
      line-height: 0px;
      _border-color: #000000 #000000 #ffffff #000000;
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
      background: linear-gradient(45deg, var(--primary), var(--primary1))!important;
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
      right: 0;
    }

    .card{
      text-align: justify;
    }

    .card-hover{
      transition: all 0.3s;
    }
    .card-hover:hover{
      // border-color: var(--primary)!important;
      // background-color: var(--primary)!important;
      background: linear-gradient(45deg, var(--primary), var(--primary1))!important;
      color: white;
      box-shadow: 0 10px 20px 0 rgba(202,12,53,.1);
      transform: translateY(-10px);
      transition: all 0.3s;
      cursor: pointer;
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
      bottom: -1.1rem;
      left: -1px;
      opacity: 0.3;
      font-weight:600;
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

    /* button */
.button_container {
  position: fixed;
  top: 4%;
  right: 6%;
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
  background: #FFF;
}
.button_container.toggle-active .middle {
  opacity: 0;
  background: #FFF;
}
.button_container.toggle-active .bottom {
  transform: translateY(-11px) translateX(0) rotate(-45deg);
  background: #FFF;
}
.button_container span {
  background: #343a40;
  border: none;
  height: 1px;
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
  background: rgb(52, 58, 64) ;
  backdrop-filter: blur(8px);
  
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
      background: var(--primary)!important;
      color: #fff;
    }



    /* scroll bar */
    ::-webkit-scrollbar{
      width: 6px;
      background: rgba(0,0,0,0);
      
    }
    ::-webkit-scrollbar-track{
      /* background: rgba(255,255,255,0.2); */
      background: rgba(0,0,0,0);
      border: none;
      border-radius: 5px;
      box-shadow: inset 0 0 2px #777; 
    }
    ::-webkit-scrollbar-thumb{
      background: rgba(0,0,0,0.6);
      border-radius: 0px;
      box-shadow: none;
    }

    

`