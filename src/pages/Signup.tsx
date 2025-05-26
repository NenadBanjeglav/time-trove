import styled from 'styled-components'
import { z } from 'zod'

import { LogoutIcon } from '../assets/icons/LogoutIcon'
import { AuthForm } from '../components/molecules/authform/AuthForm'
import { useSignupMutation } from '../hooks/useSignupMutation'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.neutral.hue50};
`

const signupSchema = z.object({
  username: z.string().email(),
  password: z.string().min(5),
})

type SignupFormValues = z.infer<typeof signupSchema>

export const Signup = () => {
  const { signupMutation, isSigningUp } = useSignupMutation()

  const handleSignup = (data: SignupFormValues) => {
    console.log('Signup RESPONSE: ', data)
    signupMutation(data)
  }
  return (
    <PageWrapper>
      <AuthForm
        schema={signupSchema}
        onSubmit={handleSignup}
        icon={LogoutIcon}
        title="Sign up"
        subtitle="Create an account for your TimeTrove Dashboard."
        buttonLabel={isSigningUp ? 'Signing up...' : 'Sign up'}
      />
    </PageWrapper>
  )
}
