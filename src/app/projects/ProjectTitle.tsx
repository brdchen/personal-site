import styled from '@emotion/styled';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import React, { FunctionComponent, useEffect, useRef } from 'react';

import arrowRight from '../../assets/icons/arrow-right-solid.svg';

const ProjectLink = styled(Link)`
    position: relative;
`;

const Title = styled.span<{ size: 'MD' | 'SM' }>`
    font-size: ${({ size }) => (size === 'MD' ? '22' : '20')}px;
    font-weight: bold;
    position: relative;
    z-index: 999;
    display: inline-block;
    vertical-align: middle;
    @media screen and (max-width: 1000px) {
        font-size: 18px;
    }
`;

const Empty = styled.span`
    display: inline-block;
    height: 100%;
    vertical-align: middle;
`;

const Color = styled.div`
    width: 2.5em;
    height: 2.5em;
    border-radius: 2.5em;
    background-color: #5e31d0;
    position: absolute;
    top: 50%;
    transform: translatey(-50%);
    left: -1rem;
    z-index: 1;
`

const ArrowRight = styled(Image)`
    color: white;
    position: relative;
    margin-left: 0.6rem;
    width: auto;
    z-index: 999;
    vertical-align: middle;
    height: 1.3em;
    @media screen and (max-width: 1000px) {
        height: 1.1em;
    }
`;

const Container = styled.div`
    position: relative; 
    height: 2.5em;
    width: fit-content;
    display: inline-block;
`;

interface Props {
    title: string;
    link: string;
    size?: 'MD' | 'SM';
}

const ProjectTitle: FunctionComponent<Props> = ({ title, link, size = 'MD' }) => {
    const linkRef = useRef<HTMLAnchorElement>(null);
    const colorRef = useRef<HTMLDivElement>(null);
    const hoverTL = gsap.timeline();

    useEffect(() => {
        hoverTL.pause();
        if (colorRef.current) {
            hoverTL.to(colorRef.current, {
                width: "calc(100% + 1.8em)",
                ease: "Elastic.easeOut(0.25)",
                duration: 0.4
            });
            hoverTL.to(colorRef.current, {
                width: "2.5em",
                left: "calc(100% - 1.8em)",
                ease: "Elastic.easeOut(0.4)",
                duration: 0.6
            });
        }
        linkRef.current?.addEventListener('mouseenter', () => hoverTL.play());
        linkRef.current?.addEventListener('mouseleave', () => hoverTL.reverse());
    });

    return (
        <ProjectLink ref={linkRef} href={link} rel='noopener noreferrer' target='_blank' passHref>
            <Container>
                <Empty></Empty>
                <Title size={size}>{title}</Title>
                <ArrowRight src={arrowRight} alt='arrow' />
                <Color ref={colorRef} />
            </Container>
        </ProjectLink>
    );
};

export default ProjectTitle;