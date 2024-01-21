import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ContainerCenter from '../Container/ContainerCenter';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: white;
  border-bottom: 2px solid #D9D9D9;
`;

const Logo = styled.div`
  width: 100px;
  height: 70px;
  padding-left: 20px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Sizedbox = styled.div`
  width: 20px;
`;

const StyledLink = styled.a`
  color: black;
  text-decoration: none;
`;

const StyledLink_bold = styled.a`
  color: black;
  font-weight: bold;
`;

export default function Component() {

    const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin') === 'true');

    useEffect(() => {
        const handleStorageChange = () => {
            const updatedIsLogin = localStorage.getItem('isLogin') === 'true';
            console.log('localStorage 변경 감지됨, 새로운 isLogin:', updatedIsLogin);
            setIsLogin(updatedIsLogin);
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    console.log('현재 isLogin 상태:', isLogin); // 현재 isLogin 상태 출력


    return (
        <HeaderContainer>
            <Logo>
                <StyledLink href="/">
                    <img src="logo_final.png" alt="로고" />
                </StyledLink>
            </Logo>
            <MenuContainer>
                {isLogin ? (
                    <>
                        <ContainerCenter>
                            <StyledLink_bold href="/mypage">마이페이지</StyledLink_bold>
                        </ContainerCenter>
                        <Sizedbox />
                        <ContainerCenter>
                            <StyledLink_bold href="/logout">로그아웃</StyledLink_bold>
                        </ContainerCenter>
                    </>
                ) : (
                    // 로그인 상태가 아닐 때 '로그인' 및 '회원가입' 버튼 렌더링
                    <ContainerCenter>
                        <LoginContainer>
                            <StyledLink href="/login">로그인</StyledLink>
                            <Sizedbox />
                            <p>|</p>
                            <Sizedbox />
                            <StyledLink href="/signup">회원가입</StyledLink>
                        </LoginContainer>
                    </ContainerCenter>
                )}
                <Sizedbox />
                <ContainerCenter>
                    <StyledLink_bold href="/">남북 언어사전</StyledLink_bold>
                </ContainerCenter>
                <Sizedbox />
                <ContainerCenter>
                    <StyledLink_bold href="/intro">아리아리 소개</StyledLink_bold>
                </ContainerCenter>
                <Sizedbox />
                <ContainerCenter>
                    <StyledLink_bold href="/howtouse">아리아리 사용설명서</StyledLink_bold>
                </ContainerCenter>
                <Sizedbox />
            </MenuContainer>
        </HeaderContainer>
    );
}
