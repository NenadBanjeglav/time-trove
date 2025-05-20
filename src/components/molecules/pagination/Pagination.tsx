import { useSearchParams } from 'react-router-dom'

import { getPaginationRange } from './helpers'
import { StyledPagination, PageInfo, Buttons, PaginationButton } from './pagination.styles'

export const PAGE_SIZE = 8

type PaginationProps = {
  count: number
}

export const Pagination = ({ count }: PaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const currentPage = Number(searchParams.get('page') || '1')
  const pageCount = Math.ceil(count / PAGE_SIZE)

  const handlePageChange = (page: number) => {
    searchParams.set('page', page.toString())
    setSearchParams(searchParams)
  }

  if (pageCount <= 1) return null

  const start = (currentPage - 1) * PAGE_SIZE + 1
  const end = currentPage === pageCount ? count : currentPage * PAGE_SIZE

  return (
    <StyledPagination>
      <PageInfo>
        Showing <span>{start}</span> to <span>{end}</span> of <span>{count}</span> results
      </PageInfo>

      <Buttons>
        {getPaginationRange(currentPage, pageCount).map((page, index) => {
          if (page === '...') {
            return (
              <PaginationButton key={`ellipsis-${index}`} disabled>
                ...
              </PaginationButton>
            )
          }

          return (
            <PaginationButton
              key={page}
              onClick={() => handlePageChange(page)}
              $active={currentPage === page}
            >
              {page}
            </PaginationButton>
          )
        })}
      </Buttons>
    </StyledPagination>
  )
}
