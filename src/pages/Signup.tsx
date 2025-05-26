import styled from 'styled-components'
import { z } from 'zod'

import { LogoutIcon } from '../assets/icons/LogoutIcon'
import { AuthForm } from '../components/molecules/authform/AuthForm'

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

const handleSignup = (data: LoginFormValues) => {
  console.log(data)
}

type LoginFormValues = z.infer<typeof loginSchema>

export const Signup = () => {
  return (
    <PageWrapper>
      <AuthForm
        schema={loginSchema}
        onSubmit={handleSignup}
        icon={LogoutIcon}
        title="Sign up"
        subtitle="Create an account for your TimeTrove Dashboard."
        buttonLabel="Sign up"
      />
    </PageWrapper>
  )
}
