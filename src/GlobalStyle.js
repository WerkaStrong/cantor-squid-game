import { createGlobalStyle } from 'styled-components';
import background from './background.png';

export const GlobalStyle = createGlobalStyle`
 
html {
    box-sizing: border-box;
    font-family: "Lato";
    text-align: center;
    font-size: 22px;
    background-image: url("${background}");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    min-height: 100vh;
}

*, ::after, ::before {
    box-sizing: inherit;
}

#root {
    background-color: black;
    color: aliceblue;
    width: 100%;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2%;
    padding: 3%;
    border-radius: 3%;
}

@media (max-width: 767px) {
    #root {
        max-width: 400px;
    }
}

`;
