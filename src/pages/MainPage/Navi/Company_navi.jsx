import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  width: 1500px;
  height: 200px;
  background-color: #EDBAFF;
  border: 2px solid white;
  border-radius: 20px;
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const Section = styled.div`
  flex: 1;
  border-left: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:first-child {
    border-left: none;
  }
`;

export default function Component() {
    let navigate = useNavigate();

    return (
        <Container>
            <Section onClick={() => navigate('/enrollcompany')}>남한 상품 등록하기</Section>
            <Section onClick={() => navigate('/checkourorder')}>주문 확인하기</Section>
        </Container>
    );
};
