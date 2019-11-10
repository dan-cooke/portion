import InputRepo from "../types/InputRepo";
import useQuery from "./useQuery";
import Repository, { RepositoryTopic } from "../types/Repository";
import { LanguageBreakdown } from "../types/Language";
import Query from '../types/Query';

const mapRepositoryTopics = (repositoryTopics: any): [RepositoryTopic] => {
    if (!repositoryTopics) {
        return undefined;
    }
    const { edges } = repositoryTopics;
    return edges.map((edge: any) => ({
        name: edge.node.topic.name,
        url: edge.node.url
    }))
};

const mapLanguageBreakdown = (langs: any) : LanguageBreakdown => {
    if (!langs) {
        return undefined;
    }
    const { edges, totalSize } = langs;
    const languages = edges.map(
        ({ node: { name, color }, size }: any) => ({
        name,
        color,
        size,
        percent: (size / totalSize) * 100
        }));
  return {
    languages,
    totalSize
  };
};

const useRepository = ({ repoOwner, repoName }: InputRepo): Query<Repository> => {
  const REPO_GQL = `
        query {
            repository(name: "${repoName}", owner: "${repoOwner}") {
                description
                url
                repositoryTopics(first: 50) {
                    edges {
                        node {
                            topic {
                                name
                            }
                            url
                        }
                    }
                }
                languages(first: 50) {
                    edges {
                        node {
                            name
                            color
                            id
                        }
                        size
                    }
                    totalSize
                    totalCount
                }

            }
        }
    `;

  const { data, error, loading } = useQuery({ query: REPO_GQL });

  // Map the Github data strcuture to match our Interfaces
  const repository: Repository = {
    ...data?.repository,
    repositoryTopics: mapRepositoryTopics(data?.repository.repositoryTopics),
    languageBreakdown: mapLanguageBreakdown(data?.repository.languages)
  };

  return {
      data: repository,
      loading,
      error,
  }
};

export default useRepository;
