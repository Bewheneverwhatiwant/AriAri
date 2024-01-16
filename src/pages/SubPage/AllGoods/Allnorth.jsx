import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ContainerColumn from '../../../Components/Container/ContainerColumn';
import ContainerRow from '../../../Components/Container/ContainerRow';
import DetailButton from "../../MainPage/Buttons/North_DetailButton";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
`;

const HorizontalLine = styled.hr`
  border: none;
  height: 1px;
  background-color: black;
  margin: 0;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledButton = styled.button`
width: 70px;
height: 30px;
font-size: 15px;
font-weight: bold;
color: white;
background-color: #D9D9D9;
border-radius: 15px;
border: none;
margin-right: 20px;
`

const LeftedText = styled.div`
width: 1600px;
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

const Detail = styled.div`
font-size: 20px;
font-weight: bold;
color: #D9D9D9;
`

const Sizedbox = styled.div`
width: 30px;
height: 30px;
`
const Image = styled.img`
  width: 120px;
  height: 70px;
`;

const ShortcutContainer = styled.div`
    position: relative;
    bottom: 0;
    right: 0;

    display: flex;
    flex-direction: row;

    padding: 30px;
    gap: 10px;
`;

export default function Component() {

    const navigate = useNavigate();

    const handleDetaulProductsClick = () => {
        navigate('/allnorth'); // 특정 제품의 상세 피에지로 이동하도록 라우팅
    };

    // 이미지 파일 이름들의 배열
    const data = [
        { imgSrc: "img1.svg", text1: "판매자: 김개똥", text2: "상품명: 밤", text3: "구매 점수: 10점" },
        { imgSrc: "img2.svg", text1: "판매자: 리수혁", text2: "상품명: 미역", text3: "구매 점수: 15점" },
        { imgSrc: "img3.svg", text1: "판매자: 로은정", text2: "상품명: 복숭아", text3: "구매 점수: 20점" },
        { imgSrc: "img4.svg", text1: "판매자: 이철수", text2: "상품명: 꿀", text3: "구매 점수: 15점" },
        { imgSrc: "img5.svg", text1: "판매자: 신유리", text2: "상품명: 사과", text3: "구매 점수: 10점" }
    ];

    return (
        <MainContainer>
            <Sizedbox />
            <LeftedText>
                <TextHeader>지금 판매 중인 모든 북한 특산물이에요.</TextHeader>
            </LeftedText>
            {Array.from({ length: 8 }).map((_, outerIndex) => (
                <ContainerRow key={outerIndex}>
                    <ShortcutContainer>
                        {data.map((item, index) => (
                            <DetailButton key={index} imgSrc={item.imgSrc} text1={item.text1} text2={item.text2} text3={item.text3} />
                        ))}
                    </ShortcutContainer>
                </ContainerRow>
            ))}
        </MainContainer>
    );
};
