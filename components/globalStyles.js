import {　createGlobalStyle } from 'styled-components';

//     @import "~slick-carousel/slick/slick.css"; 
// @import "~slick-carousel/slick/slick-theme.css";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap');


    button:focus {
        outline:0;
    }

    *{
        font-family: 'Karla', sans-serif;
        font-style: italic;
    }

    .topLeft{
        background:
          linear-gradient(to top left, rgba(255,255,255,0) 50%, #f00 50.5%) no-repeat top left/100% 100%
    }
    .bottomRight{
        background:
          linear-gradient(to bottom right, rgba(255,255,255,0) 50%, #f00 50.5%) no-repeat top left/100% 100%
    }

`