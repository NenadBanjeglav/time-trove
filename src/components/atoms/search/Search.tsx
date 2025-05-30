import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { RemoveIcon } from '../../../assets/icons/RemoveIcon'
import { SearchIcon } from '../../../assets/icons/SearchIcon'
import { Icon } from '../icon/Icon'

import { ClearButton, IconWrapper, SearchWrapper, StyledInput } from './search.styles'

type SearchProps = {
  placeholder?: string
}

export const Search = ({ placeholder = 'Search' }: SearchProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentSearch = searchParams.get('search')
  const [search, setSearch] = useState(currentSearch || '')

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (search) {
        searchParams.set('search', search)
      } else {
        searchParams.delete('search')
      }
      setSearchParams(searchParams)
    }, 150)

    return () => clearTimeout(timeout)
  }, [search, searchParams, setSearchParams])

  const handleChange = (value: string) => {
    setSearch(value)
  }

  return (
    <SearchWrapper>
      <IconWrapper>
        <Icon icon={SearchIcon} pallete="neutral" color="hue500" iconSize="small" />
      </IconWrapper>
      <StyledInput
        type="text"
        value={search}
        onChange={e => handleChange(e.target.value)}
        placeholder={placeholder}
        $hasValue={!!search}
        id="search"
      />
      {search && (
        <ClearButton onClick={() => handleChange('')}>
          <Icon icon={RemoveIcon} pallete="neutral" color="hue300" iconSize="small" />
        </ClearButton>
      )}
    </SearchWrapper>
  )
}
