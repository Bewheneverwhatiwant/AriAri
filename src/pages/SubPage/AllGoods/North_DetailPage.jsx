import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ContainerColumn from '../../../Components/Container/ContainerColumn';
import ContainerRow from '../../../Components/Container/ContainerRow';
import DetailButton from "../../MainPage/Buttons/North_DetailButton";
import ContainerCenter from '../../../Components/Container/ContainerCenter';
import North_DetailButton from '../../MainPage/Buttons/North_DetailButton';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
`;

const HorizontalLine = styled.hr`
width: 1000px;
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
width: 500px;
height: 70px;
font-size: 15px;
font-weight: bold;
color: white;
background-color: #D9D9D9;
border-radius: 15px;
border: none;
margin-right: 20px;
`

const LeftedText = styled.div`
width: 1000px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
`

const TextHeader = styled.h1`
font-size: 60px;
font-weight: bold;
margin-bottom: 20px;
`

const OtherTextHeader = styled.h1`
font-size: 30px;
font-weight: bold;
margin-bottom: 20px;
margin-left: 40px;
`

const Detail = styled.div`
font-size: 30px;
color: blcak;
line-height: 40px;
`

const Sizedbox = styled.div`
width: 30px;
height: 30px;
`
const Image = styled.img`
  width: 400px;
  height: 350px;
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

    const back = () => {
        navigate('/allnorth'); // 돌아가기 클릭 함수
    };

    const buy = () => {
        alert('북한 특산물 구매가 완료되었습니다.');
        navigate('/');
    };

    //imgSrc: "img4.svg", text1: "판매자: 이철수", text2: "상품명: 꿀", text3: "구매 점수: 15점"

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
            <ContainerRow>
                <ContainerCenter>
                    <Image src={'img4.svg'} />
                </ContainerCenter>
                <Sizedbox />
                <Sizedbox />
                <Sizedbox />
                <Sizedbox />
                <ContainerCenter>
                    <ContainerColumn>
                        <LeftedText>
                            <TextHeader>꿀</TextHeader>
                        </LeftedText>
                        <Sizedbox />
                        <HorizontalLine />
                        <Sizedbox />
                        <Detail>
                            판매지 주소: 함경북도 온성군 온성리 붉은벽돌집<br />
                            구매 시 필요한 점수: 15점<br />
                            배송 기간: 10일 이내 배송
                        </Detail>
                    </ContainerColumn>
                </ContainerCenter>
            </ContainerRow>
            <Sizedbox />
            <ContainerRow>
                <StyledButton onClick={buy}>
                    구매하기
                </StyledButton>
                <StyledButton onClick={back}>
                    다른 상품 이어서 구경하기
                </StyledButton>
            </ContainerRow>
            <Sizedbox />
            <ContainerColumn>
                <LeftedText>
                    <OtherTextHeader>
                        다른 상품 구경하기
                    </OtherTextHeader>
                </LeftedText>
                <ContainerRow>
                    <ShortcutContainer>
                        {data.map((item, index) => (
                            <North_DetailButton key={index} imgSrc={item.imgSrc} text1={item.text1} text2={item.text2} text3={item.text3} />
                        ))}
                    </ShortcutContainer>
                </ContainerRow>
            </ContainerColumn>
        </MainContainer>
    );
};
