import { styled } from 'styled-components';
import ContainerCenter from '../Container/ContainerCenter';

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #EDBAFF;
    
`;

const Logo = styled.div`
    width: 100px;
    height: 50px;
    padding-left: 20px;
    img {
        width: 100%;
        height: 100%;
    }
`

const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const LoginContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const Sizedbox = styled.div`
   width: 20px;
`

const StyledLink = styled.a`
    color: black;
    text-decoration: none;
`;

const StyledLink_bold = styled.a`
    color: black;
    font-weight: bold;
`;

export default function Component() {
    return (
        <HeaderContainer>
            <Logo>
                <StyledLink href="/">
                    <img src="logo_first.svg" alt="로고" />
                </StyledLink>
            </Logo>
            <MenuContainer>
                <ContainerCenter>
                    <LoginContainer>
                        <StyledLink href="/login">로그인</StyledLink>
                        <Sizedbox />
                        <p>|</p>
                        <Sizedbox />
                        <StyledLink href="/signup">회원가입</StyledLink>
                    </LoginContainer>
                </ContainerCenter>
                <Sizedbox />
                <ContainerCenter>
                    <StyledLink_bold href="/intro">아리아리 소개</StyledLink_bold>
                </ContainerCenter>
                <Sizedbox />
                <ContainerCenter>
                    <StyledLink_bold href="/howtouse">아리아리 사용설명서</StyledLink_bold>
                </ContainerCenter>
                <Sizedbox />
            </MenuContainer>
        </HeaderContainer>
    );
};