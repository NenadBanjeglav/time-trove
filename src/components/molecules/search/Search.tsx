import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'

import { RemoveIcon } from '../../../assets/icons/RemoveIcon'
import { SearchIcon } from '../../../assets/icons/SearchIcon'
import { TRANSLATION_KEYS as T } from '../../../constants/translationKeys'
import { useDebouncedValue } from '../../../hooks/useDebounce'
import { Icon } from '../../atoms/icon/Icon'

import { ClearButton, IconWrapper, SearchWrapper, StyledInput } from './search.styles'

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentSearch = searchParams.get('search')
  const [search, setSearch] = useState(currentSearch || '')
  const debouncedSearch = useDebouncedValue(search, 500)
  const previousSearchRef = useRef(search)
  const { t } = useTranslation()

  useEffect(() => {
    const prevSearch = previousSearchRef.current
    const isSearchChanged = prevSearch !== debouncedSearch

    if (debouncedSearch) {
      searchParams.set('search', debouncedSearch)
      if (isSearchChanged) {
        searchParams.delete('page')
      }
    } else {
      searchParams.delete('search')
      if (prevSearch) {
        searchParams.delete('page')
      }
    }

    previousSearchRef.current = debouncedSearch
    setSearchParams(searchParams)
  }, [debouncedSearch, searchParams, setSearchParams])

  const handleChange = (value: string) => {
    setSearch(value)
  }

  return (
    <SearchWrapper>
      <IconWrapper>
        <Icon
          icon={SearchIcon}
          pallete="neutral"
          //@ts-ignore
          color="hue300"
          iconSize="small"
        />
      </IconWrapper>
      <StyledInput
        type="text"
        value={search}
        onChange={e => handleChange(e.target.value)}
        placeholder={t(T.SEARCH.PLACEHOLDER)}
        $hasValue={!!search}
        id="search"
      />
      {search && (
        <ClearButton onClick={() => handleChange('')}>
          <Icon icon={RemoveIcon} pallete="neutral" color="hue200" iconSize="small" />
        </ClearButton>
      )}
    </SearchWrapper>
  )
}
