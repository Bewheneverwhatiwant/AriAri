import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ContainerColumn from '../../../Components/Container/ContainerColumn';
import ContainerRow from '../../../Components/Container/ContainerRow';
import ContainerCenter from '../../../Components/Container/ContainerCenter';
import PaymentMethodComponent from './PaymentMethodComponent';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
`;

const HorizontalLine = styled.hr`
width: 150px;
  border: none;
  height: 1px;
  background-color: black;
  margin: 0;
`;

const CustomColumn = styled.div`
height: 70px;
display: flex;
flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const LogoColumn = styled.div`
height: 600px;
display: flex;
flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const TextHeader = styled.h1`
font-size: 25px;
font-weight: bold;
margin-bottom: 20px;
`

const PointHeader = styled.h1`
font-size: 20px;
margin-bottom: 20px;
`

const Detail = styled.div`
font-size: 17px;
color: black;
`

const Menu = styled.div`
font-size: 20px;
color: #8E8E8E;
font-weight: bold;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
height: 200px;
margin-left: 20px;
`

const Menu_3 = styled.div`
font-size: 20px;
color: #F15048;
font-weight: bold;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
height: 200px;
margin-left: 20px;
`

const Sizedbox = styled.div`
width: 30px;
height: 30px;
`

const OutButton = styled.button`
width: 200px;
height: 50px;
padding: 10px;
background-color: white;
color: #D9D9D9;
font-size: 20px;
font-weight: bold;
border: none;
border-radius: 15px;
`

const BuyButton = styled.button`
width: 200px;
height: 50px;
padding: 10px;
background-color: red;
color: white;
font-size: 20px;
font-weight: bold;
border: none;
border-radius: 15px;
margin-top: 50px;
`

const StyledImage = styled.img`
width: 200px;
height: 170px;
margin-left: 20px;
`;

const PointContainer = styled.div`
width: 200px;
height: 200px;
border-radius: 10px;
background-color: #D9D9D9;
color: black;
`

const CautionContainer = styled.div`
width: 800px;
height: 150px;
border-radius: 10px;
background-color: #D9D9D9;
color: black;
`
const VerticalLine = styled.div`
  height: 600px;
  width: 2px;
  background-color: #D9D9D9;
`;

export default function Component() {

    const navigate = useNavigate();

    const handleOut = () => {
        alert('포인트가 충전되었습니다.');
        navigate('/');
    };

    const pointOptions = [
        { points: 5000, price: 1000 },
        { points: 15000, price: 3000 },
        { points: 25000, price: 5000 },
        { points: 50000, price: 10000 }
    ];

    return (
        <MainContainer>
            <Sizedbox />

            <ContainerRow>

                <LogoColumn>
                    <StyledImage src={'logo_final.png'} />
                    <Sizedbox />
                    <CustomColumn>
                        <Menu>아리아리 알(AR)</Menu>
                        <Menu_3>충전하기</Menu_3>
                    </CustomColumn>
                </LogoColumn>

                <VerticalLine />
                <ContainerColumn>
                    <ContainerRow>
                        <Sizedbox />
                        {pointOptions.map((option, index) => (
                            <React.Fragment key={index}>
                                <PointContainer>
                                    <ContainerColumn>
                                        <ContainerCenter>
                                            <Sizedbox />
                                            <PointHeader>{option.points}알(AL) 충전</PointHeader>
                                            <Sizedbox />
                                        </ContainerCenter>
                                        <ContainerCenter>
                                            <HorizontalLine />
                                        </ContainerCenter>
                                        <ContainerCenter>
                                            <Sizedbox />
                                            <Detail>{option.price}원 결제</Detail>
                                        </ContainerCenter>
                                    </ContainerColumn>
                                </PointContainer>
                                {index < pointOptions.length - 1 && <Sizedbox />}
                            </React.Fragment>
                        ))}
                        <Sizedbox />
                    </ContainerRow>
                    <Sizedbox />

                    <PaymentMethodComponent />

                </ContainerColumn>
            </ContainerRow>


            <ContainerColumn>
                <TextHeader>
                    아리아리 정책 동의 및 결제 전 주의사항
                </TextHeader>
                <CautionContainer>
                    <ContainerCenter>
                        <Sizedbox />
                        <Detail>상품 및 가격을 확인하였으며, 계약 고지 사항과 아리아리의 정책 및 결제 진행에 동의합니다.</Detail>
                        <Sizedbox />
                        <OutButton>동의합니다.</OutButton>

                    </ContainerCenter>
                </CautionContainer>
            </ContainerColumn>
            <BuyButton>결제하기</BuyButton>
            <Sizedbox />
        </MainContainer>
    );
}
