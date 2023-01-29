import styled from "styled-components";

export const Fieldset = styled.fieldset`
    border:none;

    @media (max-width: 767px) {
        margin-left: auto;
        margin-right: auto;
    }
`;

export const Select = styled.select`
    font-family:  "Lato";
    font-size: 15px;
    padding: 1%;
`;

export const Paragraph = styled.p`
    padding: 0,5%;
    width: 100%;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
`;

export const Span = styled.span`
    font-size: 15px;
    display: flex;
    flex-direction: column;
    padding: 2%;
`;

export const Input = styled.input`
    padding: 2%;
    width: 90%; 
    border-radius: 4px;
    font-family: "Lato";
`;

export const Button = styled.button`
    width:40%;
    border: none;
    background-color: #F9247E;
    color: #ffffff;
    font-family: "Lato";
    font-size: 18px;
    padding: 2%;
    border-radius: 8px;
    margin-left: 0.5%;
    margin-right: 0.5%;

    &:hover{
        background-color: #be165c;
    }

    @media (max-width: 767px) {
        margin: 5px;
    }
`;