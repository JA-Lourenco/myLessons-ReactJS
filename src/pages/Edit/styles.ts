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
    justify-content: space-around;
    align-items: center;
`

export const Content = styled.form`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 30px;
    margin-top: 30px;

`

export const LabelCheckbox = styled.label`
    color: var(--white);
`

export const Checkbox = styled.input`
    margin: 20px 10px 10px 0;
    height: 25px;
    width: 25px;
`

export const ButtonArea = styled.div`
    margin: 50px 0;
`