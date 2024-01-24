import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    border: 2px solid #EEEEEE;
    background-color: white;
    padding-bottom: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledImage = styled.img`
    
    max-width: 100%; // 컨테이너 너비를 초과하지 않도록
    max-height: 200px;
`;

const Text = styled.p`
    margin: 5px 0; // 상하 여백
    color: black;
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
line-height: 20px;
`;

export default function Component({ imgSrc, text1, text2, text3 }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/northdetailpage');
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