export const getPaginationRange = (currentPage: number, totalPages: number): (number | '...')[] => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  const showEarlyRange = currentPage < 5

  const middlePages = showEarlyRange
    ? Array.from({ length: Math.min(totalPages - 2, currentPage + 1 - 2 + 1) }, (_, i) => i + 2)
    : [currentPage - 1, currentPage, currentPage + 1].filter(p => p > 1 && p < totalPages)

  const pages: (number | '...')[] = [1]

  const hasLeftGap = !showEarlyRange
  const hasRightGap = middlePages[middlePages.length - 1] < totalPages - 1

  if (hasLeftGap) pages.push('...')
  pages.push(...middlePages)
  if (hasRightGap) pages.push('...')
  pages.push(totalPages)

  return pages
}
