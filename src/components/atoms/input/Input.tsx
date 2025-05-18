import type { InputHTMLAttributes } from 'react'

import { StyledLabel, StyledInput, ErrorText, StyledFormRow } from './input.styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  label: string
  error?: string
}

export const InputField = ({ name, label, error, ...props }: InputProps) => {
  return (
    <StyledFormRow>
      <StyledLabel htmlFor={name} $error={!!error}>
        {label}
      </StyledLabel>

      <StyledInput id={name} name={name} $error={!!error} {...props} />
      <ErrorText $visible={!!error}>{error || '‎'}</ErrorText>
    </StyledFormRow>
  )
}
