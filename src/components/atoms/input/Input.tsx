import type { InputHTMLAttributes } from 'react'

import { StyledLabel, StyledInput, ErrorText, InputWrapper } from './input.styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  label: string
  error?: string
}
export const InputField = ({ name, label, error, ...props }: InputProps) => {
  return (
    <InputWrapper>
      <StyledInput id={name} name={name} placeholder=" " $error={!!error} {...props} />
      <StyledLabel htmlFor={name} $error={!!error}>
        {label}
      </StyledLabel>
      <ErrorText $visible={!!error}>{error || '‎'}</ErrorText>
    </InputWrapper>
  )
}
