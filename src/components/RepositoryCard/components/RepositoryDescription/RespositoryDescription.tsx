import * as React from 'react';
import Repository, { RepositoryTopic } from '../../../../types/Repository';
import styled from 'styled-components';
import ThemedComponent from '../../../ThemedComponent';


const RepositoryDescriptionContainer = styled.div`
    display: grid;
    grid-template-rows: 50px auto;
    grid-template-columns: auto;
    max-height: 200px;
    margin-left: 2%;
    font-size: ${props => props.theme.font.baseSize};
    font-family: ${props => props.theme.font.family};
    color: ${props => props.theme.colors.textPrimary};
`;

const RepositoryDescription = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: max-content max-content;
    column-gap: 10px;
    /** TODO: use relative font size */
    font-size: 16px;
    font-weight: 450;
    justify-content: left;
    align-items: center;
`;

const RepositoryTopics = styled.ol`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding-inline-start: 0px;
    justify-content: left;
`;

export default ({ repo }: { repo: Repository }) => {

    return (
        <RepositoryDescriptionContainer>
            <RepositoryDescription>
                <p>{repo.description}</p>
                <ThemedComponent innerProps={{ href: repo.url }} elementName="a" >{repo.url}</ThemedComponent>
            </RepositoryDescription>
            <RepositoryTopics>
                {repo ?.repositoryTopics ?.map((topic: RepositoryTopic) => {
                    return (
                        <li>
                            <ThemedComponent elementName="topicTag" innerProps={{ href: topic.url }}>{topic.name}</ThemedComponent>
                        </li>);
                })}
            </RepositoryTopics>
        </RepositoryDescriptionContainer>
    )
}