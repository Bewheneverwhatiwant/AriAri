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
width: 500px;
height: 200px;
    display: flex;
    align-items: center;
   border: none;
    border-radius: 15px;
    background-color: #F0F0F0;
    padding: 30px;
    line-height: 20px;
`;

const Points = styled.span`
    font-size: 25px;
    font-weight: bold;
    color: black;
    margin-right: 10px; // '10'과 '알(AR)' 사이의 간격
`;

const Sizedbox = styled.div`
height: 50px;
`;
const MiniSizedbox = styled.div`
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

    return (
        <MainContainer>
            <SubCon>
                <TitleText>아리아리의 알(AR) 이란?</TitleText>
                <Sizedbox />
                아리아리가 새롭게 만들어낸 화폐 개념입니다.
                <Sizedbox />
                <PointContainer>
                    현재 남한과 북한 간의 화폐 가치가 다른 상황이므로, 아리아리는 원래 단위인 ‘원(KRW)’을 쓰기 무리라고 판단했습니다.<br />
                    또한 화폐 거래에는 많은 행정적 절차가 필요하므로,<br />
                    빠른 시일 내 남북의 경제적 격차를 줄이기 위한 방안으로<br />
                    ‘알’이라는 간단한 가상 화폐 개념을 도입했습니다.<br />
                    <br />
                    미국(달러)와 북한(원)의 환율이 1달러 당 약 8000원인 것을 고려하여,<br />
                    <br />
                    현재 한국 원과 달러 환율을 고려하면<br />
                    (*1달러에 1000원으로 책정)<br />
                    그 중간 환율인 4000원으로 알(AL)의 교환 비율을 책정했습니다.<br />

                </PointContainer>
            </SubCon>
        </MainContainer>
    );
};
