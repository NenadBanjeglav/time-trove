import { forwardRef, useId, type InputHTMLAttributes } from 'react'
import { InputWrapper, StyledInput, StyledLabel } from './input.styles'
import { Text } from '../text/Text'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, placeholder, ...rest }, ref) => {
    const generatedId = useId()
    const inputId = id ?? generatedId
    return (
      <InputWrapper>
        {label && (
          <StyledLabel htmlFor={inputId} $hasError={!!error}>
            {label}
          </StyledLabel>
        )}
        <StyledInput
          id={inputId}
          ref={ref}
          $hasError={!!error}
          placeholder={placeholder}
          {...rest}
        />
        {error && (
          <Text pallete="danger" color="hue200" fontSize="xSmall" lineHeight="xSmall">
            {error}
          </Text>
        )}
      </InputWrapper>
    )
  }
)
