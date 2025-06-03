import styled from 'styled-components'

export const StyledNavbar = styled.nav`
  width: 100%;
  padding: 8px 20px;
  min-height: 56px;
  box-sizing: border-box;
`

export const NavbarContainer = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.small};

  @media (max-width: 760px) {
    flex-wrap: wrap;
  }
`

export const ButtonIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 447px;
  order: 2;

  @media (max-width: 1240px) {
    max-width: 180px;
  }
`

export const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 123px;
`
