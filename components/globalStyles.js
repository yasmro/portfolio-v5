import {　createGlobalStyle } from 'styled-components';



export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap');


    button:focus {
        outline:0;
    }

    *{
        font-family: toppan-bunkyu-mincho-pr6n, din-2014, astoria-sans, toppan-bunkyu-mincho-pr6n, dnp-shuei-gothic-kin-std,'Noto Sans JP', sans-serif;
        // font-family: corporate-a, dnp-shuei-gothic-kin-std, a-otf-gothic-bbb-pr6n, 'Karla', sans-serif !important;
        /* font-style: italic !important; */
        font-weight: 300;
      }
    
      h1, h2, h3, h4, h5, h6{
        font-family: din-2014, astoria-sans, toppan-bunkyu-mincho-pr6n, fot-rodin-pron, sans-serif;
      }

    .topLeft{
        background:
          linear-gradient(to top left, rgba(255,255,255,0) 50%, #f00 50.5%) no-repeat top left/100% 100%
    }
    .bottomRight{
        background:
          linear-gradient(to bottom right, rgba(255,255,255,0) 50%, #f00 50.5%) no-repeat top left/100% 100%
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
      transform: translateY(-10px);
      transition: all 0.3s;
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