import styled from "styled-components";

export const Container = styled.label`
    cursor: pointer;
    font-size: 16px;
    color: var(--white);
    padding: 10px 0;
`

export const Box = styled.input.attrs({ type: 'checkbox'})`
    cursor: pointer;
    width: 25px;
    height: 25px;
    margin-right: 10px;

`