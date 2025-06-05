import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, type FC, type SVGProps } from 'react'
import { useForm, type FieldValues, type Path } from 'react-hook-form'
import type { ZodSchema } from 'zod'

import { Button } from '../../atoms/button/Button'
import { Heading } from '../../atoms/heading/Heading'
import { Icon } from '../../atoms/icon/Icon'
import { InputField } from '../../atoms/input/Input'
import { Text } from '../../atoms/text/Text'

import { Wrapper, FormHeader, IconWrapper } from './authForm.styles'
import { useTranslation } from 'react-i18next'

type AuthFormProps<FormValues> = {
  schema: ZodSchema<FormValues>
  onSubmit: (data: FormValues) => void
  icon: FC<SVGProps<SVGSVGElement>>
  title: string
  subtitle: string
  buttonLabel: string
  emailLabel: string
  passwordLabel: string
  isLoading: boolean
}

export const AuthForm = <FormValues extends FieldValues>({
  schema,
  onSubmit,
  icon,
  title,
  subtitle,
  buttonLabel,
  emailLabel,
  passwordLabel,
  isLoading,
}: AuthFormProps<FormValues>) => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  })

  const { i18n } = useTranslation()

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      trigger()
    }
  }, [i18n.language, trigger])

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <FormHeader>
        <IconWrapper>
          <Icon icon={icon} iconSize="small" pallete="neutral" />
        </IconWrapper>
        <Heading as="h2" fontSize="h2" lineHeight="h2" fontWeight="bold">
          {title}
        </Heading>
        <Text
          fontSize="small"
          color="hue200"
          textAlign="center"
          fontWeight="regular"
          lineHeight="small"
        >
          {subtitle}
        </Text>
      </FormHeader>

      <InputField
        {...register('username' as Path<FormValues>)}
        error={(errors.username as { message?: string })?.message ?? ''}
        label={emailLabel}
        type="email"
        autoComplete="username"
      />

      <InputField
        {...register('password' as Path<FormValues>)}
        error={(errors.password as { message?: string })?.message ?? ''}
        label={passwordLabel}
        type="password"
        autoComplete="current-password"
      />

      <Button type="submit" loading={isLoading} size="xlarge" fullWidth>
        {buttonLabel}
      </Button>
    </Wrapper>
  )
}
