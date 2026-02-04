/**
 * Single source of truth for project pictures (public/projects/).
 * Add or rename files here when you change project images.
 */

/** All project image filenames in public/projects/ */
export const projectImageFiles = [
  "chronos.svg",
  "Innovation screener.png",
  "R ggplot.png",
  "code-search.svg",
  "RAG- docquey.png",
] as const;

/** Map from project key to filename. Keep in sync with portfolio illustration keys. */
export const projectImageByKey: Record<string, string> = {
  chronos: "chronos.svg",
  "innovation-screener": "Innovation screener.png",
  "edav-migration": "R ggplot.png",
  "code-search": "code-search.svg",
  "doc-query": "RAG- docquey.png",
};

export function getProjectImageUrl(key: string): string {
  const file = projectImageByKey[key];
  return file ? `/projects/${encodeURIComponent(file)}` : "";
}
