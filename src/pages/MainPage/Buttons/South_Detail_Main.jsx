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
    border-radius: 80px;
    max-width: 200px; // 컨테이너 너비를 초과하지 않도록
    max-height: 300px;
`;

const Text = styled.p`
    margin: 5px 0; // 상하 여백
    color: black;
    font-weight: bold;
`;

const BoldText = styled(Text)` // Text 컴포넌트를 확장
    font-weight: bold; // 폰트 두께를 bold로 설정
    font-size: 20px;
    margin: 5px 0; // 상하 여백
`;

const StyledText = styled.div`
margin: 5px 0; // 상하 여백
color: black;
text-align: center;
`

export default function Component({ imgSrc, text1, text2, text3 }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/southdetailpage');
    };

    return (
        <Container onClick={handleClick}>
            <StyledImage src={imgSrc} alt="Custom Image" />
            <StyledText>{text1}</StyledText>
            <Text>{text2}</Text>
            <BoldText>{text3}</BoldText>
        </Container>
    );
}