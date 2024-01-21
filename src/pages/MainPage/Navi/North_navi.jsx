import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ContainerRow from '../../../Components/Container/ContainerRow';
import ContainerCenter from '../../../Components/Container/ContainerCenter';
import ContainerColumn from '../../../Components/Container/ContainerColumn';

const Container = styled.div`
  display: flex;
  width: 1500px;
  height: 200px;
  background-color: white;
  border: 2px solid white;
  border-radius: 20px;
  color: white;
`;

const Section = styled.div`
  flex: 1;
  border-left: 2px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:first-child {
    border-left: none;
  }
`;

const Line = styled.div`
width: 3px;
height: 100px;
background-color: #D9D9D9;
border-radius: 10px;
`

const Icon = styled.div`
width: 80px;
height: 80px;
border-radius: 20px;
background-color: #F2F3F7;
padding: 15px;
margin-bottom: 10px;

justify-content: center;
align-items: center;

font-size: 15px;

img {
  width: 100%;
  height: 100%;
}

`

const StyledText = styled.div`
text-align: center;
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #2F2F2F;
    font-weight: bold;
    line-height: 18px;
`

export default function Component() {
  let navigate = useNavigate();

  return (
    <Container>
      <Section onClick={() => navigate('/allsouth')}>
        <Icon>
          <ContainerCenter>
            <img src="icon_foundation.png" alt="상품쇼핑" />
          </ContainerCenter>
        </Icon>
        <StyledText>
          모든 남한 상품
        </StyledText>
      </Section>

      <Section onClick={() => navigate('/allnorth')}>
        <Icon>
          <ContainerCenter>
            <img src="icon_veg.png" alt="상품쇼핑" />
          </ContainerCenter>
        </Icon>
        <StyledText>
          모든 북한 특산물
        </StyledText>
      </Section>

      <Section onClick={() => navigate('/')}>
        <Icon>
          <ContainerCenter>
            <img src="icon_deliveryTruck.png" alt="상품쇼핑" />
          </ContainerCenter>
        </Icon>
        <StyledText>
          배송 조회
        </StyledText>
      </Section>

      <Section onClick={() => navigate('/')}>
        <Icon>
          <ContainerCenter>
            <img src="icon_coin.png" alt="상품쇼핑" />
          </ContainerCenter>
        </Icon>
        <StyledText>
          점수 조회
        </StyledText>
      </Section>
      <ContainerCenter>
        <Line />
      </ContainerCenter>
      <Section onClick={() => navigate('/enrollnorth')}>
        <Icon>
          <ContainerCenter>
            <img src="icon_mouseHand.png" alt="등록" />
          </ContainerCenter>
        </Icon>
        <StyledText>
          북한 특산물 등록
        </StyledText>
      </Section>
      <Section onClick={() => navigate('/myenroll')}>
        <Icon>
          <ContainerCenter>
            <img src="icon_myProduct.png" alt="보기" />
          </ContainerCenter>
        </Icon>
        <StyledText>
          내가 등록한 특산물
        </StyledText>
      </Section>
      <Section onClick={() => navigate('/checkorder')}>
        <Icon>
          <ContainerCenter>
            <img src="icon_myOrder.png" alt="주문확인" />
          </ContainerCenter>
        </Icon>
        <StyledText>
          주문 확인하기
        </StyledText>
      </Section>
      <Section onClick={() => navigate('/allsouth')}>
        <Icon>
          <ContainerCenter>
            <img src="icon_cart.png" alt="상품쇼핑" />
          </ContainerCenter>
        </Icon>
        <StyledText>
          남한 상품 구매
        </StyledText>
      </Section>

    </Container>
  );
};
