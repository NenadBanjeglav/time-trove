import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { z } from 'zod'

import { LogoutIcon } from '../assets/icons/LogoutIcon'
import { Logo } from '../components/atoms/logo/Logo'
import { Text } from '../components/atoms/text/Text'
import { AuthForm } from '../components/molecules/authform/AuthForm'
import { LanguageSwitcher } from '../components/shared/language-switcher/LanguageSwitcher'
import { TRANSLATION_KEYS as T } from '../constants/translationKeys'
import { useSignupMutation } from '../hooks/useSignupMutation'

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

const DropdownWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
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
  const { t } = useTranslation()

  const handleSignup = (data: SignupFormValues) => {
    signupMutation(data)
  }
  return (
    <PageWrapper>
      <DropdownWrapper>
        <LanguageSwitcher />
      </DropdownWrapper>
      <LogoWrapper>
        <Logo variant="full" />
      </LogoWrapper>
      <AuthForm
        schema={signupSchema}
        onSubmit={handleSignup}
        icon={LogoutIcon}
        title={t(T.AUTH.SIGNUP_TITLE)}
        subtitle={t(T.AUTH.SIGNUP_SUBTITLE)}
        buttonLabel={t(T.AUTH.SIGNUP_BUTTON)}
        emailLabel={t(T.AUTH.EMAIL)}
        passwordLabel={t(T.AUTH.PASSWORD)}
        isLoading={isSigningUp}
      />
      <TextLinkWrapper>
        <Text fontSize="small" lineHeight="small" fontWeight="regular" as="span">
          {t(T.AUTH.HAS_ACCOUNT)} <StyledLink to="/login">{t(T.AUTH.LOGIN)}</StyledLink>
        </Text>
      </TextLinkWrapper>
    </PageWrapper>
  )
}
