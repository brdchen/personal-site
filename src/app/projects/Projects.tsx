import styled from '@emotion/styled';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';

import { strings } from './strings';
import ProjectTitle from './ProjectTitle';

const Root = styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    max-width: 40rem;
    min-width: 0;
    color: white;
    @media screen and (max-width: 1000px) {
        margin-left: 1.5rem;
    }
`;

const Section = styled.div`
    margin-bottom: 40px;
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

const ProjectLink = styled(Link)`
    position: relative;
    color: #8d6eff;
    
`;

const ProjectDescription = styled.div`
    min-width: 0;
    margin-top: 14px;
    margin-bottom: 14px;
    line-height: 1.4;
    @media screen and (max-width: 1000px) {
        font-size: 15px;
    }
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
`;

const Projects: FunctionComponent = () => {
    return (
        <Root>
            <Section>
                <ProjectTitle title={strings.dubhacks.title} link={strings.dubhacks.link} />
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
                <ProjectTitle title={strings.lofi.title} link={strings.lofi.link} />
                <ProjectDescription>
                    <span>{strings.lofi.description}</span>
                </ProjectDescription>
                <div>
                    <ProjectTechPrefix>{`Tech: `}</ProjectTechPrefix>
                    <ProjectTech>{strings.lofi.tech}</ProjectTech>
                </div>
            </Section>
            <Section>
                <ProjectTitle title={strings.hyperspeed.title} link={strings.hyperspeed.link} />
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
                <ProjectTitle title={strings.paxos.title} link={strings.paxos.link} />
                <ProjectDescription>
                    <span>{strings.paxos.description}</span>
                </ProjectDescription>
                <div>
                    <ProjectTechPrefix>{`Tech: `}</ProjectTechPrefix>
                    <ProjectTech>{strings.paxos.tech}</ProjectTech>
                </div>
            </Section>
            <div>
                <Title>{strings.threegle.title}</Title>
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