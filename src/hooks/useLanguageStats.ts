import * as React from 'react';
import getLanguageStats, { LanguageStats } from '../util/getLanguageStats';
import PortionContext from '../context/PortionContext';

export interface LanguageStatsInput {
    repoName: string
    repoOwner: string
}
function useLanguageStats({repoName, repoOwner}: LanguageStatsInput): LanguageStats {

  const [languages, setLanguages] = React.useState(null)
  const [totalSize, setTotalSize] = React.useState(0)

  const context = React.useContext(PortionContext);

  React.useEffect(() => {
    async function getStats() {
      const { languages: langs, totalSize: size  } = await getLanguageStats(repoOwner, repoName, context);
      setLanguages(langs);
      setTotalSize(size);
    }
    getStats()
  }, [repoName, repoOwner])

  return {
      languages,
      totalSize
  }
}

export default useLanguageStats;