import styled from "styled-components";

export const Container = styled.div`
    max-width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Header = styled.header`
    width: 80%;
    height: 80px;
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
`

export const Content = styled.section`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 30px;
    /* margin-top: 30px; */
`

export const Obs = styled.h4`

`

export const ButtonArea = styled.div`
    margin-top: 25px;
`