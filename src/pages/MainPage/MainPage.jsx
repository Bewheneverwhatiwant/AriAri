import styled from 'styled-components';
import MainBackground from './MainBackground';
import MainBanner from './MainBanner';
import ContainerCenter from '../../Components/Container/ContainerCenter';
import NorthRecent from './Buttons/NorthRecent';
import SouthRecent from './Buttons/SouthRecent';
import DramaBanner from './Buttons/DramaBanner';
import ContainerRow from '../../Components/Container/ContainerRow';
import MarketingBanner from './Buttons/MarketingBanner';
import CardNews from './Buttons/CardNews';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
`;

const Sizedbox = styled.div`
   width: 20px;
   height: 70px;
`

const Image = styled.img`
    width: 250px;
    height: 150px;
`;

export default function Component() {

  return (
    <MainBackground>
      <MainContainer>
        <MainBanner />
        <Sizedbox />
        <ContainerRow>
          <Image src={'inf_flower.svg'} />
          <NorthRecent />
        </ContainerRow>
        <Sizedbox />
        <ContainerRow>
          <Image src={'animal4.svg'} />
          <Image src={'animal3.svg'} />
          <Image src={'icon_DMZ.svg'} />
          <Image src={'animal1.svg'} />
          <Image src={'animal2.svg'} />
        </ContainerRow>
        <Sizedbox />
        <ContainerRow>
          <Image src={'inf_flower.svg'} />
          <SouthRecent />
        </ContainerRow>
      </MainContainer>
      <Sizedbox />
      <Sizedbox />
      <ContainerRow>
        <ContainerCenter>
          <DramaBanner />
          <MarketingBanner />
        </ContainerCenter>
        <CardNews />
      </ContainerRow>
      <Sizedbox />
    </MainBackground>
  );
};