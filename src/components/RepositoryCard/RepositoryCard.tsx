
import * as React from 'react';
import InputRepo from '../../types/InputRepo';
import styled from 'styled-components';
import LanguageBar from '../LanguageBar';
import { ShowcaseContext } from '../../context';

const RepositoryCard = styled.div`
    border-color: ${props => props.theme.colors.border};
    border-width: 1px;
    border-style: solid;
    border-radius:1%;
    display: flex;
    flex-direction: column;
    text-align: left;
    color: ${props => props.theme.colors.textAccent};
`;

const CardHeader = styled.div`
    display: inline;
    background: ${props => props.theme.colors.backgroundSecondary};
`;

const RepositoryTitle = styled.div`
    display: flex;
    align-items: center;
    margin-left: 2%;
    margin-bottom: 2%;
    color: ${props => props.theme.colors.textPrimary};
    >a {
        text-decoration: none;
        color: ${props => props.theme.colors.textAccent};
        margin-right: 3px;
        :visited{
            color: ${props => props.theme.colors.textAccent};
        }

        :nth-child(3){
            margin-left: 3px;
            font-weight: 600;
        }
    }

    >svg {
        margin-right: 8px;
        margin-top: 8px;
    }
`;
export default ({ repoOwner, repoName }: InputRepo) => {

    const { endpoint } = React.useContext(ShowcaseContext);

    const githubUrl = endpoint.replace('api.', '').replace('graphql', '');
    return (
        <RepositoryCard>
            <CardHeader>
                <RepositoryTitle>
                    <svg className="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true">
                        <path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/>
                    </svg>
                    <a href={`${githubUrl}/${repoOwner}`}>{repoOwner}</a> /     
                    <a href={`${githubUrl}/${repoOwner}/${repoName}`}>{repoName}</a>
                </RepositoryTitle>
            </CardHeader>
            <LanguageBar repoOwner={repoOwner} repoName={repoName} />
        </RepositoryCard>
    )
}