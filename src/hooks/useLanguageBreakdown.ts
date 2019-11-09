import * as React from "react";
import ShowcaseContext from "../context/ShowcaseContext";
import InputRepo from "../types/InputRepo";
import { LanguageBreakdown } from "../types/Language";
import getLanguageBreakdown from "../util/getLanguageBreakdown";

function useLanguageBreakdown({
  repoName,
  repoOwner
}: InputRepo): LanguageBreakdown {
  const [languages, setLanguages] = React.useState(null);
  const [totalSize, setTotalSize] = React.useState(0);

  const context = React.useContext(ShowcaseContext);

  React.useEffect(() => {
    async function getStats() {
      const { languages: langs, totalSize: size } = await getLanguageBreakdown(
        repoOwner,
        repoName,
        context
      );
      setLanguages(langs);
      setTotalSize(size);
    }
    getStats();
  }, [repoName, repoOwner]);

  return {
    languages,
    totalSize
  };
}

export default useLanguageBreakdown;
