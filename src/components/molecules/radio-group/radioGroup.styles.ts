import styled from 'styled-components'

export const RadioGroupWrapper = styled.div`
  display: flex;
  gap: 16px;
  order: 3;

  @media (max-width: 760px) {
    margin-inline: 16px;
  }
`

export const RadioOptionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`
export const RadioOptionLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`
