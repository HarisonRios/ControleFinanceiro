import styled from "styled-components";

export const Container = styled.header`
   background: var(--greenS);
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 12rem;

        img {
           @media (max-width: 500px) {
            width: 150px;
           }
        }

        button {
        font-size: 0%.5;  
        border: 0;
        padding 7px;
        border-radius: 2px;
        height: 38px;

        transition: filter 0.2s;

        &:hover {
        filter:brightness(0.9); 
        }
    }
`;