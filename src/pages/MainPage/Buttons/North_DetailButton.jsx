import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ContainerColumn from '../../../Components/Container/ContainerColumn';
import ContainerRow from '../../../Components/Container/ContainerRow';

const Container = styled.div`
min-width: 180px;
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
    margin-left: 5px;
`;

const BoldText = styled(Text)` // Text 컴포넌트를 확장
    font-weight: bold; // 폰트 두께를 bold로 설정
    font-size: 20px;
    margin: 5px 0; // 상하 여백
    margin-left: 5px;
`;

const StyledText = styled.div`
margin: 5px 0; // 상하 여백
color: black;
text-align: center;
line-height: 20px;
`;

const Time = styled.p`
    margin: 5px 0; // 상하 여백
    color: #D9D9D9;
`;

const Sizedbox = styled.div`
height: 10px;
`;

export default function Component({ imgSrc, text1, text2, text3, text4 }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/northdetailpage');
    };

    return (
        <Container onClick={handleClick}>
            <StyledImage src={imgSrc} alt="Custom Image" />
            <StyledText>{text1}</StyledText>
            <ContainerColumn>
                <Text>{text2}</Text>
                <Sizedbox />
                <ContainerRow>
                    <BoldText>{text3}</BoldText>
                    <Time>{text4}</Time>
                </ContainerRow>
            </ContainerColumn>

        </Container>
    );
}