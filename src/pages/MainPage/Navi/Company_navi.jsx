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

const Icon = styled.div`
width: 80px;
height: 80px;
border-radius: 20px;
background-color: #D9D9D9;
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

const Line = styled.div`
width: 3px;
height: 100px;
background-color: #D9D9D9;
border-radius: 10px;
`

export default function Component() {
  let navigate = useNavigate();

  return (
    <Container>
      <Section onClick={() => navigate('/allsouth')}>
        <Icon>
          <ContainerCenter>
            <img src="icon_South.svg" alt="상품쇼핑" />
          </ContainerCenter>
        </Icon>
        <StyledText>
          모든 남한 상품
        </StyledText>
      </Section>

      <Section onClick={() => navigate('/allsouth')}>
        <Icon>
          <ContainerCenter>
            <img src="icon_North.svg" alt="상품쇼핑" />
          </ContainerCenter>
        </Icon>
        <StyledText>
          모든 북한 특산물
        </StyledText>
      </Section>

      <Section onClick={() => navigate('/')}>
        <Icon>
          <ContainerCenter>
            <img src="icon_truck.svg" alt="상품쇼핑" />
          </ContainerCenter>
        </Icon>
        <StyledText>
          배송 조회
        </StyledText>
      </Section>

      <Section onClick={() => navigate('/')}>
        <Icon>
          <ContainerCenter>
            <img src="icon_point.svg" alt="상품쇼핑" />
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
            <img src="icon_enroll.svg" alt="등록" />
          </ContainerCenter>
        </Icon>
        <StyledText>
          남한 상품<br />등록하기
        </StyledText>
      </Section>
      <Section onClick={() => navigate('/myenroll')}>
        <Icon>
          <ContainerCenter>
            <img src="icon_computer.svg" alt="보기" />
          </ContainerCenter>
        </Icon>
        <StyledText>
          주문 확인하기
        </StyledText>
      </Section>
    </Container>
  );
};
