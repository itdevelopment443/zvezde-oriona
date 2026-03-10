// FORMAT: string to slug
export const stringifySlug = (string: string) => {
  return string
    .replace(/ /g, '-') // Replace spaces with hyphens
    .replace(/š/g, 's') // Replace š with s
    .replace(/ž/g, 'z') // Replace ž with z
    .replace(/č/g, 'c') // Replace č with c
    .replace(/[^\w-]+/g, '') // Remove remaining non-word characters
    .toLowerCase()
}
