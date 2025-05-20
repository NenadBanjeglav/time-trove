export const getPaginationRange = (currentPage: number, totalPages: number): (number | '...')[] => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  const pagination: (number | '...')[] = [1]

  const isNearStart = currentPage < 5
  const isNearEnd = currentPage > totalPages - 4

  if (isNearStart) {
    const middle = Array.from({ length: 4 }, (_, i) => i + 2) // pages 2–5
    pagination.push(...middle, '...', totalPages)
  } else if (isNearEnd) {
    const middle = Array.from({ length: 4 }, (_, i) => totalPages - 5 + i) // pages totalPages-5 to totalPages-2
    pagination.push('...', ...middle, totalPages)
  } else {
    const middle = [currentPage - 1, currentPage, currentPage + 1]
    pagination.push('...', ...middle, '...', totalPages)
  }

  return pagination
}
