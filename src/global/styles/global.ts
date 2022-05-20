import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #F5F5F5;
        --gray: #52525B;
        --lightGray: #A1A1AA;

        --black: #27272A;
        --nightBlack: #18181B;
        
        --blue: #121061;
        --green: #152D35;
        --red: #8B0000;
        --pink: #ED547C;
        --purple: #5429CC;

        /* Alternatives: #F5F5F5 #b5d3f0 #90B6DB #486493 */
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-widht: 1080px) {
            font-size: 93.75%;
        }
        @media (max-widht: 720px) {
            font-size: 87.5%;
        }
    }

    body, input, textarea, button {
        font-family: 'Ubuntu', sans-serif;
        font-weight: 400;
        border-radius: 3px;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }

    body {
        background: var(--nightBlack);
        -webkit-font-smoothing: antialiased;
    }

    h1 {
        color: var(--pink);
        font-size: 36px;
    }

    hr {
        border-color: var(--lightGray);
        border-width: 1px;
        width: 100%;
    }

    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        width: 80%;
        max-width: 500px;
        height: 80%;
        max-height: 300px;
        color: var(--white);
        background: var(--nightBlack);
        padding: 3rem;
        border: 1px solid var(--lightGray);
        position: relative;
    }
`

