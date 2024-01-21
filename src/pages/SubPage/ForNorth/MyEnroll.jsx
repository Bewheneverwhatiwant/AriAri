import React, { useState } from 'react';
import styled from 'styled-components';
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

const OrderContainer = styled.div`
width: 580px;
height: 200px;
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

const StyledButton = styled.button`
width: 260px;
height: 60px;
font-size: 15px;
font-weight: bold;
color: black;
background-color: #F2F3F7;
border-radius: 5px;
border: none;
margin-top: 15px;
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

const CustomInput = styled.input`
width: 400px;
margin-bottom: 5px;
border-radius: 5px;
border: 2px solid #D9D9D9;
`

export default function Component() {

    // 편집 모드 상태 관리
    const [editMode, setEditMode] = useState([false, false, false]);
    // 주문 정보 상태 관리
    const [orders, setOrders] = useState([
        { name: '직접 재배한 단맛 나는 고려 인삼', address: '(내 주소) 함경북도 온성군 00리 빨간지붕 주택', title: '10점' },
        { name: '벌레 먹은 곳 없는 붉은 사과', address: '(내 주소) 함경북도 온성군 00리 빨간지붕 주택', title: '15점' },
        { name: '알이 굵고 아삭아삭한 배추', address: '(내 주소) 함경북도 온성군 00리 빨간지붕 주택', title: '8점' }
    ]);

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

                                            <Title>{order.title}</Title>
                                        </CustomRow>
                                    </>
                                )}
                            </StyledText>
                        </CustomRow>

                        <ContainerRow>
                            <StyledButton onClick={() => console.log('상품 등록 취소')}>상품 등록 취소</StyledButton>
                            <Sizedbox />
                            <StyledButton onClick={() => handleEditModeClick(index)}>판매 정보 수정</StyledButton>
                        </ContainerRow>

                    </ContainerColumn>
                </OrderContainer>
            ))}
        </MainContainer>
    );
}