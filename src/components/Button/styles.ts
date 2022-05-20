import styled from "styled-components";

interface ButtonProps {
    color?: string
}

export const Container = styled.button<ButtonProps>`
    color: var(--white);
    font-size: 16px;
    font-weight: 700;
    background-color: ${({ color }) => color ? color : '#ED547C'};
    padding: 10px 15px;
    margin-left: 10px;
    border-radius: 3px;
    border: none;

    &:hover {
        cursor: pointer;
        opacity: 0.6;
        transition: all 0.6s ease;
    }
`