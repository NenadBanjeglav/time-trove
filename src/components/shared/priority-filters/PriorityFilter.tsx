import { useSearchParams } from 'react-router-dom'
import { FilterWrapper, HeadingWrapper, ResponsiveSeparator, TopRow } from './priorityFilter.styles'
import { RadioGroup, type RadioOption } from '../../molecules/radio-group/RadioGroup'
import { ChipSize, ChipStatus } from '../../atoms/chip/chip.types'
import { Heading } from '../../atoms/heading/Heading'
import { RadioButton } from '../../atoms/radio-button/RadioButton'
import { RadioOptionLabel, RadioOptionWrapper } from '../../molecules/radio-group/radioGroup.styles'
import { Chip } from '../../atoms/chip/Chip'

const PRIORITY_OPTIONS: RadioOption[] = [
  { label: 'Low', value: 'low', status: ChipStatus.SUCCESS },
  { label: 'Medium', value: 'medium', status: ChipStatus.WARNING },
  { label: 'High', value: 'high', status: ChipStatus.DANGER },
]

export const PriorityFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const currentPriority = searchParams.get('priority') || ''

  const handleChange = (value: string) => {
    if (value === '') {
      searchParams.delete('priority')
    } else {
      searchParams.set('priority', value)
    }

    searchParams.delete('page')

    setSearchParams(searchParams)
  }

  return (
    <FilterWrapper>
      <HeadingWrapper>
        <Heading fontSize="base" lineHeight="xSmall" fontWeight="bold">
          Tasks
        </Heading>
      </HeadingWrapper>
      <TopRow>
        <RadioOptionLabel htmlFor="priority-all">
          <RadioOptionWrapper>
            <RadioButton
              id="priority-all"
              name="priority"
              value=""
              checked={currentPriority === ''}
              onChange={() => handleChange('')}
            />
            <Chip size={ChipSize.SMALL} label="All tasks" status={ChipStatus.PRIMARY} />
          </RadioOptionWrapper>
        </RadioOptionLabel>
      </TopRow>

      <ResponsiveSeparator />

      <RadioGroup
        name="priority"
        options={PRIORITY_OPTIONS}
        value={currentPriority}
        onChange={handleChange}
        size={ChipSize.SMALL}
      />
    </FilterWrapper>
  )
}
