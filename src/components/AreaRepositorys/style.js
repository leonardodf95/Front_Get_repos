import styled from "styled-components";


export const Area = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 10px;
`

export const Card = styled.button`
    display: flex;
    border-radius: 10px;
    border: none;
    box-shadow: 0px 0px 10px #000000;
    margin: 5px;
    cursor: pointer;
    width: 350px;
    height: 100px;
    flex-direction: column;
    transition: .2s transform ease;
    transform: scale(1);
    &:hover {
        transform: scale(1.1);
        z-index: 1000;
    }
`

export const TitleRepo = styled.p`
    margin: none;
    align-self: center;
    font-weight: 700;

`
export const Description = styled.p`
    margin: 0;
    align-self: start;
`

export const Link = styled.a`
    margin: none;
    align-self: center;
`