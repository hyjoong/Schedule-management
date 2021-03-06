import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    a {
        text-decoration-line: none;
    }
    a:visited {  
        color: black;
    }
    a:link { 
        color: black;
    }
    body{
        font-family: 'Noto Sans KR', sans-serif; 
    };
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    }
`;

export default GlobalStyle;
