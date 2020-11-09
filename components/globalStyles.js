import {　createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400;1,700&display=swap');

    @import "~slick-carousel/slick/slick.css"; 
    @import "~slick-carousel/slick/slick-theme.css";

    button:focus {
        outline:0;
    }

    *{
        font-family: 'Karla', sans-serif;
        font-style: italic;
    }

`