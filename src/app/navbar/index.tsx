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

const StyledButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'currentPage'
}) <{ currentPage: boolean }>`
    margin: 0 3px 0 3px;
    ${p => p.currentPage && `
        font-weight: bold;
    `}
    @media screen and (max-width: 1000px) {
        padding: 0.7rem 0.9rem 0.7rem 0.9rem;
        margin: 0;
    }
`;

const Text = styled.span`
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
    @media screen and (max-width: 1000px) {
        font-size: 14px;
    }
`;

const NavBar: FunctionComponent = () => {
    const currentRoute = usePathname();

    return (
        <RootNav>
            <Link href='/' passHref>
                <StyledButton color='primary' size='large' variant='text' currentPage={currentRoute === '/'}>
                    <Text title='Home'>Home</Text>
                </StyledButton>
            </Link>
            <Link href='/about' passHref>
                <StyledButton color='primary' size='large' variant='text' currentPage={currentRoute === '/about'}>
                    <Text title='About'>About</Text>
                </StyledButton>
            </Link>
            <Link href='/projects' passHref>
                <StyledButton color='primary' size='large' variant='text' currentPage={currentRoute === '/projects'} >
                    <Text title='Projects'>Projects</Text>
                </StyledButton>
            </Link>
            <Link href='/resume.pdf' target='_blank' passHref>
                <StyledButton color='primary' size='large' variant='text' currentPage={false} title='Resume'>
                    <Text title='Resume'>Resume</Text>
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
