import styled from 'styled-components';
import ContainerRow from '../../../Components/Container/ContainerRow';
import DetailButton from './DetailButton';
import { useNavigate } from 'react-router-dom';

const ButtonContainer = styled.div`
    position: relative;
    width: 100%;
    height: 370px;
    background: #DFEEFF;
    color: white;
    padding-top: 30px;
    border-radius: 20px 0 0 20px; // 좌측 상단과 하단 모서리에만 적용
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
    height: 40px;
    background: #76B5FF;
    color: white;
    border-radius: 10px;
    border: none;
    margin-right: 60px;
`

export default function Component({ $width }) {

    const navigate = useNavigate();

    const handleMoreProductsClick = () => {
        navigate('/allsouth'); // '/allnorth' 경로로 이동
    };
    // 이미지 파일 이름들의 배열
    const data = [
        { imgSrc: "s_img1.svg", text1: "판매자: 이나영", text2: "상품명: 아기 내복", text3: "구매 점수: 20점" },
        { imgSrc: "s_img2.svg", text1: "판매자: 이수혁", text2: "상품명: 면도기", text3: "구매 점수: 10점" },
        { imgSrc: "s_img3.svg", text1: "판매자: 임승민", text2: "상품명: 생리대", text3: "구매 점수: 15점" },
        { imgSrc: "s_img4.svg", text1: "판매자: 정재웅", text2: "상품명: 후라이팬", text3: "구매 점수: 5점" },
        { imgSrc: "s_img5.svg", text1: "판매자: 김재우", text2: "상품명: 롱패딩", text3: "구매 점수: 10점" }
    ];

    return (
        <ButtonContainer $width={$width}>
            <TextHeader>방금 올라온 남한 기업 상품</TextHeader>
            <ContainerRow>
                <ShortcutContainer>
                    {data.map((item, index) => (
                        <DetailButton key={index} imgSrc={item.imgSrc} text1={item.text1} text2={item.text2} text3={item.text3} />
                    ))}
                </ShortcutContainer>
                <StyledButton onClick={handleMoreProductsClick}>상품 더보기</StyledButton>
            </ContainerRow>
        </ButtonContainer>
    );
}
