'use client';

import styled from '@emotion/styled';
import React, { FunctionComponent } from 'react';

import Layout from '../components/Layout';
import profilePic from '../../assets/prof_pic.jpg';
import { Avatar } from '@mui/material';
import Link from 'next/link';
import Twemoji from '../components/Twemoji';

const Root = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    margin: 4vh 0 0 0;
    align-items: center;
    justify-content: space-between;
    color: white;
`;

const ContentContainer = styled.div`
    align-items: center;
    justify-content: space-between;
    max-width: 50vw;
    @media screen and (max-width: 1000px) {
        max-width: 80vw;
    }
`;

const TextContainer = styled.div`
    padding-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    justify-content: center;
    font-size: 18px;
    font-weight: thin;
    line-height: 1.4;
    @media screen and (max-width: 1000px) {
        font-size: 15px;
    }
`;

const Description = styled.span`
    margin-top: 32px;
`;

const ImageContainer = styled.div`
    justify-self: flex-end;
`;

const Name = styled.p`
    font-size: 28px;
    font-weight: bold;
    margin-top: 4vh;
    @media screen and (max-width: 1000px) {
        font-size: 24px;
    }
`;

const LinkText = styled.span`
    color: #69caf8;
    font-weight: bold;
    &:hover { 
        text-decoration: underline;
    };
`;

const Bold = styled.span`
    font-weight: bold;
`;

const EndNote = styled.span`
    font-style: italic;
    align-self: flex-start;
    flex-wrap: wrap;
`

const About: FunctionComponent = () => {
    return (
        <Layout style={{ background: 'rgb(30,30,30)' }}>
            <Root>
                <ImageContainer>
                    <Avatar src={profilePic.src} alt='me' sx={{ width: 250, height: 250 }} />
                </ImageContainer>
                <Name>Biography</Name>
                <ContentContainer>
                    <TextContainer>
                        <Description>
                            <Twemoji emoji='👋' />
                            {` Hi there, thanks for stopping by! I'm a software engineer who is passionate about making a positive impact on the world through technology. `}
                        </Description>
                        <Description>
                            <Twemoji emoji='💻' />
                            <span>{` I'm currently at `}</span>
                            <Link href='https://convoy.com'>
                                <LinkText>{`Convoy`}</LinkText>
                            </Link>
                            {` building a tech-driven dynamic marketplace for truck loads across mobile and web clients. While here, I've worked on landing page recommendations and ranking, search filtering, UX-driven redesigns, and performance optimizations. I've also helped build and maintain critical tools for our internal operations team to match at-risk loads on our marketplace. Previously, I interned at `}
                            <Bold>{`Snowflake`}</Bold>
                            {` helping build `}
                            <Link href='https://medium.com/snowflake/snowflakes-elastic-cloud-services-7dfcb165a612'>
                                <LinkText>{`their elastic cloud service`}</LinkText>
                            </Link>{`, and at `}<Bold>{`Amazon`}</Bold>{` where I worked with ML research scientists to help serve Amazon.com ads.`}
                        </Description>
                        <Description>
                            <Twemoji emoji='🥮' />
                            {` While attending University of Washington, I helped plan and run one of Seattle's largest annual food festivals, `}
                            <Link href='http://www.uwnightmarket.com/'>
                                <LinkText>{`UW Night Market`}</LinkText>
                            </Link>
                            {` as an officer for the Taiwanese Student Association. `}
                            <Twemoji emoji='🤖' />
                            {` I was also an Executive Tech Organizer for `}
                            <Link href='https://dubhacks.co/about'>
                                <LinkText>{`DubHacks`}</LinkText>
                            </Link>
                            {` in 2019, where I built the hackathon's registration system on top of HackMIT's open-sourced Quill.`}
                        </Description>
                        <Description>
                            <Twemoji emoji='🌏' />
                            {` In 2017, I studied abroad in Japan with the Hokkaido International Foundation for an intensive Japanese language and homestay program. I now hope to travel to all seven continents and visit as many countries as possible.`}
                        </Description>
                        <Description>
                            <Twemoji emoji='🎾' />
                            {` I'm a huge tennis geek! You can often find me playing tennis and training for USTA matches. Apart from that, I love cooking, working out, skiing, photography, and reading.`}
                        </Description>
                    </TextContainer>
                    <EndNote>
                        <Bold>{`Note:`}</Bold>{` This site was built using React, Typescript, Next.js, and Emotion with Material UI components. Illustrations are not my own.`}
                    </EndNote>
                </ContentContainer>
            </Root>
        </Layout >
    );
}

export default About;