import styled from '@emotion/styled';
import React, { FunctionComponent } from 'react';

import { strings } from './strings';
import Link from 'next/link';

const Root = styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    max-width: 40rem;
    min-width: 0;
    @media screen and (max-width: 600px) {
        margin-left: 1.5rem;
    }
`;

const Section = styled.div`
    margin-bottom: 40px;
`;

const ProjectTitle = styled.span`
    font-size: 22px;
    font-weight: bold;
`;

const ProjectLink = styled(Link)`
    &:hover { 
        text-decoration: underline;
    };
`;

const ProjectDescription = styled.div`
    min-width: 0;
    margin-top: 18px;
    margin-bottom: 10px;
`;

const ProjectTechPrefix = styled.span`
    font-weight: bold;
`;

const ProjectTech = styled.span`
    font-style: italic;
`;

const LinkText = styled.span`
    font-weight: bold;
    &:hover { 
        text-decoration: underline;
    };
`;

const TechLinkText = styled(LinkText)`
    font-style: italic;
`

const Projects: FunctionComponent = () => {
    return (
        <Root>
            <Section>
                <div>
                    <ProjectLink href={strings.dubhacks.link} rel='noopener noreferrer' target='_blank'>
                        <ProjectTitle>{strings.dubhacks.title}</ProjectTitle>
                    </ProjectLink>
                </div>
                <ProjectDescription>
                    <span>{strings.dubhacks.preDubhacksDescription}</span>
                    <ProjectLink href={strings.dubhacks.dubhacksLink} rel='noopener noreferrer' target='_blank'>
                        <LinkText>{strings.dubhacks.dubhacksText}</LinkText>
                    </ProjectLink>
                    <span>{strings.dubhacks.postDubhacksDescription}</span>
                    <ProjectLink href={strings.dubhacks.quillLink} rel='noopener noreferrer' target='_blank'>
                        <LinkText>{strings.dubhacks.quillText}</LinkText>
                    </ProjectLink>
                    <span>{strings.dubhacks.postQuillDescription}</span>
                </ProjectDescription>
                <div>
                    <ProjectTechPrefix>{`Tech: `}</ProjectTechPrefix>
                    <ProjectTech>{strings.dubhacks.tech}</ProjectTech>
                </div>
            </Section>
            <Section>
                <div>
                    <ProjectLink href={strings.lofi.link} rel='noopener noreferrer' target='_blank'>
                        <ProjectTitle>{strings.lofi.title}</ProjectTitle>
                    </ProjectLink>
                </div>
                <ProjectDescription>
                    <span>{strings.lofi.description}</span>
                </ProjectDescription>
                <div>
                    <ProjectTechPrefix>{`Tech: `}</ProjectTechPrefix>
                    <ProjectTech>{strings.lofi.tech}</ProjectTech>
                </div>
            </Section>
            <Section>
                <div>
                    <ProjectLink href={strings.hyperspeed.link} rel='noopener noreferrer' target='_blank'>
                        <ProjectTitle>{strings.hyperspeed.title}</ProjectTitle>
                    </ProjectLink>
                </div>
                <ProjectDescription>
                    <span>{strings.hyperspeed.description}</span>
                </ProjectDescription>
                <div>
                    <ProjectTechPrefix>{`Tech: `}</ProjectTechPrefix>
                    <ProjectTech>{strings.hyperspeed.preProcessingTech}</ProjectTech>
                    <ProjectLink href={strings.hyperspeed.processingLink} rel='noopener noreferrer' target='_blank'>
                        <TechLinkText>{strings.hyperspeed.processingText}</TechLinkText>
                    </ProjectLink>
                    <ProjectTech>{strings.hyperspeed.postProcessingTech}</ProjectTech>
                </div>
            </Section>
            <Section>
                <div>
                    <ProjectLink href={strings.paxos.link} rel='noopener noreferrer' target='_blank'>
                        <ProjectTitle>{strings.paxos.title}</ProjectTitle>
                    </ProjectLink>
                </div>
                <ProjectDescription>
                    <span>{strings.paxos.description}</span>
                </ProjectDescription>
                <div>
                    <ProjectTechPrefix>{`Tech: `}</ProjectTechPrefix>
                    <ProjectTech>{strings.paxos.tech}</ProjectTech>
                </div>
            </Section>
            <div>
                <div>
                    <ProjectTitle>{strings.threegle.title}</ProjectTitle>
                </div>
                <ProjectDescription>
                    <span>{strings.threegle.description}</span>
                </ProjectDescription>
                <div>
                    <ProjectTechPrefix>{`Tech: `}</ProjectTechPrefix>
                    <ProjectTech>{strings.threegle.tech}</ProjectTech>
                </div>
            </div>
        </Root>
    );
}

export default Projects;