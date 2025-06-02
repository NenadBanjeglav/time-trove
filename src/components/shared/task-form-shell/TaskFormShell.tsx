import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import { EditIcon } from '../../../assets/icons/EditIcon'
import { TRANSLATION_KEYS as T } from '../../../constants/translationKeys'
import { Button } from '../../atoms/button/Button'
import { Heading } from '../../atoms/heading/Heading'
import { Icon } from '../../atoms/icon/Icon'
import { Text } from '../../atoms/text/Text'

import {
  Form,
  FormHeader,
  IconTextWrapper,
  IconWrapper,
  ResponsiveFormWrapper,
  Section,
} from './taskFormShell.styles'

type TaskFormShellProps = {
  title: string
  description?: string
  isSubmitting: boolean
  onSubmit: () => void
  children: ReactNode
  buttonLabel: string
}

export const TaskFormShell = ({
  title,
  description,
  isSubmitting,
  onSubmit,
  children,
  buttonLabel,
}: TaskFormShellProps) => {
  const { t } = useTranslation()

  return (
    <ResponsiveFormWrapper>
      <Form onSubmit={onSubmit}>
        <FormHeader>
          <IconTextWrapper>
            <IconWrapper>
              <Icon icon={EditIcon} pallete="neutral" color="hue200" />
            </IconWrapper>
            <Heading as="h2" fontWeight="bold" fontSize="large" lineHeight="large">
              {title}
            </Heading>
          </IconTextWrapper>
          {description && (
            <Text
              fontWeight="regular"
              fontSize="small"
              lineHeight="small"
              pallete="neutral"
              color="hue200"
            >
              {description}
            </Text>
          )}
        </FormHeader>

        <Section>
          <Heading as="h3" fontWeight="bold" fontSize="base" lineHeight="base" textAlign="start">
            {t(T.TASK_FORM.SECTION_HEADING)}
          </Heading>
          {children}
        </Section>

        <Button type="submit" loading={isSubmitting} fullWidth size="medium">
          {buttonLabel}
        </Button>
      </Form>
    </ResponsiveFormWrapper>
  )
}
