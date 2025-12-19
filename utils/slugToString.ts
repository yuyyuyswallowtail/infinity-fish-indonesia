export function slugToString(slug: string): string {
  return slug
    .toString()
    .trim()
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
