import type { ChangeEvent } from 'react'

import { Chip } from '../../atoms/chip/Chip'
import type { ChipSize, ChipStatus } from '../../atoms/chip/chip.types'
import { RadioButton } from '../../atoms/radio-button/RadioButton'

import { RadioGroupWrapper, RadioOptionLabel, RadioOptionWrapper } from './radioGroup.styles'

export type RadioOption = {
  label: string
  value: string
  status: ChipStatus
}

export type RadioGroupProps = {
  name: string
  options: RadioOption[]
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  size: ChipSize
  error?: boolean
  isSeparate?: boolean
}

export const RadioGroup = ({
  name,
  options,
  value,
  onChange,
  disabled = false,
  size,
  error = false,
}: RadioGroupProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <RadioGroupWrapper>
      {options.map(option => {
        const isChecked = value === option.value

        const inputId = `${name}-${option.value}`

        return (
          <RadioOptionLabel key={option.value} htmlFor={inputId}>
            <RadioOptionWrapper>
              <RadioButton
                id={inputId}
                name={name}
                checked={isChecked}
                value={option.value}
                disabled={disabled}
                error={error}
                onChange={handleChange}
              />
              <Chip size={size} label={option.label} status={option.status} />
            </RadioOptionWrapper>
          </RadioOptionLabel>
        )
      })}
    </RadioGroupWrapper>
  )
}
