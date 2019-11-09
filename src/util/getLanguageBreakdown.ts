import { ShowcaseContextProps } from "../context/ShowcaseContext";
import { ShowcaseAuthenticationError } from "../error/ShowcaseAuthenticationError";
import { LanguageBreakdown, LanguageEdges } from "../types/Language";
import graphql from "./graphql";

async function getLanguageBreakdown(
  repoOwner: string,
  repoName: string,
  { auth, endpoint }: ShowcaseContextProps
): Promise<LanguageBreakdown> {
  if (!auth) {
    // TODO: link to documentation
    throw new ShowcaseAuthenticationError(
      `auth was ${typeof auth} - expected a string. You can configure the auth token by using ShowcaseProvider`
    );
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
      endpoint
    }
  );
  const data = await response.json();

  if (!data) {
    return null;
  }
  const { edges, totalSize } = data.data.repository.languages;
  const languages = edges.map(
    ({ node: { name, color }, size }: LanguageEdges) => ({
      name,
      color,
      size,
      percent: (size / totalSize) * 100
    })
  );
  return {
    languages,
    totalSize
  };
}
export default getLanguageBreakdown;
