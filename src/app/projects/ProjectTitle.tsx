import styled from '@emotion/styled';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import React, { FunctionComponent, useEffect, useRef } from 'react';

import arrowRight from '../../assets/icons/arrow-right-solid.svg';

const ProjectLink = styled(Link)`
    position: relative;
    width: max-content;
`;

const Title = styled.span`
    font-size: 22px;
    font-weight: bold;
    position: relative;
    z-index: 999;
    @media screen and (max-width: 1000px) {
        font-size: 18px;
    }
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
    @media screen and (max-width: 1000px) {
        top: 43%;
    }
`

const ArrowRight = styled(Image)`
    color: white;
    position: relative;
    margin-left: 0.6rem;
    width: auto;
    height: 1.2em;
    z-index: 999;
    @media screen and (max-width: 1000px) {
        height: 1em;
    }
`;

const Container = styled.div`
    position: relative; 
    height: 2.5em;
    width: fit-content;
    padding-top: 0.5em;
`;

interface Props {
    title: string;
    link: string;
}

const ProjectTitle: FunctionComponent<Props> = ({ title, link }) => {
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
                left: "calc(100% - 1.7em)",
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
                <Title>{title}</Title>
                <ArrowRight src={arrowRight} alt='arrow' />
                <Color ref={colorRef} />
            </Container>
        </ProjectLink>
    );
};

export default ProjectTitle;