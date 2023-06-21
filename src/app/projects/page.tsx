'use client';

import styled from '@emotion/styled';
import { FunctionComponent } from 'react';
import Image from 'next/image';

import Layout from '../components/Layout';
import webdev from '../../assets/pixel_webdev.svg';

const Root = styled.div`
    display: flex;
    position: relative;
    padding: 4rem 0 0 0;
    align-items: center;
    justify-content: center;
`;

const WebDevSvg = styled(Image)`
    min-height: 50vh;
    height: auto;
    width: auto;
`;

const About: FunctionComponent = () => {
    return (
        <Layout>
            <Root>
                <WebDevSvg src={webdev} alt='webdev' />
            </Root>
        </Layout >
    );
}

export default About;