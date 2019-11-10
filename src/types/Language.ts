export interface Language {
  id: string;
  name: string;
  color: string;
  size: number;
  percent: number;
}

export interface LanguageBreakdown {
  languages: [Language];
  totalSize: number;
}
