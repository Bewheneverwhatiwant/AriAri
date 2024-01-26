import React from 'react';
import styled from 'styled-components';
import ContainerColumn from '../../../Components/Container/ContainerColumn';
import ContainerRow from '../../../Components/Container/ContainerRow';
import { useNavigate } from 'react-router-dom';

const MainContainer = styled.div`
min-height: 620px;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
gap: 10px;
align-items:center;
`;

const SubCon = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 1500px;
gap: 10px;
align-items: flex-start;
padding: 20px;
`;

const TitleText = styled.div`
    font-size: 40px;
`;

const Detail = styled.a`
font-size: 20px;
color: #4D515A;
font-weight: bold;
`

const PointContainer = styled.div`
width: 460px;
height: 150px;
    display: flex;
    align-items: center;
   border: none;
    border-radius: 15px;
    background-color: #F0F0F0;
    padding: 30px;
`;

const Points = styled.span`
    font-size: 25px;
    font-weight: bold;
    color: black;
    margin-right: 10px; // '10'과 '알(AR)' 사이의 간격
`;

const Sizedbox = styled.div`
height: 100px;
`;
const MiniSizedbox = styled.div`
width: 30px;
height: 40px;
`;

const PointLabel = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: #4D515A;
`;

const Button = styled.button`
width: 200px;
height: 50px;
padding: 10px;
background-color: white;
color: black;
font-size: 20px;
font-weight: bold;
border: none;
border-radius: 15px;
`

const CustomRow = styled.div`
display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`

export default function Component() {

    const navigate = useNavigate();

    const handleOut = () => {
        navigate('/chargepoint');
    };

    const GoAR = () => {
        navigate('/aboutar');
    };

    return (
        <MainContainer>
            <SubCon>
                <TitleText>나의 알(AR) 조회</TitleText>
                <Sizedbox />
                <PointContainer>
                    <ContainerColumn>
                        <Detail>현재 내가 보유한 알(AR)은</Detail>
                        <MiniSizedbox />
                        <CustomRow>
                            <Points>10</Points>
                            <PointLabel>알(AR) 입니다.</PointLabel>
                        </CustomRow>
                        <MiniSizedbox />
                        <ContainerRow>
                            <Button onClick={handleOut}>알(AR) 충전하기</Button>
                            <MiniSizedbox />
                            <Button onClick={GoAR}>알(AR)이 궁금해요</Button>
                        </ContainerRow>
                    </ContainerColumn>
                </PointContainer>
            </SubCon>
        </MainContainer>
    );
};
