import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ContainerColumn from '../../../Components/Container/ContainerColumn';
import ContainerCenter from '../../../Components/Container/ContainerCenter';
import ContainerRow from '../../../Components/Container/ContainerRow';

const CustomRow = styled.div`
width: 1000px;
  display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

const WebcamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
    padding-top: 30px;
    padding-bottom: 30px;
`;

const StyledImage = styled.img`
    width: 40px;
    height: 40px;
`;

const Title = styled.h1`
color: black;
font-size: 20px;
font-weight: bold;
`

const StyledText = styled.div`
margin-left: 50px;
color: black;
`

const Sizedbox = styled.div`
width: 30px;
height: 30px;
`

const DetailButton = styled.button`
width: 230px;
height: 30px;
font-size: 15px;
font-weight: bold;
color: white;
background-color: #D9D9D9;
border-radius: 15px;
border: none;
margin: 15px;
`

const StyledButton = styled.button`
width: 150px;
height: 30px;
font-size: 15px;
font-weight: bold;
color: white;
background-color: #D9D9D9;
border-radius: 15px;
border: none;
margin: 15px;
`

const FinalButton = styled.button`
width: 600px;
height: 50px;
font-size: 20px;
font-weight: bold;
color: white;
background-color: #D9D9D9;
border-radius: 15px;
border: none;
margin: 15px;
`

const Button = styled.button`

width: 150px;
height: 30px;
font-size: 15px;
font-weight: bold;
color: black;
border-radius: 15px;
border: 2px solid #D9D9D9;
margin: 15px;

  background-color: white;
  &:hover {
    background-color: grey;
  }

  ${props =>
        props.isActive &&
        css`
      background-color: #D9D9D9;
      color: white;
    `}
`;

const Textarea = styled.textarea`
  border: 2px solid black;
  width: 300px;
  height: 50px;
  resize: none; // 사용자가 크기를 조절하지 못하도록 설정
  overflow: auto; // 내용이 넘칠 경우 스크롤바 표시
  white-space: pre-wrap; // 내용이 width를 넘어갈 경우 자동으로 줄바꿈
  word-break: break-word; // 단어가 넘칠 경우 단어 단위로 줄바꿈
  border-radius: 10px;
`;

export default function Component() {
    const [image, setImage] = useState(null);
    const [isWebcamActive, setIsWebcamActive] = useState(false); // 웹캠 활성화 상태
    const [isPhotoSelected, setIsPhotoSelected] = useState(false); // 사진이 선택되었는지 여부
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const navigate = useNavigate();
    const [capturedImage, setCapturedImage] = useState(null); // 사진 파일 이름을 저장할 상태
    const [selectedFileName, setSelectedFileName] = useState("");
    const [activeButton, setActiveButton] = useState(null);

    const startWebcam = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                setIsWebcamActive(true); // 웹캠이 활성화되었음을 표시
            }
        } catch (err) {
            console.error('웹캠에 접근할 수 없습니다:', err);
            setIsWebcamActive(false);
        }
    };

    const takePhoto = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = canvas.toDataURL('image/png'); // imageData 생성
        setImage(imageData);
        setIsWebcamActive(false); // 사진을 찍은 후에 웹캠 비활성화
    };

    const handleRetake = () => {
        setImage(null);
        startWebcam();
    };

    const handleUsePhoto = () => {
        // 현재 캡처된 이미지 데이터를 사용
        handleImageCapture(image); // image 상태를 사용
        setIsPhotoSelected(true); // 사진이 선택되었음을 표시

        // 필요한 추가 로직
        // 예: navigate('/somewhere');
    };

    // 웹캠 컴포넌트에서 호출될 함수
    const handleImageCapture = (imageData) => {
        setCapturedImage(imageData); // 사진 파일 이름 업데이트
        // 필요한 경우 다른 로직 추가
    };

    const handleFileChange = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            const fileName = event.target.files[0].name;
            setSelectedFileName(fileName);
        }
    };

    const enroll = () => {
        alert('나의 북한 특산물이 등록되었습니다.');
        navigate('/');
    }


    return (
        <MainContainer>
            <CustomRow>
                <Title>상품사진</Title>
                <Sizedbox />
                <Sizedbox />
                <Sizedbox />
                <Sizedbox />
                <ContainerColumn>
                    <ContainerRow>
                        <StyledImage src={'icon_camera.svg'} />
                        <StyledText>직접 사진 촬영</StyledText>
                        <StyledButton onClick={startWebcam}>상품 사진 찍기</StyledButton>
                    </ContainerRow>
                    <ContainerRow>
                        <StyledImage src={'icon_picture.svg'} />
                        <StyledText>사진첩에서 사진 고르기</StyledText>
                        <input type="file" onChange={handleFileChange} style={{ display: 'none' }} id="fileInput" />
                        <ContainerColumn>
                            <StyledButton onClick={() => document.getElementById('fileInput').click()}>파일 선택</StyledButton>
                            {selectedFileName && <p>{selectedFileName}</p>}
                        </ContainerColumn>
                    </ContainerRow>
                </ContainerColumn>
            </CustomRow>
            {image ? (
                <WebcamContainer>
                    <img src={image} alt="Captured" />
                    <StyledButton onClick={handleRetake}>다시 찍기</StyledButton>
                    {image && (
                        <>
                            <StyledButton onClick={handleUsePhoto}>이 사진으로 하기</StyledButton>
                            {isPhotoSelected && <p>촬영된 사진으로 선택되었습니다.</p>}
                        </>
                    )}

                </WebcamContainer>
            ) : (
                <WebcamContainer>
                    <video ref={videoRef} autoPlay style={{ width: '100%' }}></video>
                    {isWebcamActive && (
                        <StyledButton onClick={takePhoto}>사진 찍기</StyledButton>
                    )}
                    <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>

                </WebcamContainer>
            )}
            <CustomRow>
                <Title>상품 종류</Title>
                <Sizedbox />
                <Sizedbox />
                <Sizedbox />
                <Sizedbox />
                <ContainerRow>
                    <Button
                        isActive={activeButton === 'button1'}
                        onClick={() => setActiveButton('button1')}
                    >
                        식품
                    </Button>
                    <Button
                        isActive={activeButton === 'button2'}
                        onClick={() => setActiveButton('button2')}
                    >
                        공예품
                    </Button>
                </ContainerRow>
            </CustomRow>
            <CustomRow>
                <Title>상품명</Title>
                <Sizedbox />
                <Sizedbox />
                <Sizedbox />
                <Sizedbox />
                <Sizedbox />
                <ContainerRow>
                    <Textarea />
                    <DetailButton>판매 금지 상품 확인하기</DetailButton>
                </ContainerRow>
            </CustomRow>

            <CustomRow>
                <Title>상품 가격</Title>
                <Sizedbox />
                <Sizedbox />
                <Sizedbox />
                <Sizedbox />
                <ContainerRow>
                    <Textarea />
                    <DetailButton>가격 책정 길라잡이 읽어보기</DetailButton>
                </ContainerRow>
            </CustomRow>
            <Sizedbox />
            <FinalButton onClick={enroll}>내 북한 특산물 등록하기</FinalButton>
        </MainContainer>
    );
};
