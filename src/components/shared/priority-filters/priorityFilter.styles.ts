import styled from 'styled-components'

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1240px;
  margin: 0 auto;
  margin-bottom: 16px;
  width: 100%;

  @media (max-width: 760px) {
    flex-wrap: wrap;
  }
`

export const HeadingWrapper = styled.div`
  @media (max-width: 760px) {
    margin-inline: 16px;
    margin-bottom: 16px;
  }
`

export const ResponsiveSeparator = styled.div`
  width: 1px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.neutral.hue100};
  margin: 0 16px;
  order: 2;

  @media (max-width: 760px) {
    width: 100%;
    height: 1px;
    margin: 16px 16px;
  }
`
export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  order: 1;

  @media (max-width: 760px) {
    margin-inline: 16px;
    justify-content: start;
  }
`
