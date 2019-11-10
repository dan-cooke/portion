import { LanguageBreakdown } from "./Language";

export interface RepositoryTopic {
    name: string;
    url: string;
}
interface Repository {
    description? : string;
    url?: string;
    repositoryTopics?: [RepositoryTopic]
    languageBreakdown: LanguageBreakdown
}

export default Repository;