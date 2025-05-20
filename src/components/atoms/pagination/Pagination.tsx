import { useSearchParams } from 'react-router-dom'

import { PAGE_SIZE } from '../../../constants/constants'

import { getPaginationRange } from './helpers'
import { StyledPagination, PaginationButton, ButtonsWrapper } from './pagination.styles'

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

  return (
    <StyledPagination>
      <ButtonsWrapper>
        {getPaginationRange(currentPage, pageCount).map((page, index) => {
          if (page === '...') {
            return (
              <PaginationButton key={`...-${index}`} disabled>
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
      </ButtonsWrapper>
    </StyledPagination>
  )
}
