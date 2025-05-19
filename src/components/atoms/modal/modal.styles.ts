import styled from 'styled-components'

export const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.neutral.hue0};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.xLarge};
`
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.neutral.hue50};
  backdrop-filter: blur(4px);
  z-index: 1000;
`
