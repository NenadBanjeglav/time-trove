import type { TextareaHTMLAttributes } from 'react'

import { ErrorText, StyledLabel, StyledTextarea, TextareaWrapper } from './textarea.styles'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  name: string
  label: string
  error?: string
}

export const TextareaField = ({ name, label, error, ...props }: TextareaProps) => {
  return (
    <TextareaWrapper>
      <StyledTextarea id={name} name={name} placeholder=" " $error={!!error} {...props} />
      <StyledLabel htmlFor={name} $error={!!error}>
        {label}
      </StyledLabel>
      {error && <ErrorText>{error}</ErrorText>}
    </TextareaWrapper>
  )
}
