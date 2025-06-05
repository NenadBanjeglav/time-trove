import type { ReactNode } from 'react'
import styled from 'styled-components'

export const FlatListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing.medium};
  max-width: 1240px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

type FlatListProps<T> = {
  items: T[]
  render: (item: T, index: number) => ReactNode
  empty?: ReactNode | (() => ReactNode)
}

export const FlatList = <T,>({ items, render, empty }: FlatListProps<T>) => {
  if (items.length === 0) {
    return typeof empty === 'function' ? <>{empty()}</> : <>{empty}</>
  }

  return <FlatListWrapper>{items.map((item, index) => render(item, index))}</FlatListWrapper>
}
