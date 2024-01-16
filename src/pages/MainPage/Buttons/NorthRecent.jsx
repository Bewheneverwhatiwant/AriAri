import styled from 'styled-components';
import ContainerRow from '../../../Components/Container/ContainerRow';
import North_DetailButton from './North_DetailButton';
import { useNavigate } from 'react-router-dom';

const ButtonContainer = styled.div`
    position: relative;
    width: 100%;
    height: 350px;
    background: #FFDFEA;
    padding-top: 30px;
    color: white;
    border-radius: 20px 0 0 20px; // 좌측 상단과 하단 모서리에만 적용
`;

const TextHeader = styled.h1`
    font-family: 'LINE-Bd';
    font-size: 25px;
    font-weight: bold;
    color: black;
    padding-left: 50px;
`;

const ShortcutContainer = styled.div`
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
    height: 40px;
    background: #FFA1FB;
    color: white;
    border-radius: 10px;
    border: none;
    margin-right: 60px;
`

export default function Component({ $width }) {
    const navigate = useNavigate();

    const handleMoreProductsClick = () => {
        navigate('/allnorth'); // '/allnorth' 경로로 이동
    };

    // 이미지 파일 이름들의 배열
    const data = [
        { imgSrc: "img1.svg", text1: "판매자: 김개똥", text2: "상품명: 밤", text3: "구매 점수: 10점" },
        { imgSrc: "img2.svg", text1: "판매자: 리수혁", text2: "상품명: 미역", text3: "구매 점수: 15점" },
        { imgSrc: "img3.svg", text1: "판매자: 로은정", text2: "상품명: 복숭아", text3: "구매 점수: 20점" },
        { imgSrc: "img4.svg", text1: "판매자: 이철수", text2: "상품명: 꿀", text3: "구매 점수: 15점" },
        { imgSrc: "img5.svg", text1: "판매자: 신유리", text2: "상품명: 사과", text3: "구매 점수: 10점" }
    ];

    return (
        <ButtonContainer $width={$width}>
            <TextHeader>방금 올라온 북한 특산물</TextHeader>
            <ContainerRow>
                <ShortcutContainer>
                    {data.map((item, index) => (
                        <North_DetailButton key={index} imgSrc={item.imgSrc} text1={item.text1} text2={item.text2} text3={item.text3} />
                    ))}
                </ShortcutContainer>
                <StyledButton onClick={handleMoreProductsClick}>상품 더보기</StyledButton>
            </ContainerRow>
        </ButtonContainer>
    );
}
