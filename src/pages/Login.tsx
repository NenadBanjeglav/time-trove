import styled from 'styled-components'
import { z } from 'zod'

import { LogoutIcon } from '../assets/icons/LogoutIcon'
import { AuthForm } from '../components/molecules/authform/AuthForm'

import { useLoginMutation } from '../hooks/useLoginMutation'
import { Logo } from '../components/atoms/logo/Logo'
import { Text } from '../components/atoms/text/Text'
import { Link } from 'react-router-dom'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.neutral.hue50};
  padding: 16px 16px;
`

const LogoWrapper = styled.div`
  margin-bottom: 32px;
`

const TextLinkWrapper = styled.div`
  margin-top: 20px;
`

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary.hue100};
  text-decoration: none;
  font-weight: bold;
`

const loginSchema = z.object({
  username: z.string().email(),
  password: z.string().min(5),
})

type LoginFormValues = z.infer<typeof loginSchema>

export const Login = () => {
  const { loginMutation, isLoggingIn } = useLoginMutation()

  const handleLogin = async (data: LoginFormValues) => {
    loginMutation(data)
  }

  return (
    <PageWrapper>
      <LogoWrapper>
        <Logo variant="full" />
      </LogoWrapper>
      <AuthForm
        schema={loginSchema}
        onSubmit={handleLogin}
        icon={LogoutIcon}
        title="Log in"
        subtitle="Use your email to log in."
        buttonLabel="Log in"
        isLoading={isLoggingIn}
      />
      <TextLinkWrapper>
        <Text fontSize="small" lineHeight="small" fontWeight="regular" as="span">
          Don't have an account yet? <StyledLink to="/signup">Sign up</StyledLink>
        </Text>
      </TextLinkWrapper>
    </PageWrapper>
  )
}
