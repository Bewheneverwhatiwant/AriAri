import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Login_row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  height: 300px;
  gap: 10px;
  border-radius: 20px;
  margin: 70px;
  border-top: 2px solid black;
  border-left: ${props => props.selected === 'northCitizen' ? '2px solid black' : '3px solid red'};
  border-right: ${props => props.selected === 'northCitizen' ? '2px solid black' : '3px solid red'};
  border-bottom: ${props => props.selected ? '3px solid red' : '2px solid black'};
`;

const TopContainer = styled.div`
  display: flex;
  width: 100%;
  height: 25%; /* 전체 높이의 1/4 */
  border-bottom: 1px solid #000; /* 가로선 추가 */
`;

const Box = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  background-color: ${props => (props.isSelected ? '#FF9E9E' : 'transparent')};
  border: ${props => (props.isSelected ? '2px solid red' : '1px solid #000')};
  border-bottom: ${props =>
    !props.isSelected && !props.isLast ? '2px solid red' : 'none'};
  &:first-child {
    border-top-left-radius: 20px;
  }
  &:last-child {
    border-top-right-radius: 20px;
  }
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid #000; /* 마지막 섹션을 제외한 섹션에 가로선 추가 */
  &:last-child {
    border-bottom: none; /* 마지막 섹션의 가로선 제거 */
  }
`;

const Image = styled.img`
  width: 20px;
  height: 20px;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || 'black'};
  background: white;
  border: none;
  border-radius: 3px;
  width: calc(100% - 1em); /* padding 고려한 너비 설정 */

  /* 포커스 상태일 때 스타일 */
  &:focus {
    outline: none;
    border: 2px solid ${props => props.inputColor || 'green'};
    background-color: white;
  }
`;

const StyledButton = styled.button`
  width: 150px;
  height: 30px;
  background: #D9D9D9;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  border: none;
`;

const TextHeader = styled.h1`
  font-family: 'LINE-Bd';
  font-size: 20px;
  color: black;
  padding-top: 70px;
`;

const LoginButton = styled.button`
  width: 700px;
  height: 80px;
  background: #D9D9D9;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  margin-bottom: 50px;
`;

export default function Component() {
  const [isWho, setIsWho] = useState(0);
  const navigate = useNavigate();

  const handleClick = value => {
    setIsWho(value);
  };

  const handleSignup = () => {
    localStorage.setItem('isLogin', true); // 로그인 상태를 localStorage에 저장
    localStorage.setItem('isWho', isWho); // isWho 값을 로컬 스토리지에 저장
    console.log('로그인 상태 저장됨:', localStorage.getItem('isLogin')); // 저장된 값을 콘솔에 출력
    alert('로그인되었습니다.');
    navigate('/');
  };

  const [selectedBox, setSelectedBox] = useState(null);

  return (
    <MainContainer>
      <TextHeader>아리아리에 방문해주셔서 감사드립니다.</TextHeader>
      <LoginContainer isSelected={selectedBox !== null} selected={isWho}>
        <TopContainer>
          <Box isSelected={isWho === 1} onClick={() => handleClick(1)}>
            남한 주민
          </Box>
          <Box isSelected={isWho === 2} onClick={() => handleClick(2)}>
            북한 주민
          </Box>
          <Box isSelected={isWho === 3} onClick={() => handleClick(3)}>
            남한 기업
          </Box>
          {/* 마지막 세로선 제거 */}
        </TopContainer>
        <Section>
          <Login_row>
            <Image src={'icon_id.svg'} />
            <Input type="text" placeholder="아이디를 입력하세요." />
          </Login_row>
        </Section>
        <Section>
          <Login_row>
            <Image src={'icon_password.svg'} />
            <Input type="password" placeholder="비밀번호를 입력하세요." />
          </Login_row>
        </Section>
      </LoginContainer>
      <LoginButton onClick={handleSignup}>로그인 완료</LoginButton>
    </MainContainer>
  );
}
