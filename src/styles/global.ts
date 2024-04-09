import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --red: #e52e4d;
        --greenS: #253c31;
        --green: #008000;

        --text-title: #000000;
        --text-body: #484D50;
        
        --background: #ededee;
        --shape: #F8F8F8;
        
        /* --number1: #eaa32e;
        --number2: #206244;
        --number3: #253c31;
        --number4: #708630;
        --number5: #ededeb; */
        

    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 92%; //15px
        }

        @media (max-width: 720px) {
            font-size: 85%; 
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
    }

    #logo{
        height: 65px;
        width: 65px;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;

    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: #ededee;
        border: #008000 solid 3px;
        padding: 3rem;
        position: relative;
        border-radius: 0.50rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }
`