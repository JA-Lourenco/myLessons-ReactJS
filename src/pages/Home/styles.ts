import styled from "styled-components";

export const Container = styled.div`
    max-width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Header = styled.header`
    width: 70%;
    height: 80px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const TotalItems = styled.p`
    color: var(--lightGray);
`

export const Content = styled.main`
    width: 80%;
    margin: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const ButtonArea = styled.div`
    margin: 50px 0;
`

export const Footer = styled.footer`
    margin-top: 50px;
`