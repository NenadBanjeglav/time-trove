import styled from 'styled-components'

export type DropdownSize = 'small' | 'large'

export const DropdownWrapper = styled.div<{ $size: DropdownSize }>`
  position: relative;
  display: inline-block;
  width: fit-content;
  min-width: ${({ $size }) => ($size === 'large' ? '292px' : '142px')};
`

export const TriggerButton = styled.button<{ $size: DropdownSize }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xSmall};
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  background-color: ${({ theme }) => theme.colors.neutral.hue0};
  border: 1px solid ${({ theme }) => theme.colors.neutral.hue200};
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 100%;
`

export const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const Menu = styled.ul<{ $size: DropdownSize }>`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  background: ${({ theme }) => theme.colors.neutral.hue0};
  border: 1px solid ${({ theme }) => theme.colors.neutral.hue200};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  z-index: 1000;
  list-style: none;
  width: 100%;
`

export const MenuItem = styled.li<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.small};
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral.hue50};
  }
`
