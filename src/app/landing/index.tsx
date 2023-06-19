import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material';
import { Avatar } from '../../lib/mui';
import profilePicture from '../../assets/prof_pic.jpg';
import pixelSpace from '../../assets/pixel_space.svg';
import { ThemeProvider } from '@emotion/react';
import Image from 'next/image';
import Intro from './Intro';

const Root = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    padding: 4rem 0;
`;

const AvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const NameContainer = styled.div`
    padding-bottom: 0.5rem;
`;

const Name = styled.span`
    font-weight: bold;
    font-size: 36px;
`;

const StyledAvatar = styled(Avatar)`
    width: 250px;
    height: 250px;
`;

const StyledIllustration = styled(Image)`
    width: 1000px;
    height: 1000px;
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