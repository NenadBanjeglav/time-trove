import { Button } from '../../atoms/button/Button'
import { Heading } from '../../atoms/heading/Heading'
import { Icon } from '../../atoms/icon/Icon'
import { Text } from '../../atoms/text/Text'

import {
  ButtonRow,
  HeadingTextWrapper,
  IconWrapper,
  ResponsiveCardWrapper,
} from './confirmDialog.styles'
import { DialogVariant } from './confirmDialog.types'
import { getDialogIcon, getDialogVariant } from './helpers'

type ConfirmDialogProps = {
  variant?: DialogVariant
  title: string
  description: string
  primaryActionLabel?: string
  secondaryActionLabel?: string
  onPrimaryAction?: () => void
  onClose?: () => void
  loading?: boolean
}

export const ConfirmDialog = ({
  variant = DialogVariant.SUCCESS,
  title,
  description,
  primaryActionLabel,
  secondaryActionLabel,
  onPrimaryAction,
  onClose,

  loading = false,
}: ConfirmDialogProps) => {
  const pallete = getDialogVariant(variant)
  const icon = getDialogIcon(variant)

  const handleCancel = () => {
    onClose?.()
  }

  return (
    <ResponsiveCardWrapper>
      <IconWrapper $pallete={pallete}>
        <Icon icon={icon} iconSize="large" pallete="neutral" color="hue0" />
      </IconWrapper>

      <HeadingTextWrapper>
        <Heading
          as="h2"
          fontSize="h2"
          fontWeight="semiBold"
          pallete="neutral"
          //@ts-ignore
          color="hue500"
        >
          {title}
        </Heading>
        <Text fontSize="small" fontWeight="regular" pallete="neutral" color="hue200">
          {description}
        </Text>
      </HeadingTextWrapper>
      <ButtonRow>
        {secondaryActionLabel && (
          <Button variant="neutral" onClick={handleCancel} size="xlarge" fullWidth>
            {secondaryActionLabel}
          </Button>
        )}
        {primaryActionLabel && (
          <Button
            variant={pallete}
            onClick={onPrimaryAction}
            loading={loading}
            fullWidth
            size="xlarge"
          >
            {primaryActionLabel}
          </Button>
        )}
      </ButtonRow>
    </ResponsiveCardWrapper>
  )
}
