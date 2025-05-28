import styled from 'styled-components'

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xLarge};
  background-color: ${({ theme }) => theme.colors.neutral.hue0};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  max-width: 29.375rem;
`

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.neutral.hue50};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.smallPlus};
  text-align: center;
`
