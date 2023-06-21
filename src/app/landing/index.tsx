import { FunctionComponent } from 'react';
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
    width: 900px;
    height: auto;
    justify-content: flex-end;
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