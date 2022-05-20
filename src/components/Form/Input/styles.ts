import styled from "styled-components";

export const Label = styled.label`
    width: 100%;
    color: var(--white);
    font-weight: 700;
`

export const Container = styled.input`
    width: 100%;
    padding: 12px;
    margin: 10px 0;
    display: block;
    outline: none;
    border: none;
    color: var(--pink);
    font-weight: 700;

    &:focus {
        transition: all 0.3s ease;
        color: var(--white);
        background-color: var(--nightBlack);
        border: 1px solid var(--pink);
        border-radius: 5px;
    }
`