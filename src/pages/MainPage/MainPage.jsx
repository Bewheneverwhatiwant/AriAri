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
import North_navi from './Navi/North_navi';
import South_navi from './Navi/South_navi';
import Company_navi from './Navi/Company_navi';
import useLocalStorage from '../SubPage/Final_useLocalStorage';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
`;

const Sizedbox = styled.div`
   width: 20px;
   height: 40px;
`

const Image = styled.img`
    width: 1000px;
    height: 150px;
`;

export default function Component() {
  const [isWho] = useLocalStorage('isWho', null);

  const renderNavigation = () => {
    switch (isWho) {
      case 1:
        return <South_navi />;
      case 2:
        return <North_navi />;
      case 3:
        return <Company_navi />;
      default:
        return null; // isWho가 0이거나 다른 값일 때는 아무 것도 렌더링하지 않음
    }
  };

  return (
    <MainBackground>
      <MainContainer>
        <MainBanner />
        <Sizedbox />
        {renderNavigation()}
        <Sizedbox />
        <ContainerRow>
          <NorthRecent />
        </ContainerRow>
        <Sizedbox />
        <Image src={'MiniAd.png'} />
        <Sizedbox />
        <ContainerRow>
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