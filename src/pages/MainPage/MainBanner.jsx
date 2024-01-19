import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%; // 컨테이너의 너비를 100%로 설정
  
`;

const CarouselSlider = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
`;

const CarouselItem = styled.div`
  display: flex;
  align-items: center; // 세로 방향 중앙 정렬
  justify-content: center; // 가로 방향 중앙 정렬
  flex: 0 0 auto;
  width: 100%;
  padding: 10px;
  img {
    max-width: 100%; // 이미지가 컨테이너를 초과하지 않도록
    max-height: 450px; // 이미지 높이 제한
    object-fit: contain; // 이미지 비율 유지
  }
`;

const StyledImage = styled.img`
  max-width: 100%; // 이미지가 컨테이너를 초과하지 않도록
  max-height: 300px; // 이미지 높이 제한
  object-fit: contain; // 이미지 비율 유지
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #D9D9D9;
  color: white;
  border: 2px grey;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const PrevButton = styled(CarouselButton)`
  left: 10px;
`;

const NextButton = styled(CarouselButton)`
  right: 10px;
`;

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const apiData_hire = Array.from({ length: 3 });

  // 슬라이더 자동 이동 타이머 설정
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === apiData_hire.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [apiData_hire.length]);

  // 다음 슬라이드로 이동
  const nextHandler = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === apiData_hire.length - 1 ? 0 : prevIndex + 1
    );
  };

  // 이전 슬라이드로 이동
  const prevHandler = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? apiData_hire.length - 1 : prevIndex - 1
    );
  };

  return (
    <CarouselContainer>
      <CarouselSlider style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {Array.from({ length: 3 }, (_, index) => (
          <CarouselItem key={index}>
            <img src={`/BigBanner${index + 1}.png`} alt={`Slide ${index + 1}`} />
          </CarouselItem>
        ))}
      </CarouselSlider>
      <PrevButton onClick={prevHandler}><AiOutlineArrowLeft /></PrevButton>
      <NextButton onClick={nextHandler}><AiOutlineArrowRight /></NextButton>
    </CarouselContainer>
  )
}