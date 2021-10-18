import styled from "styled-components";

const Input = styled.input`
    font-size: inherit;
    border-radius: 5px;
    input:focus-visible {
        outline-offset: none;
    };
    :focus-visible {
        outline: none;
    };
`;

export default Input;