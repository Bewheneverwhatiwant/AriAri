import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    border-radius: 10px;
    background-color: white;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledImage = styled.img`
    border-radius: 10px;
    max-width: 100%; // 컨테이너 너비를 초과하지 않도록
    max-height: 200px;
`;

const Text = styled.p`
    margin: 5px 0; // 상하 여백
    color: black;
`;

export default function Component({ imgSrc, text1, text2, text3 }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/southdetailpage');
    };

    return (
        <Container onClick={handleClick}>
            <StyledImage src={imgSrc} alt="Custom Image" />
            <Text>{text1}</Text>
            <Text>{text2}</Text>
            <Text>{text3}</Text>
        </Container>
    );
}