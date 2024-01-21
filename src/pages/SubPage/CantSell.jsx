import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ContainerCenter from '../../Components/Container/ContainerCenter';
import ContainerColumn from '../../Components/Container/ContainerColumn';
import ContainerRow from '../../Components/Container/ContainerRow';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: #F0F0F0;
`;

const SubCon = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: white;
    color: black;
    text-align: left;
`

const TextBox = styled.div`
width: 1000px;
display: flex;
    flex-direction: column;
    color: black;
    text-align: left;
    padding: 20px;
`

const OrderContainer = styled.div`
width: 600px;
height: 250px;
background-color: white;
color: black;
border-radius: 5px;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding-left: 20px;
padding-top: 10px;

img {
    width: 100px;
    height: 100px;
    border-radius: 5px;
  }
`

const Name = styled.a`
color: black;
font-size: 20px;
`

const StyledText = styled.div`
color: black;
font-size: 33px;
`

const CustomColumn = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
line-height: 60px;
`

const CustomColumn_warn = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
line-height: 20px;
`

const MostBig = styled.h1`
color: black;
font-size: 40px;
font-weight: bold;
`

const Title = styled.h1`
color: black;
font-size: 20px;
font-weight: bold;
margin-top: 10px;
`

const Detail = styled.a`
color: black;
font-size: 15px;
margin-top: 10px;
`

const Sizedbox = styled.div`
width: 10px;
height: 30px;
`

const StyledImage = styled.img`
    width: 100px;
    height: 100px;
`;

export default function Component() {
    return (
        <>
            <MainContainer>
                <ContainerRow>
                    <StyledImage src={'icon_warning.svg'} />
                    <Sizedbox />
                    <Sizedbox />
                    <CustomColumn>
                        <StyledText>잠깐, 이런 물건들은</StyledText>
                        <MostBig>아리아리에서 절대로 판매하실 수 없어요.</MostBig>
                    </CustomColumn>
                </ContainerRow>
                <CustomColumn_warn>
                    <Detail>아리아리는 금지 품목을 판매하신 것에 대해</Detail>
                    <Title>책임지지 않습니다.</Title>
                    <Sizedbox />
                    <Title>금지된 품목을 판매하시는 경우</Title>
                    <Title>판매자에게 엄중한 법적 책임을 묻겠습니다.</Title>
                    <Detail>아래의 판매 금지 물품을 꼭 확인하시길 당부드립니다.</Detail>
                </CustomColumn_warn>
            </MainContainer>
            <SubCon>
                <TextBox>
                    <MostBig>판매 금지 품목</MostBig>
                    <Sizedbox />
                    <Detail>총기류</Detail>
                    <Detail>마약류</Detail>
                    <Detail>무기류</Detail>
                    <Detail>주류</Detail>
                    <Detail>음란물 또는 성인용품</Detail>
                    <Detail>금품갈취된 모든 물품</Detail>
                    <Detail>현금</Detail>
                    <Detail>귀금속</Detail>
                    <Detail>기타 사회의 미풍양속을 해치는 모든 물품</Detail>
                </TextBox>
            </SubCon>
        </>
    );
};
