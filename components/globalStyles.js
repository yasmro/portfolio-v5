import {　createGlobalStyle } from 'styled-components';



export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap');


    button:focus {
        outline:0;
    }
    
    // html, body{
    //   background-image:
    //     repeating-linear-gradient(
    //       45deg,
    //       #f5f5f5,#f5f5f5 5px,
    //       rgba(0 0 0 / 0) 0,
    //       rgba(0 0 0 / 0) 10px
    //     );
    // }

    *{
        font-family: ff-dax-pro, a-otf-ud-shin-go-pr6n, astoria-sans, toppan-bunkyu-mincho-pr6n, dnp-shuei-gothic-kin-std,'Noto Sans JP', sans-serif;
        // font-family: toppan-bunkyu-mincho-pr6n, din-2014,corporate-a, dnp-shuei-gothic-kin-std, a-otf-gothic-bbb-pr6n, 'Karla', sans-serif !important;
        /* font-style: italic !important; */
        font-weight: 300;
      }
    
      h1, h2, h3, h4, h5, h6{
        font-family: ff-dax-pro, corporate-a, din-2014, astoria-sans, toppan-bunkyu-mincho-pr6n, fot-rodin-pron, sans-serif;
      }

    .topLeft{
        background:
          linear-gradient(to top left, rgba(255,255,255,0) 50%, #f00 50.5%) no-repeat top left/100% 100%
    }
    .bottomRight{
        background:
          linear-gradient(to bottom right, rgba(255,255,255,0) 50%, #f00 50.5%) no-repeat top left/100% 100%
    }

    .active{
      background-color: rgba(202, 12, 53, 1)!important;
      color: white!important;
      font-weight: 400;
      // border-bottom: solid 2px rgba(202, 12, 53, 1)!important;
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
      background: rgba(202, 12, 53, 1);
    }
    .square:after{
      background: rgba(197,179,88, 1);
    }

    h2.square:before, h2.square:after{
      height: 10px;
      width: 10px;
    }

    .quotation{
      position: relative;
      line-height: 1.4;
      padding:0.5em 1em;
      display: inline-block;
    }

    .quotation:before, .quotation:after {
      content:'';
      width: 20px;
      height: 30px;
      position: absolute;
      display: inline-block;
    }

    .quotation:before {
      border-left: solid 2px rgba(202, 12, 53, 1);
      border-top: solid 2px rgba(202, 12, 53, 1);
      top:0;
      left: 0;
    }
    
    .quotation:after {
      border-right: solid 2px rgba(202, 12, 53, 1);
      border-bottom: solid 2px rgba(202, 12, 53, 1);
      bottom:0;
      right: 0;
    }

    .card-hover{
      transition: all 0.3s;
    }
    .card-hover:hover{
      // border-color: rgba(202, 12, 53, 1)!important;
      background-color: rgba(202, 12, 53, 1)!important;
      color: white;
      box-shadow: 0 10px 20px 0 rgba(202,12,53,.05);
      transform: translateY(-10px);
      transition: all 0.3s;
      cursor: pointer;
    }


    .whatICanDo{
      position: relative;
       padding: 1rem 0rem 1.5rem 90px;
      //  border-bottom: 3px solid #000;
       min-height: 240px;
     }

     .whatICanDo span {
      //  font-family:toppan-bunkyu-mincho-pr6n, astoria-sans, a-otf-ud-shin-go-pr6n;
      font-size: 10rem;
      line-height: 1;
      position: absolute;
      bottom: -1.25rem;
      left: 0;
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

    ::selection{
      background: rgba(202, 12, 53, 1)!important;
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