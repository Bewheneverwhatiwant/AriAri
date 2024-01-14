import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ContainerRow from '../../../Components/Container/ContainerRow';

const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

const StyledImage = styled.img`
  width: 300px;
  margin-top: 10px;
`;

const TextHeader = styled.h1`
    font-family: 'LINE-Bd';
    font-size: 20px;
    color: black;
    padding-left: 30px;
`;

const Image = styled.img`
    width: 30px;
    height: 30px;
`;

const Card_row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export default function Component() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % 5);
        }, 1500);

        return () => clearInterval(timer);
    }, []);

    const images = [
        'card1.svg', // 이미지 파일 경로
        'card2.svg',
        'card3.svg',
        'card4.svg',
        'card5.svg'
    ];

    return (
        <Container>
            <Card_row>
                <TextHeader>통일부 카드뉴스 보러가기</TextHeader>
                <Image src={'icon_megaphone.svg'} />
            </Card_row>
            <StyledImage src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
        </Container>
    );
}
