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
  background-color: red;
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
margin-left: 20px;
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
border: 2px solid #D9D9D9;
border-radius: 15px;
margin-left: 20px;
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
background-color: white;
color: black;
`

const CautionContainer = styled.div`
width: 700px;
height: 150px;
border-radius: 10px;
background-color: white;
border: 2px solid red;
color: black;
display: flex;
flex-direction: column;
align-items: flex-start;
`
const VerticalLine = styled.div`
  height: 600px;
  width: 2px;
  background-color: #D9D9D9;
`;

const FullContainer = styled.div`
  display: flex;
  width: 1400px;
  height: 230px;
  border: 2px solid red;
  margin: 30px;
`;

const SmallContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 2px solid red;

  &:first-child {
    border-left: none;
  }
`;

const LastColumn = styled.div`
display: flex;
flex-direction: column;
margin-left: 80px;
`;

export default function Component() {

    const navigate = useNavigate();

    const handleOut = () => {
        alert('포인트가 충전되었습니다.');
        navigate('/');
    };

    const pointOptions = [
        { points: 50000, price: 10000 },
        { points: 250000, price: 50000 },
        { points: 500000, price: 100000 },
        { points: 750000, price: 150000 },
        { points: 1000000, price: 200000 },
    ];

    return (
        <MainContainer>
            <Sizedbox />

            <ContainerRow>

                <LogoColumn>
                    <StyledImage src={'logo_final.png'} />
                    <Sizedbox />
                    <CustomColumn>
                        <Menu>아리아리 알(AL)</Menu>
                        <Menu_3>충전하기</Menu_3>
                    </CustomColumn>
                </LogoColumn>

                <VerticalLine />
                <ContainerColumn>
                    <ContainerRow>
                        <FullContainer>
                            {pointOptions.map((option, index) => (
                                <SmallContainer key={index}>
                                    <PointContainer>
                                        {/* PointContainer 내용 */}
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
                                </SmallContainer>
                            ))}
                        </FullContainer>
                    </ContainerRow>
                    <Sizedbox />

                    <PaymentMethodComponent />

                </ContainerColumn>
            </ContainerRow>


            <LastColumn>
                <TextHeader>
                    아리아리 정책 동의 및 결제 전 주의사항
                </TextHeader>
                <CautionContainer>

                    <Sizedbox />
                    <Detail>상품 및 가격을 확인하였으며, 계약 고지 사항과 아리아리의 정책 및 결제 진행에 동의합니다.</Detail>
                    <Sizedbox />
                    <OutButton>동의합니다.</OutButton>


                </CautionContainer>
            </LastColumn>
            <BuyButton>결제하기</BuyButton>
            <Sizedbox />
        </MainContainer>
    );
}
