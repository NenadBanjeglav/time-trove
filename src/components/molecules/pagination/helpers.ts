export const getPaginationRange = (currentPage: number, totalPages: number): (number | '...')[] => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  const pages: (number | '...')[] = [1]

  if (currentPage <= 4) {
    const maxVisible = Math.min(totalPages - 1, currentPage === 1 ? 3 : currentPage + 1)
    for (let i = 2; i <= maxVisible; i++) {
      pages.push(i)
    }
    if (totalPages > maxVisible + 1) {
      pages.push('...')
    }
  } else if (currentPage > 4 && currentPage < totalPages - 3) {
    pages.push('...')
    pages.push(currentPage - 1, currentPage, currentPage + 1)
    pages.push('...')
  } else {
    const minVisible = Math.max(2, currentPage === totalPages ? totalPages - 2 : currentPage - 1)
    pages.push('...')
    for (let i = minVisible; i < totalPages; i++) {
      pages.push(i)
    }
  }

  pages.push(totalPages)
  return pages
}
