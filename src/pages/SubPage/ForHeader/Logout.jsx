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
  height: 600px;
`;

export default function Component() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.setItem('isLogin', false);
        localStorage.setItem('isWho', 0); // isWho를 0으로 설정
        console.log('로그아웃 상태 저장됨:', localStorage.getItem('isLogin'));
        alert('로그아웃되었습니다.');
        navigate('/');
    };

    return (
        <MainContainer>
            <Sizedbox />
            <Image src={'logo_final.png'} />
            <Sizedbox />
            <Left_title>

                다음에 또 만나요 !

            </Left_title>
            <Sizedbox />
            <Detail>
                정말 아리아리 서비스에서 로그아웃하시겠습니까?

            </Detail>

            <StyledButton onClick={handleLogout}>로그아웃</StyledButton>
            <Sizedbox />
        </MainContainer>
    );
};
