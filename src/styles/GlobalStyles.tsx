import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body{
    width:100%;
    height:100%;
    background-color: #01010101;
    font-family: "Inter", sans-serif;
  }

  *,
  :before,
  :after{
    box-sizing:border-box;
  }

  body, h1, h2, h3, h4, h5, h6, p, button{
    margin:0;
    padding: 0;
  }

  //html{
  //  height: 100%;
  //  font-size: calc(100vw/1920*10);
  //}
  //
  //@media (max-width: 1440px) {
  //  html {
  //    font-size: calc(100vw/1440*10);
  //  }
  //}
  //@media (max-width: 760px) {
  //  html {
  //    font-size: calc(100vw/760*10);
  //  }
  //}
  //@media (max-width: 500px) {
  //  html {
  //    font-size: calc(100vw/500*10);
  //  }
  //}
    
  .wrapper{
    min-height:100vh;
    position: relative;
    width:100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
`