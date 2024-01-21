import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ContainerCenter from '../../../Components/Container/ContainerCenter';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
`;

const Left_title = styled.div`
width: 1000px;
font-weight: bold;
font-size: 30px;
`

const Detail = styled.div`
width: 1500px;
margin-left: 30px;
text-align: left;
font-size: 20px;
line-height: 30px; /* 글자 사이 간격을 2픽셀로 설정 */
`

const Small_title = styled.div`
width: 1500px;
text-align: left;
font-size: 20px;
font-weight: bold;
`

const Sizedbox = styled.div`
width: 30px;
height: 30px;
`

const StyledButton = styled.button`
width: 500px;
height: 50px;
padding: 10px;
background-color: #D9D9D9;
color: white;
font-size: 20px;
font-weight: bold;
border: none;
border-radius: 15px;
`

const Image = styled.img`
    width: 1000px;
    height: 1000px;
`;

export default function Component() {
    const navigate = useNavigate();

    const back = () => {
        navigate('/');
    };

    return (
        <MainContainer>
            <Sizedbox />
            <Sizedbox />
            <Detail>
                <ContainerCenter>
                    <Left_title>

                        아리아리 웹사이트 사용법

                    </Left_title>
                    <Sizedbox />

                    <Image src={'card0.png'} />
                    <Image src={'card1.png'} />
                    <Image src={'card2.png'} />
                    <Image src={'card3.png'} />
                    <Image src={'card4.png'} />
                    <Image src={'card5.png'} />
                    <Image src={'card6.png'} />

                    <Sizedbox />

                    <Small_title>
                        남한 주민의 경우
                    </Small_title>

                    북한 주민이 업로드한 특산물을 구매하실 수 있습니다.<br />
                    특산물 구매는 현금이 아닌 포인트(점수)로 이루어집니다.<br />
                    화면 가운데의 '점수 충전하기' 버튼을 눌러, 점수 구매를 먼저 진행해주세요.

                    <br />
                    1. 첫번째 단계<br />
                    회원가입 시 성함, 비밀번호, 주소를 입력해주세요.<br />

                    2. 두번째 단계<br />
                    ‘특산물 구매하러 가기’ 버튼을 눌러, 북한 지도가 있는 화면에 들어가주세요.<br />
                    지도에서 특정 지역을 클릭하시면, 해당 지역에서 생산되는 특산물 목록이 팝업됩니다.<br />
                    <br />
                    3. 세번째 단계<br />
                    구매하실 특산물을 클릭하시면, 해당 특산물을 판매하는 가게 목록이 팝업됩니다.<br />
                    특정 가게를 클릭하시어 상품의 사진을 보실 수 있습니다.<br />
                    <br />
                    4. 네번째 단계<br />
                    구매를 결정하시면, ‘구매’ 버튼을 누르시고, 점수로 구매를 진행해주세요.<br />
                    수익은 북한 주민들에게 현금이 아닌 점수로 적립됩니다.<br />
                    <br />
                    5. 다섯번째 단계<br />
                    구매하신 특산물은 10일 이내로 배송됩니다.<br />
                    만약 주문이 수락되었는데 특산물이 배송되지 않는다면, ‘가게 신고’ 버튼을 눌러주세요.<br />
                    신고된 가게는 확인 절차를 거쳐 판매 금지 조치가 취해집니다.<br />
                    <br />
                    <Small_title>
                        남한 기업의 경우
                    </Small_title>
                    <br />
                    북한 주민을 대상으로 남한의 상품을 판매하실 수 있습니다.<br />
                    <br />
                    1. 첫번째 단계<br />
                    회원가입 시 ‘남한 기업 등록하기’ 버튼을 눌러 회원가입을 진행해주세요.<br />
                    <br />
                    2. 두번째 단계<br />
                    ‘상품 등록하기’ 버튼을 눌러, 판매하고자 하시는 상품을 등록해주세요.<br />
                    상품의 이미지, 가격을 명시하고 알맞은 카테고리를 선택해주세요.<br />
                    <br />
                    3. 세번째 단계<br />
                    ‘주문 현황’ 버튼을 눌러 주문을 확인하실 수 있습니다.<br />
                    ‘수락’ 또는 ‘거절’ 버튼을 눌러 주문을 접수하고, 상품 포장 후 배송해주세요.<br />
                    ‘수락’ 버튼을 누르신 후 배송이 이루어지지 않으면, 상품 판매가 금지됩니다.<br />
                    <br />
                    4. 네번째 단계<br />
                    수익은 포인트 형태로 적립되며, 현금으로 전환하여 계좌로 이체 후 사용하실 수 있습니다.<br />
                </ContainerCenter>
            </Detail>
            <Sizedbox />
            <StyledButton onClick={back}>상기 내용을 확인하였습니다.</StyledButton>
            <Sizedbox />
        </MainContainer>
    );
};
