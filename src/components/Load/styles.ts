import styled from 'styled-components'

interface LoadStyleProps {
    color?: string
}

export const Container = styled.div`
    height: 250px;
    width: 250px;
    background-color: var(--black);
    border: 0.5px solid var(--gray);
    border-radius: 3px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h3<LoadStyleProps>`
    color: ${({ color }) => color ? color : '#ED547C'};
    font-size: 26px;
`