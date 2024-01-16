import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
`;

const Left_title = styled.div`
width: 1500px;
margin-left: 30px;
text-align: left;
font-weight: bold;
font-size: 30px;
`

const Detail = styled.div`
width: 1500px;
margin-left: 30px;
text-align: left;
font-size: 20px;
line-height: 30px; /* 글자 사이 간격을 2픽셀로 설정 */
`

const Small_title = styled.div`
width: 1500px;
text-align: left;
font-size: 20px;
font-weight: bold;
`

const Sizedbox = styled.div`
width: 30px;
height: 30px;
`

const StyledButton = styled.button`
width: 500px;
height: 50px;
padding: 10px;
background-color: #D9D9D9;
color: white;
font-size: 20px;
font-weight: bold;
border: none;
border-radius: 15px;
`

const Image = styled.img`
  width: 800px;
  height: 200px;
`;

export default function Component() {
    const navigate = useNavigate();

    const back = () => {
        navigate('/');
    };

    return (
        <MainContainer>
            <Sizedbox />
            <Image src={'logo_first.svg'} />
            <Sizedbox />
            <Left_title>

                아리아리 사업 개요 설명

            </Left_title>
            <Sizedbox />
            <Detail>
                이 웹사이트는 다섯가지의 목적을 가지고 있습니다.<br />

                1. 통일 전 북한 주민들이 자본주의 생태계에 적응하도록 돕습니다.<br />
                2. 통일 전 남한과 북한의 경제적 격차를 줄이고자 노력합니다.<br />
                3. 통일 전 북한 주민들이 남한의 산업 물품에 적응하도록 돕습니다.<br />
                4. 남한 주민에게 저렴한 가격으로 북한 지역의 특산물을 판매합니다.<br />
                5. 남한 기업에게 북한 시장 진출의 발판을 제공합니다.<br />
                <br />
                통일로 인한 경제적 충격을 줄이고, 삼팔선을 넘나드는 판매와 구매 과정을 통해 남한과 북한의 주민의 화합을 도모하여<br />
                실질적 통일을 이루는 것이 궁극적인 목표입니다.<br />

            </Detail>

            <StyledButton onClick={back}>상기 내용을 확인하였습니다.</StyledButton>
            <Sizedbox />
        </MainContainer>
    );
};
