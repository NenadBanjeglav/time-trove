import { RemoveIcon } from '../../../assets/icons/RemoveIcon'
import { SearchIcon } from '../../../assets/icons/SearchIcon'
import { Icon } from '../icon/Icon'
import { ClearButton, IconWrapper, SearchWrapper, StyledInput } from './search.styles'
import { useSearchParams } from 'react-router-dom'

type SearchProps = {
  placeholder?: string
}

export const Search = ({ placeholder = 'Search' }: SearchProps) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const currentSearch = searchParams.get('search') || ''

  const handleChange = (value: string) => {
    if (value) searchParams.set('search', value)
    else searchParams.delete('search')
    setSearchParams(searchParams)
  }

  return (
    <SearchWrapper>
      <IconWrapper>
        <Icon icon={SearchIcon} pallete="neutral" color="hue500" iconSize="small" />
      </IconWrapper>
      <StyledInput
        type="text"
        value={currentSearch}
        onChange={e => handleChange(e.target.value)}
        placeholder={placeholder}
      />
      {currentSearch && (
        <ClearButton onClick={() => handleChange('')}>
          <Icon icon={RemoveIcon} pallete="neutral" color="hue300" iconSize="small" />
        </ClearButton>
      )}
    </SearchWrapper>
  )
}
