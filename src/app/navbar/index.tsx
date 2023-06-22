import React, { FunctionComponent } from 'react';
import Button from '@mui/material-next/Button';
import styled from '@emotion/styled';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const RootNav = styled.nav`
    margin-top: 1rem;
    display: flex;
    align-items: center;
`;

const StyledButton = styled(Button) <{ currentPage: boolean }>`
    margin: 0px 3px 0px 3px;
    ${p => p.currentPage && `
        font-weight: bold;
    `}
`;

const AboutMe = styled.span`
    font-family: 'Verdana', sans-serif;
    font-size: 20px;
    color: white;
    &:before {
        display: block;
        content: attr(title);
        font-weight: bold;
        height: 0;
        overflow: hidden;
        visibility: hidden;
    }
`;

const NavBar: FunctionComponent = () => {
    const currentRoute = usePathname();

    return (
        <RootNav>
            <Link href='/' passHref>
                <StyledButton color='primary' size='large' variant='text' currentPage={currentRoute === '/'}>
                    <AboutMe title='Home'>Home</AboutMe>
                </StyledButton>
            </Link>
            <Link href='/about' passHref>
                <StyledButton color='primary' size='large' variant='text' currentPage={currentRoute === '/about'}>
                    <AboutMe title='About'>About</AboutMe>
                </StyledButton>
            </Link>
            <Link href='/projects' passHref>
                <StyledButton color='primary' size='large' variant='text' currentPage={currentRoute === '/projects'} >
                    <AboutMe title='Projects'>Projects</AboutMe>
                </StyledButton>
            </Link>
            <Link href='/resume.pdf' target='_blank' passHref>
                <StyledButton color='primary' size='large' variant='text' currentPage={false} title='Resume'>
                    <AboutMe title='Resume'>Resume</AboutMe>
                </StyledButton>
            </Link>
            {/* <Link href='/contact' passHref>
                <StyledButton color='primary' size='large' variant='text' currentPage={currentRoute === '/contact'} >
                    <AboutMe title='Contact'>Contact</AboutMe>
                </StyledButton>
            </Link> */}
        </RootNav>
    );
};

export default NavBar;
