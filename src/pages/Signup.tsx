import styled from 'styled-components'
import { z } from 'zod'

import { LogoutIcon } from '../assets/icons/LogoutIcon'
import { AuthForm } from '../components/molecules/authform/AuthForm'

import { useSignupMutation } from '../hooks/useSignupMutation'
import { Link } from 'react-router-dom'
import { Logo } from '../components/atoms/logo/Logo'
import { Text } from '../components/atoms/text/Text'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.neutral.hue50};
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

const signupSchema = z.object({
  username: z.string().email(),
  password: z.string().min(5),
})

type SignupFormValues = z.infer<typeof signupSchema>

export const Signup = () => {
  const { signupMutation, isSigningUp } = useSignupMutation()

  const handleSignup = (data: SignupFormValues) => {
    signupMutation(data)
  }
  return (
    <PageWrapper>
      <LogoWrapper>
        <Logo variant="full" />
      </LogoWrapper>
      <AuthForm
        schema={signupSchema}
        onSubmit={handleSignup}
        icon={LogoutIcon}
        title="Sign up"
        subtitle="Create an account for your TimeTrove Dashboard."
        buttonLabel="Sign up"
        isLoading={isSigningUp}
      />
      <TextLinkWrapper>
        <Text fontSize="small" lineHeight="small" fontWeight="regular" as="span">
          You already have an account? <StyledLink to="/login">Log in</StyledLink>
        </Text>
      </TextLinkWrapper>
    </PageWrapper>
  )
}
