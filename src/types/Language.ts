export interface Language {
  id: string;
  name: string;
  color: string;
  size: number;
  percent: number;
}

export interface LanguageEdges {
  node: LanguageNode;
  size: number;
}

export interface LanguageNode {
  name: string;
  color: string;
  id: number;
}

export interface LanguageBreakdown {
  languages: [Language];
  totalSize: number;
}
