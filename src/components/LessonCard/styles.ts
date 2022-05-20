import styled from "styled-components";

export const Container = styled.div`
    min-width: 300px;
    max-width: 300px;
    max-height: 200px;
    margin: 10px 10px;
    padding: 5px 15px 15px;
    background-color: var(--black);
    border: 1px solid var(--gray);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    
    h3, p {
        font-size: 20px;
        color: var(--pink);
    }

    span {
        font-size: 16px;
        color: var(--white);
        display: flex;
        flex-direction: row;
        border: 1px solid white;
    }

    p {
        width: 95%;
        height: 100px;
        padding: 8px 10px;
        font-size: 16px;
        color: var(--lightGray);
        text-align: justify;
        line-height: 25px;
        border: 0.5px solid var(--gray);
        border-radius: 3px;
        
        overflow-y: scroll;
        ::-webkit-scrollbar {
            width: 2px;
            margin-right: 50px;
        }
        ::-webkit-scrollbar-thumb {
            background-color: var(--pink);
        }
    }
`   

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const EditIconButton = styled.button`
    position: absolute;
    right: 5px;
    top: 5px;
    padding: 2px;
    background-color: var(--black);
    border: none;
    transition: all 0.3s ease;

    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`