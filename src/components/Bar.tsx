import * as React from "react";
import getLanguageStats from "../util/getLanguageStats";
import useLanguageStats, { LanguageStatsInput } from "../hooks/useLanguageStats";


export default ({ repoName, repoOwner }: LanguageStatsInput) => {
 
  const { languages, totalSize } = useLanguageStats({repoName, repoOwner});

  return (
    <div>
      Name - {repoName}
      <br/>
      Repo Owner - {repoOwner}

      {JSON.stringify(languages)}
    </div>
  );
};
