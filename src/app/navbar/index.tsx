import { FunctionComponent } from 'react';
import Button from '@mui/material-next/Button';
import styled from '@emotion/styled';
import Link from 'next/link';

const RootNav = styled.nav`
    padding-top: 1rem;
`;

const StyledButton = styled(Button)`
    margin: 0px 6px 0px 6px;
`;

const AboutMe = styled.span`
    font-family: 'Verdana', sans-serif;
    font-size: 24px;
    color: white;
`;

const NavBar: FunctionComponent = () => {
    return (
        <RootNav>
            <Link href='/about' passHref>
                <StyledButton color='primary' size='large' variant='text'>
                    <AboutMe>About</AboutMe>
                </StyledButton>
            </Link>
            <Link href='/projects' passHref>
                <StyledButton color='primary' size='large' variant='text'>
                    <AboutMe>Projects</AboutMe>
                </StyledButton>
            </Link>
            <Link href='/resume.pdf' target='_blank' passHref>
                <StyledButton color='primary' size='large' variant='text'>
                    <AboutMe>Resume</AboutMe>
                </StyledButton>
            </Link>
            <Link href='/contact' passHref>
                <StyledButton color='primary' size='large' variant='text'>
                    <AboutMe>Contact</AboutMe>
                </StyledButton>
            </Link>
        </RootNav>
    );
};

export default NavBar;