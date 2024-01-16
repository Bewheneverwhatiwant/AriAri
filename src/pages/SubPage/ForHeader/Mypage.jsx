import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ContainerColumn from '../../../Components/Container/ContainerColumn';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
`;

const Container = styled.div`
  width: 800px;
  height: 300px;
  border: 1px solid black;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 40px;
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

const EditableText = styled.input`
  border: none;
  background: transparent;
  width: auto;
  font-size: 20px;
  font-weight: bold;
  &:focus {
    outline: none;
  }
  color: #D9D9D9;
`;

const BeforeText = styled.text`
color: #D9D9D9;
font-size: 20px;
font-weight: bold;
`

const LeftStyledSpan = styled.span`
margin-top: 30px;
margin-bottom: 30px;
margin-left: 30px;
font-size: 20px;
font-weight: bold;
`

const RightStyledSpan = styled.span`
margin-top: 30px;
margin-bottom: 30px;
margin-right: 30px;
font-size: 15px;
`

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
width: 800px;
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

const OutButton = styled.button`
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

const SuggestButton = styled.button`
width: 500px;
height: 120px;
padding: 10px;
background-color: #D9D9D9;
color: white;
font-size: 20px;
font-weight: bold;
border: none;
border-radius: 15px;
`

const Image = styled.img`
  width: 120px;
  height: 70px;
`;

export default function Component() {
    const [texts, setTexts] = useState(['sleep1102!', 'nayeong4595', '경기도 용인시 처인구 모현읍 백옥대로 2384번길 11']);
    const [editIndex, setEditIndex] = useState(-1);

    const handleDoubleClick = (index) => {
        setEditIndex(index);
    };

    const handleChange = (e, index) => {
        const newTexts = [...texts];
        newTexts[index] = e.target.value;
        setTexts(newTexts);
    };

    const handleComplete = () => {
        setEditIndex(-1);
    };

    const staticTexts = ['아이디', '비밀번호', '주소'];

    const navigate = useNavigate();

    const handleOut = () => {
        localStorage.setItem('isLogin', false);
        localStorage.setItem('isWho', 0); // isWho를 0으로 설정
        console.log('회원탈퇴 상태 저장됨:', localStorage.getItem('isLogin'));
        alert('계정 정보가 삭제되었습니다.');
        navigate('/');
    };

    return (
        <MainContainer>
            <Sizedbox />
            <LeftedText>
                <TextHeader>기본정보</TextHeader>
                <Detail>수정하고 싶은 정보를 두 번 누르면 수정이 가능해요.</Detail>
            </LeftedText>

            <Container>
                {texts.map((text, index) => (
                    <React.Fragment key={index}>
                        {index > 0 && <HorizontalLine />}
                        <Row>
                            <LeftStyledSpan>{staticTexts[index]}</LeftStyledSpan>
                            {editIndex === index ? (
                                <EditableText
                                    value={text}
                                    onChange={(e) => handleChange(e, index)}
                                    autoFocus
                                />
                            ) : (
                                <RightStyledSpan onDoubleClick={() => handleDoubleClick(index)}>
                                    <BeforeText>
                                        {text}
                                    </BeforeText>
                                </RightStyledSpan>
                            )}
                            {editIndex === index && (
                                <StyledButton onClick={handleComplete}>완료</StyledButton>
                            )}
                        </Row>
                    </React.Fragment>
                ))}
            </Container>
            <OutButton onClick={handleOut}>
                회원탈퇴
            </OutButton>
            <Sizedbox />
            <SuggestButton>
                <ContainerColumn>
                    <Image src={'icon_suggest.svg'} />
                    아리아리 개선 사항 건의하기
                </ContainerColumn>
            </SuggestButton>
            <Sizedbox />
        </MainContainer>
    );
}
