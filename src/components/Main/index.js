import styled from 'styled-components'
import { generateMedia } from "styled-media-query";


const customMedia = generateMedia({
    desktop: "78em",
    tablet: "60em",
    mobile: "46em"
  });

const Main = styled.main`
background-image: url("https://www.significadofacil.com/wp-content/uploads/2019/07/background-1000x500.jpg");
width: 100vw;
height: 100vh;
display:flex;
align-items:center;
flex-direction:column;
background-repeat: no-repeat;
background-size: 100vw 100vh;
justify-content:center;
line-height: 50px;
text-align: center;
    ${customMedia.lessThan("mobile")`
        justify-content:unset;
        line-height: inherit;
    `};
`;

export default Main;