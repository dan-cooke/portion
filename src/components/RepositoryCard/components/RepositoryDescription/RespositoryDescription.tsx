import * as React from 'react';
import Repository, { RepositoryTopic } from '../../../../types/Repository';
import styled from 'styled-components';
import StyledLink from '../../../StyledLink';


const RepositoryDescriptionContainer = styled.div`
    display: grid;
    grid-template-rows: 50px auto;
    grid-template-columns: auto;
    max-height: 200px;
    font-size: ${props => props.theme.font.baseSize};
    font-family: ${props => props.theme.font.family};
    color: ${props => props.theme.colors.textPrimary};
`;

const RepositoryTopics = styled.ol`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const RepositoryTopicTag = styled.li`
    
`;
export default ({ repo }: { repo: Repository }) => {

    return (
        <RepositoryDescriptionContainer>
            <p>{repo.description}</p>
            <StyledLink href={repo.url}>{repo.url}</StyledLink>
            <RepositoryTopics>
                {repo?.repositoryTopics?.map((topic: RepositoryTopic) => {
                    
                    return <RepositoryTopicTag>
                        <a href={topic.url}>{topic.name}</a>
                    </RepositoryTopicTag>
                })}
            </RepositoryTopics>
        </RepositoryDescriptionContainer>
    )
}