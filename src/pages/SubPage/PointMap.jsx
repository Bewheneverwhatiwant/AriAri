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
    justify-content: center;
    width: 100%;
    gap: 10px;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: #F0F0F0;
    height: 200px;
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
    min-height: 300px;
`

const TextBox = styled.div`
width: 1000px;
display: flex;
    flex-direction: column;
    color: black;
    text-align: left;
    padding: 20px;
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

const MostBig = styled.h1`
color: black;
font-size: 40px;
font-weight: bold;
`

const Detail = styled.a`
color: black;
font-size: 20px;
margin-top: 15px;
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
                    <StyledImage src={'icon_store.svg'} />
                    <Sizedbox />
                    <Sizedbox />
                    <CustomColumn>
                        <MostBig>"얼마로 팔아야 내 물건이 많이 팔릴까요?"</MostBig>
                        <StyledText>아리아리가 조언해드릴게요.</StyledText>
                    </CustomColumn>
                </ContainerRow>
            </MainContainer>
            <SubCon>
                <TextBox>
                    <Detail>같은 물건을 판매하는 다른 가게보다 저렴한 가격을 책정해요.</Detail>
                    <Detail>하지만, 너무 저렴한 가격을 매기면 내가 얻을 수 있는 점수가 적어진다는 것을 명심하세요.</Detail>
                    <Detail>식품의 경우 먹음직스러워보이는 사진을, 공예품의 경우 정교함이 보이는 사진을 선택하시면 좋아요.</Detail>
                    <Detail>많은 특산물을 판매할 수록 점수를 많이 얻을 수 있어요.</Detail>
                    <Detail>튼튼한 특산물, 싱싱한 특산물을 골라서 판매하세요.</Detail>
                </TextBox>
            </SubCon>
        </>
    );
};
