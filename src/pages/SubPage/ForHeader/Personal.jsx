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
            <Left_title>

                개인정보처리방침의 의의

            </Left_title>
            <Sizedbox />
            <Detail>
                본 개인정보처리방침은 개인정보보호법 기준으로 작성하되, 이용자 개인정보 처리 현황을 최대한 알기 쉽고 상세하게 설명하기 위해 노력하였습니다. <br />
                이는 쉬운 용어를 사용한 개인정보처리방침 작성 원칙인 ‘Plain Language Privacy Policy(쉬운 용어를 사용한 개인정보처리방침)’를 도입한 것입니다. <br />

                개인정보처리방침은 다음과 같은 중요한 의미를 가지고 있습니다. <br />
                어떤 정보를 수집하고, 수집한 정보를 어떻게 사용하며, 필요에 따라 누구와 이를 공유(‘위탁 또는 제공’)하며, 이용목적을 달성한 정보를 언제・어떻게 파기하는지 등 ‘개인정보의 한살이’와 관련한 정보를 투명하게 제공합니다. <br />
                정보주체로서 이용자는 자신의 개인정보에 대해 어떤 권리를 가지고 있으며, 이를 어떤 방법과 절차로 행사할 수 있는지를 알려드립니다. <br />
                또한, 법정대리인(부모 등)이 만14세 미만 아동의 개인정보 보호를 위해 어떤 권리를 행사할 수 있는지도 함께 안내합니다. <br />
                개인정보 침해사고가 발생하는 경우, 추가적인 피해를 예방하고 이미 발생한 피해를 복구하기 위해 누구에게 연락하여 어떤 도움을 받을 수 있는지 알려드립니다.<br />
                그 무엇보다도, 개인정보와 관련하여 네이버와 이용자간의 권리 및 의무 관계를 규정하여 이용자의 ‘개인정보자기결정권’을 보장하는 수단이 됩니다.<br />
            </Detail>
            <Sizedbox />
            <Left_title>

                수집하는 개인정보

            </Left_title>
            <Sizedbox />
            <Detail>
                이용자는 회원가입을 하지 않아도 대부분의 서비스를 회원과 동일하게 이용할 수 있습니다. 회원가입을 할 경우, 서비스 이용을 위해 필요한 최소한의 개인정보를 수집합니다.<br />

                회원가입 시점에 이용자로부터 수집하는 개인정보는 아래와 같습니다.<br />
                회원 가입 시 필수항목으로 성함, 비밀번호, 주소를 수집합니다.<br />

                법령 및 이용약관을 위반하는 회원에 대한 이용 제한 조치, 부정 이용 행위를 포함하여 서비스의 원활한 운영에 지장을 주는 행위에 대한 방지 및 제재, 계정도용 및 부정거래 방지, 약관 개정 등의 고지사항 전달, 분쟁조정을 위한 기록 보존, 민원처리 등 이용자 보호 및 서비스 운영을 위하여 개인정보를 이용합니다.<br />
                유료 서비스 제공에 따르는 본인인증, 구매 및 요금 결제, 상품 및 서비스의 배송을 위하여 개인정보를 이용합니다.<br />
                보안, 프라이버시, 안전 측면에서 이용자가 안심하고 이용할 수 있는 서비스 이용환경 구축을 위해 개인정보를 이용합니다.<br />
                원칙적으로 이용자 동의 없이 개인정보를 외부에 제공하지 않습니다.<br />
                단, 이용자가 외부 제휴사의 서비스를 이용하기 위하여 개인정보 제공에 직접 동의를 한 경우, 그리고 관련 법령에 의거해 네이버에 개인정보 제출 의무가 발생한 경우, 이용자의 생명이나 안전에 급박한 위험이 확인되어 이를 해소하기 위한 경우에 한하여 개인정보를 제공하고 있습니다.<br />
            </Detail>
            <Sizedbox />
            <StyledButton onClick={back}>상기 내용을 확인하였습니다.</StyledButton>
            <Sizedbox />
        </MainContainer>
    );
};
