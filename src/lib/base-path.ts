/**
 * Must match next.config.ts basePath. Used so asset URLs work on GitHub Pages.
 */
export const basePath =
  process.env.NODE_ENV === "production" ? "/sneha-maurya-portfolio" : "";

export function withBasePath(path: string): string {
  if (!basePath || !path.startsWith("/")) return path;
  return basePath + path;
}
