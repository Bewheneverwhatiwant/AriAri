import { styled } from 'styled-components';
import ContainerColumn from '../Container/ContainerColumn';
import ContainerRow from '../Container/ContainerRow';

const FooterContainer = styled.footer`
    height: 220px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #D9D9D9;
    color: white;
`;

const OneOfThree = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
`

const Logo = styled.div`
    width: 200px;
    height: 100px;
    img {
        width: 100%;
        height: 100%;
    }
`

const Icon = styled.div`
    width: 20px;
    height: 20px;
    img {
         width: 100%;
        height: 100%;
    }
`

const Sizedbox = styled.div`
    width: 10px;
    height: 20px;
`

const RowForInsta = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
`

const StyledLink = styled.a`
    color: white;
`;

export default function Component() {
    return (
        <FooterContainer>
            <OneOfThree>
                <Logo>
                    <img src="logo_first.svg" alt="로고" />
                </Logo>
            </OneOfThree>
            <OneOfThree>
                <ContainerColumn>
                    <p style={{ fontWeight: 'bold' }}>COMPANY</p>
                    <Sizedbox />
                    <p>ⓒ컬쳐쇼크</p>
                    <Sizedbox />
                    <p>소속: 한국외국어대학교</p>
                    <Sizedbox />
                    <p>상호: 아리아리</p>
                    <Sizedbox />
                    <StyledLink href="/personal">개인정보 처리 방침 보러가기</StyledLink>
                    <Sizedbox />
                </ContainerColumn>
            </OneOfThree>
            <OneOfThree>
                <ContainerColumn>
                    <p style={{ fontWeight: 'bold' }}>CONTACT US</p>
                    <Sizedbox />
                    <RowForInsta gap='10px'>
                        <Icon>
                            <img src="icon_insta.svg" alt="로고" />
                        </Icon>
                        <Sizedbox />
                        <p>AriAri.Official</p>
                    </RowForInsta>
                    <Sizedbox />
                    <ContainerRow>
                        <Icon>
                            <img src="icon_email.svg" alt="로고" />
                        </Icon>
                        <Sizedbox />
                        <p>lny021102@gmail.com</p>
                    </ContainerRow>
                </ContainerColumn>
            </OneOfThree>
        </FooterContainer>
    );
};