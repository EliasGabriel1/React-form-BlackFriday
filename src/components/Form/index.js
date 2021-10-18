import styled from 'styled-components';
import { generateMedia } from "styled-media-query";


const customMedia = generateMedia({
    desktop: "78em",
    tablet: "60em",
    mobile: "46em"
  });
const Form = styled.form`
    max-width: 500px;
    margin: 0 auto;
    
    ${customMedia.lessThan("mobile")`
    max-width: 100%;
  `};
`;

export default Form;