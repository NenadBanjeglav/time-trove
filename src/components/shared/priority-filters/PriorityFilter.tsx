import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'

import { TRANSLATION_KEYS as T } from '../../../constants/translationKeys'
import { Chip } from '../../atoms/chip/Chip'
import { ChipSize, ChipStatus } from '../../atoms/chip/chip.types'
import { Heading } from '../../atoms/heading/Heading'
import { RadioButton } from '../../atoms/radio-button/RadioButton'
import { RadioGroup, type RadioOption } from '../../molecules/radio-group/RadioGroup'
import { RadioOptionLabel, RadioOptionWrapper } from '../../molecules/radio-group/radioGroup.styles'
import { LanguageSwitcher } from '../language-switcher/LanguageSwitcher'

import { FilterWrapper, HeadingWrapper, ResponsiveSeparator, TopRow } from './priorityFilter.styles'

export const PriorityFilters = () => {
  const { t } = useTranslation()
  const [searchParams, setSearchParams] = useSearchParams()

  const PRIORITY_OPTIONS: RadioOption[] = [
    { label: t(T.PRIORITY_FILTER.PRIORITY.LOW), value: 'low', status: ChipStatus.SUCCESS },
    { label: t(T.PRIORITY_FILTER.PRIORITY.MEDIUM), value: 'medium', status: ChipStatus.WARNING },
    { label: t(T.PRIORITY_FILTER.PRIORITY.HIGH), value: 'high', status: ChipStatus.DANGER },
  ]

  const currentPriority = searchParams.get('priority') || ''

  const handlePriorityChange = (value: string) => {
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
          {t(T.PRIORITY_FILTER.HEADING)}
        </Heading>
        <LanguageSwitcher />
      </HeadingWrapper>
      <TopRow>
        <RadioOptionLabel htmlFor="priority-all">
          <RadioOptionWrapper>
            <RadioButton
              id="priority-all"
              name="priority"
              value=""
              checked={currentPriority === ''}
              onChange={() => handlePriorityChange('')}
            />
            <Chip
              size={ChipSize.SMALL}
              label={t(T.PRIORITY_FILTER.ALL_TASKS)}
              status={ChipStatus.PRIMARY}
            />
          </RadioOptionWrapper>
        </RadioOptionLabel>
      </TopRow>

      <ResponsiveSeparator />

      <RadioGroup
        name="priority"
        options={PRIORITY_OPTIONS}
        value={currentPriority}
        onChange={handlePriorityChange}
        size={ChipSize.SMALL}
      />
    </FilterWrapper>
  )
}
