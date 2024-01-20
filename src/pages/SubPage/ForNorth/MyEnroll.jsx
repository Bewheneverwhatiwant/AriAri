import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ContainerColumn from '../../../Components/Container/ContainerColumn';
import ContainerCenter from '../../../Components/Container/ContainerCenter';
import ContainerRow from '../../../Components/Container/ContainerRow';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
    padding-top: 30px;
    padding-bottom: 30px;
`;

const WhyButton = styled.div`
width: 400px;
height: 50px;
background-color: #D9D9D9;
border-radius: 15px;
padding: 10px;

display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

img {
    width: 20px;
    height: 20px;
  }
`

const WhyText = styled.a`
font-size: 15px;
color: black;
text-align: center;
line-height: 20px;
`

const OrderContainer = styled.div`
width: 550px;
height: 150px;
background-color: #F0F0F0;
color: black;
border-radius: 20px;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 10px;

img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
  }
`

const StyledImage = styled.img`
    width: 40px;
    height: 40px;
`;

const Title = styled.h1`
color: black;
font-size: 20px;
font-weight: bold;
`

const StyledText = styled.div`
color: black;
line-height: 20px;
font-size: 15px;
`

const Sizedbox = styled.div`
width: 30px;
height: 30px;
`

const DetailButton = styled.button`
width: 230px;
height: 30px;
font-size: 15px;
font-weight: bold;
color: white;
background-color: #D9D9D9;
border-radius: 15px;
border: none;
margin: 15px;
`

const StyledButton = styled.button`
width: 230px;
height: 30px;
font-size: 15px;
font-weight: bold;
color: white;
background-color: #D9D9D9;
border-radius: 15px;
border: none;
margin: 15px;
`

export default function Component() {
    return (
        <MainContainer>
            <WhyButton>
                <ContainerRow>
                    <img src={'icon_why.svg'} />
                    <Sizedbox />
                    <WhyText>"판매 중단과 판매 중단 수정, 언제 하는 건가요?"<br />사용 설명 보러가기</WhyText>
                </ContainerRow>
            </WhyButton>
            <Sizedbox />
            <OrderContainer>
                <ContainerColumn>
                    <ContainerRow>
                        <img src={'picture_insam.png'} />
                        <Sizedbox />
                        <StyledText>
                            상품명: 인삼<br />
                            판매지 주소(내 주소): 함경북도 온성군 00리 빨간지붕 주택<br />
                            책정한 점수: 10점
                        </StyledText>
                    </ContainerRow>
                    <ContainerRow>
                        <StyledButton>
                            판매중단 (상품 등록 취소)
                        </StyledButton>
                        <Sizedbox />
                        <StyledButton>
                            판매 정보 수정
                        </StyledButton>
                    </ContainerRow>
                </ContainerColumn>
            </OrderContainer>

            <Sizedbox />
            <OrderContainer>
                <ContainerColumn>
                    <ContainerRow>
                        <img src={'picture_apple.png'} />
                        <Sizedbox />
                        <StyledText>
                            상품명: 사과<br />
                            판매지 주소(내 주소): 함경북도 온성군 00리 빨간지붕 주택<br />
                            책정한 점수: 15점
                        </StyledText>
                    </ContainerRow>
                    <ContainerRow>
                        <StyledButton>
                            판매중단 (상품 등록 취소)
                        </StyledButton>
                        <Sizedbox />
                        <StyledButton>
                            판매 정보 수정
                        </StyledButton>
                    </ContainerRow>
                </ContainerColumn>
            </OrderContainer>

            <Sizedbox />
            <OrderContainer>
                <ContainerColumn>
                    <ContainerRow>
                        <img src={'picture_baechu.png'} />
                        <Sizedbox />
                        <StyledText>
                            상품명: 배추<br />
                            판매지 주소(내 주소): 함경북도 온성군 00리 빨간지붕 주택<br />
                            책정한 점수: 8점
                        </StyledText>
                    </ContainerRow>
                    <ContainerRow>
                        <StyledButton>
                            판매중단 (상품 등록 취소)
                        </StyledButton>
                        <Sizedbox />
                        <StyledButton>
                            판매 정보 수정
                        </StyledButton>
                    </ContainerRow>
                </ContainerColumn>
            </OrderContainer>
        </MainContainer>
    );
};
