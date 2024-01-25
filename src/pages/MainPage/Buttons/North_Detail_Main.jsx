import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ContainerColumn from '../../../Components/Container/ContainerColumn';
import ContainerRow from '../../../Components/Container/ContainerRow';

const Container = styled.div`
    background-color: white;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledImage = styled.img`
    max-width: 220px; // 컨테이너 너비를 초과하지 않도록
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
text-align: left;
line-height: 20px;
`

const Time = styled.p`
    margin: 5px 0; // 상하 여백
    color: #D9D9D9;
`;

const Sizedbox = styled.div`
width: 110px;
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
                <Sizedbox />
                <ContainerRow>
                    <BoldText>{text3}</BoldText>
                    <Sizedbox />
                    <Time>{text4}</Time>
                </ContainerRow>
            </ContainerColumn>
        </Container>
    );
}