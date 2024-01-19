import styled from 'styled-components';
import ContainerRow from '../../../Components/Container/ContainerRow';
import North_Detail_Main from './North_Detail_Main';
import { useNavigate } from 'react-router-dom';
import ContainerCenter from '../../../Components/Container/ContainerCenter';
import ContainerColumn from '../../../Components/Container/ContainerColumn';

const ButtonContainer = styled.div`
    position: relative;
    width: 100%;
    height: 350px;
    background: white;
    padding-top: 30px;
    color: white;
    border-radius: 10px;
`;

const TextHeader = styled.h1`
    font-family: 'LINE-Bd';
    font-size: 25px;
    font-weight: bold;
    color: black;
    padding-left: 50px;
`;

const ShortcutContainer = styled.div`
width: 1170px;
    position: relative;
    bottom: 0;
    right: 0;

    display: flex;
    flex-direction: row;

    padding: 30px;
    gap: 10px;
`;

const Image = styled.img`
    width: 250px;
    height: 150px;
`;

const StyledButton = styled.button`
    width: 150px;
    height: 150px;
    background: #D9D9D9;
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
color: white;
font-weight: bold;
font-size: 12px;
padding-top: 10px;
`

export default function Component({ $width }) {
    const navigate = useNavigate();

    const handleMoreProductsClick = () => {
        navigate('/allnorth'); // '/allnorth' 경로로 이동
    };

    // 이미지 파일 이름들의 배열
    const data = [
        { imgSrc: "img1.svg", text1: "[리수혁] 하나하나 확인했읍니다 달달하게 잘익은", text2: "밤", text3: "10점" },
        { imgSrc: "img2.svg", text1: "[손은숙] 직접 말리고 썰었읍니다 맛있는", text2: "미역", text3: "15점" },
        { imgSrc: "img3.svg", text1: "[강현정] 함경북도 온성군에서 재배했읍니다", text2: "복숭아", text3: "20점" },
        { imgSrc: "img4.svg", text1: "[김진웅] 신선한", text2: "꿀", text3: "15점" },
        { imgSrc: "img5.svg", text1: "[김아영] 벌레먹은 곳 없이 붉은", text2: "사과", text3: "10점" }
    ];

    return (
        <ButtonContainer $width={$width}>
            <TextHeader>지금 제일 잘 나가는 북한 특산물</TextHeader>
            <ContainerRow>
                <ShortcutContainer>
                    {data.map((item, index) => (
                        <North_Detail_Main key={index} imgSrc={item.imgSrc} text1={item.text1} text2={item.text2} text3={item.text3} />
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
