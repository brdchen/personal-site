import styled from '@emotion/styled';
import { FunctionComponent } from 'react';
import Typewriter from 'typewriter-effect';

const Root = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    min-width: 500px;
    font-weight: semi-bold;
    font-size: 36px;
`;

const TitleContainer = styled.div`
    margin-bottom: 12px;
    font-size: 44px;
`;

const TextContainer = styled.div`
    margin-bottom: 16px;
    flex-direction: row;
    display: flex;
`;

const TypeWriterPrefix = styled.span`
    margin-right: 10px;
`;

const TypewriterWrapper = styled.div`
    font-weight: bold;
`;

const Intro: FunctionComponent = () => {
    return (
        <Root>
            <TitleContainer>
                <span>{`Hi, I'm Brad Chen`}</span>
            </TitleContainer>
            <TextContainer>
                <TypeWriterPrefix>{`I'm a `}</TypeWriterPrefix>
                <TypewriterWrapper>
                    <Typewriter onInit={(typewriter) => {
                        typewriter.typeString(`Full-stack Engineer.`).pauseFor(2500).deleteAll().typeString('React Developer.').pauseFor(2500).deleteAll().typeString('Backend Engineer.').pauseFor(2500).deleteAll().start()
                    }} options={{ autoStart: true, loop: true }} />
                </TypewriterWrapper>
            </TextContainer>
        </Root>
    );
}

export default Intro;