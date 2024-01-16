import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
`;

const Left_title = styled.div`
width: 1500px;
margin-left: 30px;
text-align: left;
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

export default function Component() {
    const navigate = useNavigate();

    const back = () => {
        navigate('/');
    };

    return (
        <MainContainer>
            <Sizedbox />
            <Sizedbox />
            <Left_title>

                아리아리 웹사이트 사용법

            </Left_title>
            <Sizedbox />
            <Detail>
                <Small_title>
                    북한 주민의 경우
                </Small_title>

                남한 주민을 대상으로 거주 중인 지역의 특산물을 판매하실 수 있습니다.<br />
                먼저 판매하실 특산물을 결정해주세요.<br />
                <br />
                1. 첫번째 단계<br />
                이 사이트의 우측 상단 ‘회원가입’ 이라는 버튼을 누르시고, ‘북한 주민’ 이라는 글자를 누르세요.<br />
                성함과 비밀번호를 등록하세요.<br />
                그리고 거주하시는 곳의 주소를 등록해주세요.<br />
                비밀번호는 누구에게도 공유하시면 안됩니다.<br />
                <br />
                2. 두번째 단계<br />
                회원가입을 수행하셨다면, 우측 상단의 ‘로그인’ 이라는 버튼을 누르시고,<br />
                회원가입 시 등록하셨던 성함과 비밀번호를 똑같이 입력하세요.<br />
                <br />
                3. 세번째 단계<br />
                화면 가운데 '북한 특산물 등록하기' 글자를 눌러주세요.<br />
                상품의 사진을 등록하기 위해서는 ‘카메라’ 라는 글자를 눌러야 됩니다.<br />
                카메라 화면이 실행되면, 동그란 버튼을 눌러 판매하실 상품의 사진을 촬영하고, ‘사진 등록’ 이라는 글자를 눌러주세요.<br />
                그리고 상품명을 적으시고, 특산물을 몇점에 판매하실 건지 가격을 책정해주세요.<br />
                다른 사람이 등록하는 특산물보다 내 특산물이 더 많이 팔리기 위해서는,<br />
                다른 사람의 특산물이 몇점에 팔리고 있는지, 어떤 특징을 가지고 있는지 먼저 둘러보고 오시는 게 좋습니다.<br />
                모두 마치셨다면, ‘상품 등록’ 이라는 글자를 눌러주세요.<br />
                특산물이 등록된 후 판매를 시작하실 수 있습니다.<br />
                <br />
                4. 네번째 단계<br />
                상품을 등록하셨다면, 화면 가운데의 ‘주문 현황’ 이라는 글자를 누르세요.<br />
                남한 주민이 주문을 하면, 아무것도 없던 화면에 새로운 정보가 보이게 됩니다.<br />
                <br />
                주문이 들어왔는지 확인하기 위해서는 항상 화면 가운데의 ‘주문 현황’ 이라는 글자를 눌러 확인하시면 됩니다.<br />
                <br />
                5. 다섯번째 단계<br />
                주문이 들어오면, ‘수락’ 이라는 글자를 누르셔야 합니다.<br />
                만약 판매하시는 상품이 모자라거나 모두 팔려서 주문을 받을 수 없다면, ‘거절’ 이라는 글자를 눌러주세요.<br />
                <br />
                6. 여섯번째 단계<br />
                ‘수락’ 글자를 누르셨다면, 남한 주민에게 상품을 택배로 보내주어야 합니다.<br />
                상품을 잘 포장해주세요. 3일 이내로 배달원이 자택에 도착할 것입니다.<br />
                배달원이 도착하면, 포장한 상품을 전달하세요.<br />
                <br />
                7. 일곱번째 단계<br />
                판매 수익은 현금이 아닌 ‘점수’ 라는 것으로 드립니다. ( 남한에서는 ‘포인트’ 라는 영어 단어로 불립니다. )<br />
                주문이 들어왔을 때 ‘수락’ 글자를 눌러서 주문을 받으시면 점수가 적립됩니다.<br />
                만약 ‘수락’ 글자를 누르시고 나서 판매 상품을 배달원에게 전달하지 않으시면,<br />
                더이상 특산물을 판매하실 수 없습니다.<br />
                <br />
                8. 여덟번째 단계<br />
                내 점수가 몇점인지 확인하려면, 화면 가운데의 '남한 물건 사러가기' 글자를 누르시면 됩니다.<br />
                이 점수는 남한 물건을 구매할 때 사용하실 수 있습니다.<br />
                ‘남한 물건 사러 가기’ 글자를 누르면, 여러가지 남한 물건이 있습니다.<br />
                그 중 구매하고 싶은 물건을 골라 ‘구매’ 버튼을 눌러주세요.<br />
                10일 이내로 구매하신 남한 물건이 배달원을 통해 도착할 것입니다.<br />

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
            </Detail>
            <Sizedbox />
            <StyledButton onClick={back}>상기 내용을 확인하였습니다.</StyledButton>
            <Sizedbox />
        </MainContainer>
    );
};
