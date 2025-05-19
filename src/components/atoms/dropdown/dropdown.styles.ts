import styled from 'styled-components'

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: fit-content;
`

export const TriggerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xSmall};
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};

  background-color: ${({ theme }) => theme.colors.neutral.hue0};
  border: 1px solid ${({ theme }) => theme.colors.neutral.hue200};
  border-radius: 8px;
  cursor: pointer;
  width: 142px;
  height: 40px;
`

export const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const Menu = styled.ul`
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
