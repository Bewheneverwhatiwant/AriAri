import styled from 'styled-components';
import Footer from "../../Components/Footer/Footer";

const BodyContainer = styled.div`
    position: relative;
`

const ChildrenContainer = styled.div`
    position:absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh- 3px);
`

const BeigeContainer = styled.div`
    position: absolute;
    display: flex;

    width: 100%;
    height: 300px;
    background-color: white;

`;

const StyledFooter = styled(Footer)`
    position: absolute;
    bottom: 0;
`

export default function Component({ $imgSrc, children }) {
    return (
        <BodyContainer>
            <BeigeContainer />
            <ChildrenContainer>
                {children}
                <StyledFooter />
            </ChildrenContainer>
        </BodyContainer>
    )
}