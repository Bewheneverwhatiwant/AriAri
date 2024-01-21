import React from 'react';
import styled from 'styled-components';
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
font-size: 20px;
margin-bottom: 15px;
font-weight: bold;
`

const Detail = styled.a`
color: black;
font-size: 20px;
margin-bottom: 15px;
`

const Sizedbox = styled.div`
width: 50px;
height: 30px;
`

const StyledImage = styled.img`
    width: 150px;
    height: 150px;
`;

const Button = styled.button`
width: 200px;
height: 60px;
color: white;
background-color: #D9D9D9;
border-radius: 15px;
border: none;
font-weight: bold;
font-size: 17px;
`

export default function Component() {
    const openLink = (url) => {
        window.open(url, '_blank');
    };

    return (
        <>
            <MainContainer>
                <ContainerRow>
                    <StyledImage src={'icon_question.png'} />
                    <Sizedbox />
                    <CustomColumn>
                        <MostBig>아리아리를 사용하다가, 낯선 남한 언어 / 북한 언어를 만난다면?</MostBig>
                        <Detail>사전 검색으로 서로를 바로 알아요.</Detail>
                        <Detail>아래의 버튼을 누르면 사전으로 이동해요!</Detail>
                    </CustomColumn>
                </ContainerRow>
            </MainContainer>
            <SubCon>
                <ContainerRow>
                    <Button onClick={() => openLink('https://unibook.unikorea.go.kr/data/dictionary')}>
                        유니코리아 사전
                    </Button>
                    <Sizedbox />
                    <Button onClick={() => openLink('https://stdict.korean.go.kr/main/main.do')}>
                        표준국어대사전
                    </Button>
                </ContainerRow>
            </SubCon>
        </>
    );
}
