import graphql from "./graphql";
import { LanguageStatsInput } from "../hooks/useLanguageStats";
import { PortionContextProps } from "../context/PortionContext";
import { PortionAuthenticationError } from "../error/index";

interface Language {
    id: string
    name: string
    size: number
    percent: number
}
export interface LanguageStats {
    languages: [Language]
    totalSize: number
}

interface LanguageNode {
    name: string
    color: string
    id: number
}
interface LanguageEdges {
    node: LanguageNode
    size: number
}
async function getLanguageStats(repoOwner: string, repoName: string, {auth, endpoint}: PortionContextProps) : Promise<LanguageStats> {

    if (!auth) {
        // TODO: link to documentation
        throw new PortionAuthenticationError(`auth was ${typeof auth} - expected a string. You can configure the auth token by using PortionProvider`)
    }
    const response = await graphql(
            `query {
                repository(name: "${repoName}", owner: "${repoOwner}") {
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
        }`,
    {
        auth,
        endpoint,
    });
    const data = await response.json()

    if (!data) {
        return null; 
    }
    const { edges, totalSize } = data.data.repository.languages;
    const languages = edges.map(({ node: { name, color }, size}: LanguageEdges) => ({name, color, size, percent: (size/ totalSize) * 100}))
    return {
        languages,
        totalSize
    }
}
export default getLanguageStats;