/**
 * @file LanguageBar.tsx
 * @description A language bar component to display the breakdown of languages used in a github repository.
 */
import * as React from "react";
import useLanguageBreakdown from "../../hooks/useLanguageBreakdown";
import InputRepo from "../../types/InputRepo";
import { Language } from '../../types/Language';



export default ({ repoName, repoOwner }: InputRepo) => {

  const { languages, totalSize } = useLanguageBreakdown({ repoName, repoOwner });

  return (
    <div className="sc-language-bar">
      {languages ?.map((lang: Language) => {
        return (
          <span
            className={`sc-language-bar__portion sc-language-bar--language--${lang.name.toLowerCase()}`}
            style={{ width: `${lang.percent}%`, background: lang.color }}>
          </span>
        );
      })}
    </div>
  );
};
