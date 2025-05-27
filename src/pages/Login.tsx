import styled from 'styled-components'
import { z } from 'zod'

import { LogoutIcon } from '../assets/icons/LogoutIcon'
import { AuthForm } from '../components/molecules/authform/AuthForm'
import { useAuth } from '../hooks/useAuth'
import { useLoginMutation } from '../hooks/useLoginMutation'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.neutral.hue50};
`

const loginSchema = z.object({
  username: z.string().email(),
  password: z.string().min(5),
})

type LoginFormValues = z.infer<typeof loginSchema>

export const Login = () => {
  const { loginMutation, isLoggingIn } = useLoginMutation()
  const { refetchUser } = useAuth()

  const handleLogin = async (data: LoginFormValues) => {
    loginMutation(data, {
      onSuccess: async () => {
        await refetchUser()
      },
    })
  }

  return (
    <PageWrapper>
      <AuthForm
        schema={loginSchema}
        onSubmit={handleLogin}
        icon={LogoutIcon}
        title="Log in"
        subtitle="Use your email to log in."
        buttonLabel={isLoggingIn ? 'Logging in...' : 'Log in'}
      />
    </PageWrapper>
  )
}
