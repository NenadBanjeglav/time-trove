import styled from 'styled-components'

export const StyledModal = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.neutral.hue0};
  border-radius: 12px;
  z-index: 1001;
`
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`
