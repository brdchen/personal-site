'use client';

import styled from '@emotion/styled';
import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import Layout from '../components/Layout';
import webdev from '../../assets/pixel_webdev.svg';
import Projects from './Projects';

const Root = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    padding: 3vh 8vw 0 0;
    align-items: center;
    justify-content: center;
`;

const WebDevSvg = styled(Image)`
    max-width: 35vw;
    max-height: 50vh;
    margin-right: 5vw;
    margin-bottom: 1vw;
    @media screen and (max-width: 600px) {
        visibility: hidden;
        display: none;
    }
`;

const About: FunctionComponent = () => {
    return (
        <Layout>
            <Root>
                <WebDevSvg src={webdev} alt='webdev' />
                <Projects />
            </Root>
        </Layout >
    );
}

export default About;