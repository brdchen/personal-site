'use client';

import styled from '@emotion/styled';
import React, { FunctionComponent } from 'react';

import Layout from '../components/Layout';
import profilePic from '../../assets/prof_pic.jpg';
import { Avatar } from '@mui/material';
import Link from 'next/link';

const Root = styled.div`
    display: flex;
    position: relative;
    margin: 4rem 0 0 0;
    align-items: center;
    justify-content: space-between;
    border: 2px solid rgba(255,255,255, 0.1);
    border-radius: 30px;
    max-width: 70rem;
    max-height: 100rem;
    box-shadow: 5px 10px rgba(255,255,255, 0.15);
    background: rgba(200, 200, 200, 0.12);
    flex-direction: column;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 3rem;
`;

const TextContainer = styled.div`
    padding-right: 3rem;
    padding-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    justify-content: center;
    max-width: 60vw;
    font-size: 20px;
    font-weight: thin;
`;

const TitleContainer = styled.div`
    margin-top: 2rem;
    margin-bottom: 14px;
    font-size: 40px;
    justify-self: center;
`;

const Description = styled.span`
    margin-top: 10px;
`;

const Hobbies = styled.span`
    margin-top: 22px;
    margin-bottom: 22px;
`;

const ImageContainer = styled.div`
    justify-self: flex-end;
    margin: 2rem 3rem 2rem 0;
    max-height: 45rem;
    max-width: 28rem;
`;

const LinkText = styled.span`
    color: #3cc4ff;
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
    padding: 0 1rem 2rem 3rem;
    flex-wrap: wrap;
`

const About: FunctionComponent = () => {
    return (
        <Layout>
            <Root>
                <ContentContainer>
                    <ImageContainer>
                        <Avatar src={profilePic.src} alt='me' sx={{ width: 320, height: 320 }} />
                    </ImageContainer>
                    <TextContainer>
                        <TitleContainer>
                            <span>{`About Me`}</span>
                        </TitleContainer>
                        <Description>
                            {`I'm currently a full stack software engineer at `}
                            <Link href='https://convoy.com'>
                                <LinkText>{`Convoy`}</LinkText>
                            </Link>
                            {` on the Brokerage Tech team building a tech-driven dynamic marketplace for truck loads across mobile and web clients. Previously, I interned at `}
                            <Bold>{`Snowflake`}</Bold>
                            {` helping build `}
                            <Link href='https://medium.com/snowflake/snowflakes-elastic-cloud-services-7dfcb165a612'>
                                <LinkText>{`their elastic cloud service`}</LinkText>
                            </Link>{`, and at `}<Bold>{`Amazon`}</Bold>{` where I worked with ML research scientists to help serve Amazon.com ads.`}
                        </Description>
                        <Hobbies>
                            {`Outside of work, I love playing playing and watching tennis, cooking, working out, skiing, photography, and reading novels.`}
                        </Hobbies>
                        <span>
                            {`University of Washington B.S. in Computer Science`}
                        </span>
                    </TextContainer>
                </ContentContainer>
                <EndNote>
                    <Bold>{`Note:`}</Bold>{` This site was built using React, Typescript, Next.js, and Emotion with Material UI components. Illustrations are not my own.`}
                </EndNote>
            </Root>
        </Layout >
    );
}

export default About;