import styled from 'styled-components';
import ContainerRow from '../../../Components/Container/ContainerRow';
import South_Detail_Main from './South_Detail_Main';
import { useNavigate } from 'react-router-dom';
import ContainerColumn from '../../../Components/Container/ContainerColumn';
import ContainerCenter from '../../../Components/Container/ContainerCenter';

const ButtonContainer = styled.div`
    position: relative;
    width: 100%;
    height: 370px;
    background: white;
    border-radius: 10px;
    color: white;
    padding-top: 30px;
    
`
const TextHeader = styled.h1`
    font-family: 'LINE-Bd';
    font-size: 25px;
    font-weight: bold;
    color: black;
    padding-left: 50px;
`

const ShortcutContainer = styled.div`
width: 1170px;
    position: relative;

    display: flex;
    flex-direction: row;

    padding: 30px;
    gap: 10px;
`
const Image = styled.img`
    width: 250px;
    height: 150px;
    border-radius: 20px;
`

const StyledButton = styled.button`
    width: 150px;
    height: 150px;
    background: #F0F0F0;
    color: white;
    border-radius: 10px;
    border: none;
    border-radius: 100px;
    margin-right: 60px;
    img {
        width: 50px;
        height: 50px;
      }
`

const ButtonText = styled.a`
color: #D9D9D9;
font-weight: bold;
font-size: 12px;
padding-top: 10px;
`

export default function Component({ $width }) {

    const navigate = useNavigate();

    const handleMoreProductsClick = () => {
        navigate('/allsouth'); // '/allnorth' 경로로 이동
    };
    // 이미지 파일 이름들의 배열
    const data = [
        { imgSrc: "s_img1.svg", text1: "[이나영] 부드럽고 따뜻한 아기 내복", text3: "20점", text4: "2분 전" },
        { imgSrc: "s_img2.svg", text1: "[이수혁] 상처나지 않고 오래 쓰는 면도기", text3: "10점", text4: "56분 전" },
        { imgSrc: "s_img3.svg", text1: "[임승민] 새지 않고 부드러운 생리대", text3: "15점", text4: "4시간 전" },
        { imgSrc: "s_img4.svg", text1: "[정재웅] 튼튼하고 설거지가 쉬운 후라이팬", text3: "5점", text4: "7시간 전" },
        { imgSrc: "s_img5.svg", text1: "[김재우] 한겨울에도 따뜻한 롱패딩", text3: "10점", text4: "그저께" },
    ];

    return (
        <ButtonContainer $width={$width}>
            <TextHeader>지금 제일 잘 나가는 남한 기업 상품</TextHeader>
            <ContainerRow>
                <ShortcutContainer>
                    {data.map((item, index) => (
                        <South_Detail_Main key={index} imgSrc={item.imgSrc} text1={item.text1} text2={item.text2} text3={item.text3} text4={item.text4} />
                    ))}
                </ShortcutContainer>
                <StyledButton onClick={handleMoreProductsClick}>
                    <ContainerColumn>
                        <ContainerCenter>
                            <img src={'icon_BannerArrow.svg'} />
                        </ContainerCenter>
                        <ButtonText>상품 더보기</ButtonText>
                    </ContainerColumn>
                </StyledButton>
            </ContainerRow>
        </ButtonContainer>
    );
}
