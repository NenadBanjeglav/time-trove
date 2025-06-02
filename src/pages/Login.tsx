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
import { useLoginMutation } from '../hooks/useLoginMutation'

const PageWrapper = styled.div`
  position: relative;
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

const loginSchema = z.object({
  username: z.string().email(),
  password: z.string().min(5),
})

type LoginFormValues = z.infer<typeof loginSchema>

export const Login = () => {
  const { loginMutation, isLoggingIn } = useLoginMutation()
  const { t } = useTranslation()

  const handleLogin = async (data: LoginFormValues) => {
    loginMutation(data)
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
        schema={loginSchema}
        onSubmit={handleLogin}
        icon={LogoutIcon}
        title={t(T.AUTH.LOGIN)}
        subtitle={t(T.AUTH.SUBTITLE)}
        buttonLabel={t(T.AUTH.LOGIN)}
        emailLabel={t(T.AUTH.EMAIL)}
        passwordLabel={t(T.AUTH.PASSWORD)}
        isLoading={isLoggingIn}
      />
      <TextLinkWrapper>
        <Text fontSize="small" lineHeight="small" fontWeight="regular" as="span">
          {t('auth.noAccount')} <StyledLink to="/signup">{t('auth.signup')}</StyledLink>
        </Text>
      </TextLinkWrapper>
    </PageWrapper>
  )
}
