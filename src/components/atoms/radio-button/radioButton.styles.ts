import styled, { css } from 'styled-components'

export const Wrapper = styled.label<{ $disabled: boolean }>`
  display: inline-flex;
  align-items: center;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
`

export const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`

export const StyledRadio = styled.span<{
  $checked: boolean
  $disabled: boolean
  $error: boolean
}>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;

  ${({ theme, $checked, $disabled, $error }) => {
    const borderColor = $error
      ? theme.colors.danger.hue100
      : $disabled
        ? theme.colors.neutral.hue50
        : theme.colors.neutral.hue100

    const bgColor = $disabled
      ? theme.colors.neutral.hue50
      : $checked
        ? $error
          ? theme.colors.danger.hue200
          : theme.colors.primary.hue200
        : 'transparent'

    const dotColor = $disabled ? theme.colors.neutral.hue100 : theme.colors.neutral.hue0

    return css`
      border: 1px solid ${borderColor};
      background-color: ${bgColor};

      &::after {
        content: '';
        display: ${$disabled || $checked ? 'block' : 'none'};
        width: ${$disabled ? '2px' : '8px'};
        height: ${$disabled ? '2px' : '8px'};
        background-color: ${dotColor};
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      opacity: ${$disabled ? 0.6 : 1};
    `
  }}
`
