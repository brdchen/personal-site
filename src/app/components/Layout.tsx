import styled from '@emotion/styled';
import Head from 'next/head';
import React, { FunctionComponent } from 'react';
import NavBar from '../navbar';
import profilePic from '../../assets/prof_pic.jpg';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(138deg, rgb(46.667% 90.196% 99.608%) 0%, rgb(48.139% 82.646% 98.088% / 0.98546875) 6.25%, rgb(49.516% 75.582% 96.667% / 0.971875) 12.5%, rgb(50.798% 69.006% 95.343% / 0.95921875) 18.75%, rgb(51.985% 62.917% 94.118% / 0.9475) 25%, rgb(53.078% 57.315% 92.99% / 0.93671875) 31.25%, rgb(54.075% 52.2% 91.961% / 0.926875) 37.5%, rgb(54.977% 47.572% 91.029% / 0.91796875) 43.75%, rgb(55.784% 43.431% 90.196% / 0.91) 50%, rgb(56.497% 39.778% 89.461% / 0.90296875) 56.25%, rgb(57.114% 36.612% 88.824% / 0.896875) 62.5%, rgb(57.636% 33.932% 88.284% / 0.89171875) 68.75%, rgb(58.064% 31.74% 87.843% / 0.8875) 75%, rgb(58.396% 30.035% 87.5% / 0.88421875) 81.25%, rgb(58.634% 28.817% 87.255% / 0.881875) 87.5%, rgb(58.776% 28.087% 87.108% / 0.88046875) 93.75%, rgb(58.824% 27.843% 87.059% / 0.88) 100% );
`;

interface Props {
    children: React.ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children }) => (
    <Main>
        <Head>
            <meta property='og:image' content={profilePic.src} />
        </Head>
        <NavBar />
        {children}
    </Main>
);

export default Layout;