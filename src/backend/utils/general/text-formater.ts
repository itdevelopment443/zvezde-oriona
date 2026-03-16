export function capitalize(input: string): string {
  return input.charAt(0).toUpperCase() + input.slice(1)
}

export function removeSeparators(input: string): string {
  return input.replace(/[-_]/g, ' ')
}
