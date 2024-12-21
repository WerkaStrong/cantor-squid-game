import styled from 'styled-components';

export const Fieldset = styled.fieldset`
    font-family: 'Lato';
    border: none;
    font-size: 30px;

    @media (max-width: 767px) {
        margin-left: auto;
        margin-right: auto;
    }
`;

export const Select = styled.select`
    font-size: 28px;
    padding: 1%;
`;

export const Paragraph = styled.p`
    padding: 0, 5%;
    width: 100%;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
`;

export const Loading = styled.p`
    font-size: 22px;
    color: #ffffff;
`;

export const Failure = styled.p`
    font-size: 22px;
    color: red;
`;

export const Span = styled.span`
    font-size: 28px;
    display: flex;
    flex-direction: column;
    padding: 2%;

    ${({ modified }) =>
        modified &&
        `
        font-family: monospace;
        font-size: 22px;
        padding: 0;
    `}
`;

export const Input = styled.input`
    padding: 2%;
    width: 90%;
    border-radius: 4px;
    font-family: 'Lato';
    font-size: 30px;
`;

export const Button = styled.button`
    width: 40%;
    border: none;
    background-color: #f9247e;
    color: #ffffff;
    font-family: 'Lato';
    font-size: 35px;
    padding: 2%;
    border-radius: 8px;
    margin-left: 0.5%;
    margin-right: 0.5%;

    &:hover {
        background-color: #be165c;
    }

    @media (max-width: 767px) {
        margin: 5px;
    }
`;
