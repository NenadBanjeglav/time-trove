import { forwardRef } from 'react'
import type { ReactNode } from 'react'
import { Button } from '../../atoms/button/Button'
import { Heading } from '../../atoms/heading/Heading'
import { Icon } from '../../atoms/icon/Icon'
import { Text } from '../../atoms/text/Text'
import { EditIcon } from '../../../assets/icons/EditIcon'
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

export const TaskFormShell = forwardRef<HTMLDivElement, TaskFormShellProps>(
  ({ title, description, isSubmitting, onSubmit, children, buttonLabel }) => (
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
            Task details
          </Heading>
          {children}
        </Section>

        <Button type="submit" loading={isSubmitting} fullWidth size="medium">
          {buttonLabel}
        </Button>
      </Form>
    </ResponsiveFormWrapper>
  )
)
