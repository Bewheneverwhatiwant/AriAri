import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Small = styled.div`
width: 300px;
  border: 2px solid transparent;
  border-bottom: none;
  padding: 10px;
  cursor: pointer;
  ${({ isSelected }) =>
    isSelected &&
    css`
        background-color: #FF7D77;
        color: red;
      border-color: red;
      border-bottom: transparent;
    `}
    display: flex;
    justify-content: center; // 가로 중앙 정렬
    align-items: center; // 세로 중앙 정렬
`;

const Big = styled.div`
width: 1380px;
border: 2px solid red; // Big의 모든 테두리를 빨간색으로 설정합니다.
padding: 10px;
`;

const RadioButton = styled.input.attrs({ type: 'radio' })`
  margin-right: 5px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
`;

const SmallContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const BigContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
flex-wrap: wrap; // 라디오 버튼이 많아 한 줄에 다 못 들어갈 경우 다음 줄로 넘어가도록
gap: 10px;
`;

const RadioButtonLabel = styled.label`
  display: flex;
  align-items: center;
  margin: 10px;
`;

const PaymentMethodComponent = () => {
  const [selected, setSelected] = useState(null);

  return (
    <Container>
      <SmallContainer>
        {['신용카드', '휴대폰', '온라인이체', '간편결제'].map((method, index) => (
          <Small key={method} isSelected={selected === index} onClick={() => setSelected(index)}>
            {method}
          </Small>
        ))}
      </SmallContainer>
      <Big>
        <BigContainer>
          {['국민카드', '신한카드', '비씨카드', '삼성카드', '현대카드', '농협카드', '롯데카드', '하나카드', '우리카드', '씨티카드', '광주은행', '수협', '전북은행', '우체국', '제주', 'MG 새마을 금고 카드', '신협', '카카오 뱅크', '케이뱅크', '저축은행', 'KDB 산업 은행'].map((option, index) => (
            <RadioButtonLabel key={option}>
              <RadioButton name="bigOption" />
              {option}
            </RadioButtonLabel>
          ))}
        </BigContainer>
      </Big>
    </Container>
  );
};

export default PaymentMethodComponent;
