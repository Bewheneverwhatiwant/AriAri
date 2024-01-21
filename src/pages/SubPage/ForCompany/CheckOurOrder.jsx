import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ContainerColumn from '../../../Components/Container/ContainerColumn';
import ContainerCenter from '../../../Components/Container/ContainerCenter';
import ContainerRow from '../../../Components/Container/ContainerRow';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: #F0F0F0;
`;

const WhyButton = styled.div`
width: 400px;
height: 50px;
background-color: #D9D9D9;
border-radius: 15px;
padding: 10px;

display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

img {
    width: 20px;
    height: 20px;
  }
`

const WhyText = styled.a`
font-size: 15px;
color: black;
text-align: center;
line-height: 20px;
`

const OrderContainer = styled.div`
width: 600px;
height: 250px;
background-color: white;
color: black;
border-radius: 5px;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding-left: 20px;
padding-top: 10px;

img {
    width: 100px;
    height: 100px;
    border-radius: 5px;
  }
`

const StyledImage = styled.img`
    max-width: 40px;
    max-height: 40px;
`;

const Title = styled.h1`
color: black;
font-size: 20px;
font-weight: bold;
margin-top: 10px;
`

const Address = styled.a`
color: grey;
font-size: 15px;
margin-top: 10px;
`

const Name = styled.a`
color: black;
font-size: 20px;
`

const StyledText = styled.div`
display: flex;
flex-direction: column;
color: black;
line-height: 20px;
font-size: 15px;
`

const Sizedbox = styled.div`
width: 10px;
height: 30px;
`

const SmallSize = styled.div`
width: 20px;
`

const CustomRow = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
`

const BigButtonContainer = styled.div`
width: 470px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`

const Delivery = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100px;
height: 30px;
color: white;
background-color: #4D515A;
border-radius: 10px;
margin-top: 10px;
margin-right: 10px;
`

const BigButton = styled.button`
width: 470px;
height: 60px;
font-size: 15px;
font-weight: bold;
color: black;
background-color: #F2F3F7;
border-radius: 5px;
border: none;
`

const StyledButton = styled.button`
width: 60px;
height: 60px;
font-size: 15px;
font-weight: bold;
color: black;
background-color: #F2F3F7;
border-radius: 5px;
border: none;
margin: 15px;
`

const Mini = styled.button`
width: 100px;
height: 30px;
font-size: 12px;
color: white;
font-weight: bold;
background-color: #D9D9D9;
border-radius: 10px;
border: none;
`

const RedMini = styled.button`
width: 100px;
height: 30px;
font-size: 12px;
color: white;
font-weight: bold;
background-color: red;
border-radius: 10px;
border: none;
`

const CustomInput = styled.input`
width: 400px;
margin-bottom: 5px;
border-radius: 5px;
border: 2px solid #D9D9D9;
`

export default function Component() {
    // 각 주문에 대한 배송 상태 관리
    const [deliveryStatus, setDeliveryStatus] = useState(['배송 전', '배송 전', '배송 전']);
    // 추가 버튼 상태 관리
    const [showButtons, setShowButtons] = useState([false, false, false]);
    // 편집 모드 상태 관리
    const [editMode, setEditMode] = useState([false, false, false]);
    // 주문 정보 상태 관리
    const [orders, setOrders] = useState([
        { name: '직접 재배한 단맛 나는 고려 인삼', address: '(내 주소) 서울시 서초구 서초대로 00길 12', title: '10점' },
        { name: '벌레 먹은 곳 없는 붉은 사과', address: '(내 주소) 서울시 서초구 서초대로 00길 12', title: '15점' },
        { name: '알이 굵고 아삭아삭한 배추', address: '(내 주소) 서울시 서초구 서초대로 00길 12', title: '8점' }
    ]);

    // 전달 상태 변경 함수
    const handleDeliveryClick = index => {
        const newStatus = [...deliveryStatus];
        newStatus[index] = '배송 완료';
        setDeliveryStatus(newStatus);
    };

    // 추가 버튼 표시 함수
    const handleShowButtonsClick = index => {
        const newShowButtons = [...showButtons];
        newShowButtons[index] = !newShowButtons[index];
        setShowButtons(newShowButtons);
    };

    // 편집 모드 변경 함수
    const handleEditModeClick = index => {
        const newEditMode = [...editMode];
        newEditMode[index] = !newEditMode[index];
        setEditMode(newEditMode);
    };

    // 주문 정보 변경 함수
    const handleOrderChange = (index, field, value) => {
        const newOrders = [...orders];
        newOrders[index][field] = value;
        setOrders(newOrders);
    };

    const handleRejectOrderClick = index => {
        if (window.confirm('이 주문을 거절하시겠습니까?')) {
            const newStatus = [...deliveryStatus];
            newStatus[index] = '주문 거절';
            setDeliveryStatus(newStatus);
        }
    };

    return (
        <MainContainer>
            {orders.map((order, index) => (
                <OrderContainer key={index}>
                    <ContainerColumn>
                        <CustomRow>
                            <img src={`picture_${index + 1}.png`} />
                            <SmallSize />
                            <StyledText>
                                {editMode[index] ? (
                                    <>
                                        <CustomInput type="text" value={order.name} onChange={e => handleOrderChange(index, 'name', e.target.value)} />
                                        <CustomInput type="text" value={order.address} onChange={e => handleOrderChange(index, 'address', e.target.value)} />
                                        <CustomInput type="text" value={order.title} onChange={e => handleOrderChange(index, 'title', e.target.value)} />
                                        <Mini onClick={() => handleEditModeClick(index)}>완료</Mini>
                                    </>
                                ) : (
                                    <>
                                        <Name>{order.name}</Name>
                                        <Address>{order.address}</Address>
                                        <CustomRow>
                                            <Delivery>{deliveryStatus[index]}</Delivery>
                                            <Title>{order.title}</Title>
                                        </CustomRow>
                                    </>
                                )}
                            </StyledText>
                        </CustomRow>
                        <ContainerRow>
                            <BigButton onClick={() => handleDeliveryClick(index)}>
                                <BigButtonContainer>
                                    <ContainerRow>
                                        <StyledImage src={'icon_box.svg'} />
                                        <Sizedbox />
                                        택배사에 전달 완료
                                    </ContainerRow>
                                </BigButtonContainer>
                            </BigButton>
                            <Sizedbox />
                            <StyledButton onClick={() => handleShowButtonsClick(index)}>
                                <StyledImage src={'icon_dots.svg'} />
                            </StyledButton>
                        </ContainerRow>
                        {showButtons[index] && (
                            <ContainerRow>
                                <Mini onClick={() => console.log('상품 등록 취소')}>상품 등록 취소</Mini>
                                <RedMini onClick={() => handleRejectOrderClick(index)}>주문 거절하기</RedMini>
                            </ContainerRow>
                        )}
                    </ContainerColumn>
                </OrderContainer>
            ))}
        </MainContainer>
    );
}