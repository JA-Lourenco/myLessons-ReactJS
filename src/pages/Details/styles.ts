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
`

export const Obs = styled.h2`
    color: var(--white);
    margin-bottom: 30px;
`

export const LabelCheckbox = styled.label`
    color: var(--white);
    pointer-events: none;
`

export const Checkbox = styled.input`
    margin: 20px 10px 10px 0;
    height: 25px;
    width: 25px;
`

export const ButtonArea = styled.div`
    margin-top: 25px;
`