import type { InputHTMLAttributes } from 'react'
import { HiddenInput, StyledRadio, Wrapper } from './radioButton.styles'

type RadioButtonProps = {
  checked: boolean
  disabled?: boolean
  error?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'>

export const RadioButton = ({
  checked,
  disabled = false,
  error = false,
  onChange,
  ...rest
}: RadioButtonProps) => {
  return (
    <Wrapper $disabled={disabled}>
      <HiddenInput
        type="radio"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...rest}
      />
      <StyledRadio $checked={checked} $disabled={disabled} $error={error} />
    </Wrapper>
  )
}
