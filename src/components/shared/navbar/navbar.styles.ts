import styled from 'styled-components'

export const StyledNavbar = styled.nav`
  width: 100%;
  padding: 8px 20px;
  height: 56px;
`

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
`

export const ButtonLogoutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;

  > * {
    flex-shrink: 0;
  }
`
