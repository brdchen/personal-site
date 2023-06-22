import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material';
import pixelSpace from '../../assets/pixel_space.svg';
import { ThemeProvider } from '@emotion/react';
import Image from 'next/image';
import Intro from './Intro';

const Root = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    padding: 8rem 0 0 8rem;
    align-content: center;
    justify-content: center;
`;

const StyledIllustration = styled(Image)`
    max-width: 45vw;
    height: auto;
    justify-content: flex-end;
    @media screen and (max-width: 600px) {
        visibility: hidden;
        display: none;
    }
`

const Landing: FunctionComponent = () => {
    const theme = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <Root>
                <Intro />
                <StyledIllustration src={pixelSpace} alt='avatar' />
            </Root>
        </ThemeProvider>
    );
}

export default Landing;