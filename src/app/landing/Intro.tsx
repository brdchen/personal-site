import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import Typewriter from 'typewriter-effect';

import githubIcon from '../../assets/icons/github.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import twitterIcon from '../../assets/icons/twitter.svg';

const Root = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    min-width: 800px;
    font-weight: semi-bold;
    font-size: 36px;
    padding: 0px 50px 80px 100px;
`;

const SocialLinks = styled.div`
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    margin: 30px 0 0 0;
`;

const SocialLink = styled(Button)`
    padding: 10px 40px 10px 10px;
    vertical-align: middle;
    horizontal-align: middle;
    border-radius: 10px;
`;

const Github = styled(SocialLink)`
    padding: 13px 40px 13px 10px;
`;


const LinkedIn = styled(SocialLink)`
    padding: 13px 40px 13px 10px;
`;

const Instagram = styled(SocialLink)`
    padding: 10px 38px 10px 8px;
`;


const Twitter = styled(SocialLink)`
    padding: 10px 36px 10px 6px;
`;

const TitleContainer = styled.div`
    margin-bottom: 12px;
    font-size: 44px;
`;

const TextContainer = styled.div`
    margin-bottom: 16px;
    display: flex;
`;

const TypeWriterPrefix = styled.span`
    margin-right: 10px;
`;

const TypewriterWrapper = styled.span`
    font-weight: bold;
`;

const StyledImage = styled(Image)`
    margin: 0 0 0 40px;
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
                        typewriter.typeString(`Full Stack Software Engineer.`).pauseFor(2500).deleteAll().typeString('ReactJS Developer.').pauseFor(2500).deleteAll().typeString('Lifelong Learner.').pauseFor(2500).deleteAll().start()
                    }} options={{ autoStart: true, loop: true, delay: 75 }} />
                </TypewriterWrapper>
            </TextContainer>
            <SocialLinks>
                <Link href='https://github.com/Jyntaro' rel='noopener noreferrer' target='_blank'>
                    <Github variant='text' startIcon={<StyledImage src={githubIcon} alt='github' />} sx={{ ':hover': { bgcolor: 'rgba(90,90,230,0.3)', boxShadow: 2 } }} />
                </Link>
                <Link href='https://www.linkedin.com/in/bradford-chen' rel='noopener noreferrer' target='_blank'>
                    <LinkedIn variant='text' startIcon={<StyledImage src={linkedinIcon} alt='linkedin' />} sx={{ ':hover': { bgcolor: 'rgba(110,75,230,0.3)', boxShadow: 2 } }} />
                </Link>
                <Link href='https://www.instagram.com/chen_da_man' rel='noopener noreferrer' target='_blank'>
                    <Instagram variant='text' startIcon={<StyledImage src={instagramIcon} alt='insta' />} sx={{ ':hover': { bgcolor: 'rgba(130,60,230,0.3)', boxShadow: 2 } }} />
                </Link>
                <Link href='https://twitter.com/breadfordchen' rel='noopener noreferrer' target='_blank'>
                    <Twitter variant='text' startIcon={<StyledImage src={twitterIcon} alt='twitter' />} sx={{ ':hover': { bgcolor: 'rgba(150,50,230,0.3)', boxShadow: 2 } }} />
                </Link>
            </SocialLinks>
        </Root >
    );
}

export default Intro;